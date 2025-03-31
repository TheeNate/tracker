/**
 * Signature Routes
 * Handles all signature related operations
 */

const express = require('express');
const router = express.Router();
const { requireAuth } = require('../middleware/authMiddleware');
const db = require('../config/db');
const crypto = require('crypto');
const nodemailer = require('nodemailer');

// Set up Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Apply authentication middleware to protected routes
router.use(requireAuth);

/**
 * @route   GET /api/signatures
 * @desc    Get all signatures for the current user's entries
 * @access  Private
 */
router.get('/', (req, res) => {
  const userId = req.session.userId;
  
  db.query(
    `SELECT s.id, s.entry_id, s.method, s.hours, s.auto_signature, s.status, s.timestamp_hash 
     FROM signatures s
     JOIN entries e ON s.entry_id = e.id
     WHERE s.status = "Confirmed" AND e.user_id = ?`,
    [userId],
    (err, results) => {
      if (err) {
        console.error('Database fetch error:', err);
        return res.status(500).json({ success: false, message: 'Failed to fetch signatures' });
      }

      // Format the hash to '123...4D6'
      const formattedResults = results.map(sig => ({
        ...sig,
        short_hash: sig.timestamp_hash 
          ? `${sig.timestamp_hash.slice(0, 3)}...${sig.timestamp_hash.slice(-3)}` 
          : 'N/A'
      }));

      res.json({ success: true, data: formattedResults });
    }
  );
});

/**
 * @route   POST /api/signatures/request
 * @desc    Request a signature from a supervisor
 * @access  Private
 */
router.post('/request', (req, res) => {
  const userId = req.session.userId;
  const { entryId, name, email, company, asnt, certLevel, method, hours } = req.body;
  const token = crypto.randomBytes(16).toString('hex');

  // Get user's full name for the signature request
  db.query('SELECT full_name FROM users WHERE id = ?', [userId], (err, userResults) => {
    if (err || userResults.length === 0) {
      console.error('Error fetching user details:', err);
      return res.status(500).json({ success: false, message: 'Failed to get user details' });
    }
    
    const technicianName = userResults[0].full_name;
    
    const query = `
      INSERT INTO signatures 
      (entry_id, technician_id, technician, hours, method, supervisor_name, supervisor_email, company, asnt, cert_level, token, status) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    
    db.query(
      query,
      [
        entryId || null,
        userId,
        technicianName,
        hours,
        method,
        name,
        email,
        company,
        asnt,
        certLevel,
        token,
        'Pending'
      ],
      (err, results) => {
        if (err) {
          console.error('Database insert error:', err);
          return res.status(500).json({ success: false, message: 'Failed to create signature request' });
        }
        
        const insertedID = results.insertId;

        const baseUrl = process.env.BASE_URL || `http://localhost:${process.env.PORT || 3000}`;
        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: email,
          subject: 'NDT Hours Verification Request',
          text: `Hello ${name},

Technician ${technicianName} has logged ${hours} hours of ${method} and is requesting your confirmation.

Please click the link below to verify these hours:
${baseUrl}/confirm?token=${token}

Thank you,
NDT Hours Tracker`
        };
        
        transporter.sendMail(mailOptions, (error) => {
          if (error) {
            console.error('Email error:', error);
            return res.status(500).json({ success: false, message: 'Failed to send verification email' });
          }
          res.json({ success: true, insertedID });
        });
      }
    );
  });
});

/**
 * @route   GET /api/signatures/verify/:id
 * @desc    Get verification details for a signature
 * @access  Private
 */
router.get('/verify/:id', (req, res) => {
  const signatureId = req.params.id;
  db.query(
    'SELECT verification_date, cert_level, employee_id, cert_number FROM signatures WHERE id = ?',
    [signatureId],
    (err, results) => {
      if (err || results.length === 0) {
        return res.status(404).json({ success: false, message: 'Signature not found' });
      }
      
      res.json({ 
        success: true, 
        verification_date: results[0].verification_date,
        cert_level: results[0].cert_level,
        employee_id: results[0].employee_id,
        cert_number: results[0].cert_number
      });
    }
  );
});

/**
 * @route   GET /confirm
 * @desc    Handle supervisor confirmation from email link
 * @access  Public
 */
router.get('/confirm', (req, res) => {
  const token = req.query.token;
  db.query(
    'SELECT * FROM signatures WHERE token = ? AND status = "Pending"',
    [token],
    (err, results) => {
      if (err || results.length === 0) {
        return res.status(400).send('Invalid or expired token.');
      }
      
      const record = results[0];
      const supervisorName = record.supervisor_name;
      const method = record.method;
      const hours = record.hours;
      const technician = record.technician || 'Technician';
      
      res.send(`
        <html>
          <head>
            <title>Verify NDT Hours</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                margin: 20px;
                max-width: 800px;
                margin: 0 auto;
                padding: 20px;
              }
              h2 {
                color: #4a6da7;
                border-bottom: 2px solid #4a6da7;
                padding-bottom: 10px;
              }
              .info-panel {
                background-color: #f8f9fa;
                border: 1px solid #ddd;
                border-radius: 5px;
                padding: 15px;
                margin-bottom: 20px;
              }
              label {
                display: block;
                margin-bottom: 5px;
                font-weight: bold;
              }
              input, select {
                width: 100%;
                padding: 8px;
                margin-bottom: 15px;
                border: 1px solid #ddd;
                border-radius: 4px;
              }
              button {
                background-color: #4a6da7;
                color: white;
                border: none;
                padding: 10px 15px;
                border-radius: 4px;
                cursor: pointer;
                font-size: 16px;
              }
              button:hover {
                background-color: #3a5b8c;
              }
              .required:after {
                content: " *";
                color: red;
              }
              .note {
                font-size: 0.9em;
                color: #666;
                margin-top: 15px;
              }
            </style>
          </head>
          <body>
            <h2>Verify NDT Hours</h2>
            
            <div class="info-panel">
              <p>You are being asked to verify that <strong>${technician}</strong> has performed <strong>${hours} hours</strong> of <strong>${method}</strong> under your supervision.</p>
              <p>Please complete the form below to confirm this record.</p>
            </div>
            
            <form action="/api/signatures/submitVerification" method="POST">
              <input type="hidden" name="token" value="${token}" />
              
              <label for="supervisorName" class="required">Your Full Name</label>
              <input type="text" id="supervisorName" name="supervisorName" value="${supervisorName}" required />
              
              <label for="employeeId" class="required">Employee ID Number</label>
              <input type="text" id="employeeId" name="employeeId" required />
              
              <label for="certNumber">ASNT Certification Number (if applicable)</label>
              <input type="text" id="certNumber" name="certNumber" />
              
              <label for="certLevel">Certification Level</label>
              <select id="certLevel" name="certLevel">
                <option value="">Select if applicable</option>
                <option value="Level I">Level I</option>
                <option value="Level II">Level II</option>
                <option value="Level III">Level III</option>
              </select>
              
              <label for="verificationDate" class="required">Verification Date</label>
              <input type="date" id="verificationDate" name="verificationDate" value="${new Date().toISOString().split('T')[0]}" required />
              
              <label for="typedSignature" class="required">Type Your Signature</label>
              <input type="text" id="typedSignature" name="typedSignature" required />
              
              <button type="submit">I Verify These Hours</button>
              
              <p class="note">By submitting this form, you are certifying that the information provided is true and accurate. 
              A cryptographic timestamp will be created as evidence of this verification.</p>
            </form>
          </body>
        </html>
      `);
    }
  );
});

/**
 * @route   POST /api/signatures/submitVerification
 * @desc    Process signature verification from supervisor
 * @access  Public
 */
router.post('/submitVerification', (req, res) => {
  const { 
    token, 
    supervisorName, 
    employeeId, 
    certNumber, 
    certLevel, 
    verificationDate, 
    typedSignature 
  } = req.body;
  
  db.query(
    'SELECT * FROM signatures WHERE token = ? AND status = "Pending"',
    [token],
    (err, results) => {
      if (err || results.length === 0) {
        return res.status(400).send('Invalid or expired token (or already confirmed).');
      }
      
      const signatureRow = results[0];
      
      // Update the existing signature record with additional information
      db.query(
        `UPDATE signatures SET 
          status = "Confirmed", 
          auto_signature = ?, 
          employee_id = ?,
          cert_number = ?,
          cert_level = ?,
          verification_date = ?
        WHERE id = ?`,
        [typedSignature, employeeId, certNumber, certLevel, verificationDate, signatureRow.id],
        async (err2) => {
          if (err2) {
            console.error('Database update error:', err2);
            return res.status(500).send('Error saving verification details.');
          }
          
          // Create verification data object
          const verificationData = {
            signatureId: signatureRow.id,
            entryId: signatureRow.entry_id,
            method: signatureRow.method,
            hours: signatureRow.hours,
            technician: signatureRow.technician,
            supervisor: supervisorName,
            employeeId: employeeId,
            certNumber: certNumber || 'None',
            certLevel: certLevel || 'None',
            verificationDate: verificationDate,
            verifiedAt: new Date().toISOString()
          };
          
          // Convert the data to a string for hashing
          const dataString = JSON.stringify(verificationData);
          
          // Create a hash of the verification data
          const hash = crypto.createHash('sha256').update(dataString).digest('hex');
          
          // Store the hash in the database
          db.query(
            'UPDATE signatures SET timestamp_hash = ? WHERE id = ?',
            [hash, signatureRow.id],
            (err3) => {
              if (err3) {
                console.error('Error storing timestamp hash:', err3);
              }
              
              // Display confirmation to the user
              res.send(`
                <html>
                  <head>
                    <title>Verification Confirmed</title>
                    <style>
                      body {
                        font-family: Arial, sans-serif;
                        line-height: 1.6;
                        margin: 20px;
                        max-width: 800px;
                        margin: 0 auto;
                        padding: 20px;
                      }
                      h2 {
                        color: #28a745;
                        border-bottom: 2px solid #28a745;
                        padding-bottom: 10px;
                      }
                      .success-panel {
                        background-color: #d4edda;
                        border: 1px solid #c3e6cb;
                        border-radius: 5px;
                        padding: 15px;
                        margin-bottom: 20px;
                        color: #155724;
                      }
                      .hash-info {
                        background-color: #f8f9fa;
                        border: 1px solid #ddd;
                        padding: 10px;
                        font-family: monospace;
                        word-break: break-all;
                        margin-top: 20px;
                      }
                    </style>
                  </head>
                  <body>
                    <h2>Verification Successful</h2>
                    
                    <div class="success-panel">
                      <p>Thank you, ${supervisorName}! You have successfully verified ${signatureRow.hours} hours 
                      of ${signatureRow.method} for ${signatureRow.technician}.</p>
                      <p>A cryptographic timestamp has been created to secure this verification.</p>
                    </div>
                    
                    <p>This verification has been recorded with the following details:</p>
                    <ul>
                      <li><strong>Verification Date:</strong> ${verificationDate}</li>
                      <li><strong>Employee ID:</strong> ${employeeId}</li>
                      ${certNumber ? `<li><strong>Certification Number:</strong> ${certNumber}</li>` : ''}
                      ${certLevel ? `<li><strong>Certification Level:</strong> ${certLevel}</li>` : ''}
                    </ul>
                    
                    <div class="hash-info">
                      <p><strong>Verification Hash:</strong></p>
                      <p>${hash}</p>
                      <p><small>This hash uniquely identifies this verification and provides tamper-evident proof.</small></p>
                    </div>
                  </body>
                </html>
              `);
            }
          );
        }
      );
    }
  );
});

module.exports = router;
