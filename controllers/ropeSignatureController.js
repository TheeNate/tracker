const db = require('../config/db');
const crypto = require('crypto');
const nodemailer = require('nodemailer');

exports.requestSignature = (req, res) => {
  const {
    entryId,
    supervisorName,
    supervisorEmail,
    supervisorCompany,
    asnt,
    certLevel
  } = req.body;

  if (!entryId || !supervisorName || !supervisorEmail) {
    return res.status(400).json({ success: false, message: 'Missing required fields' });
  }

  // Generate token for verification link
  const token = crypto.randomBytes(16).toString('hex');

  // Store signature request
  const sql = `
    INSERT INTO rope_signatures 
    (entry_id, supervisor_name, supervisor_email, supervisor_company, asnt_number, certification_level, token, status) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(sql, [
    entryId, supervisorName, supervisorEmail, supervisorCompany || '',
    asnt || '', certLevel || '', token, 'Pending'
  ], (err) => {
    if (err) {
      console.error('DB insert error (signature):', err);
      return res.status(500).json({ success: false, message: 'DB insert error' });
    }

    // Generate confirmation link
    const baseUrl = process.env.BASE_URL || `http://localhost:${process.env.PORT || 3000}`;
    const link = `${baseUrl}/confirm/rope-signature?token=${token}`;

    // Send email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: supervisorEmail,
      subject: 'Rope Access Hours Signature Request',
      text: `Hi ${supervisorName},

You have a rope access hours signature request.

Please click the link below to confirm these hours:
${link}

Thank you.`
    };

    transporter.sendMail(mailOptions, (emailErr) => {
      if (emailErr) {
        console.error('Email send error:', emailErr);
        return res.status(500).json({ success: false, message: 'Failed to send email' });
      }

      res.json({ success: true, message: 'Signature request sent' });
    });
  });
};

exports.confirmSignature = (req, res) => {
  const { token } = req.query;

  if (!token) {
    return res.status(400).send('Invalid token.');
  }

  db.query(
    'SELECT rs.*, re.tasks, re.rope_hours, u.full_name AS technician_name FROM rope_signatures rs ' +
    'JOIN rope_entries re ON rs.entry_id = re.id ' +
    'JOIN users u ON re.user_id = u.id ' +
    'WHERE rs.token = ? AND rs.status = "Pending"',
    [token],
    (err, results) => {
      if (err || results.length === 0) {
        return res.status(404).send('Signature request not found or already confirmed.');
      }
      
      const record = results[0];
      const supervisorName = record.supervisor_name;
      const tasks = record.tasks;
      const hours = record.rope_hours;
      const technician = record.technician_name;
      
      res.send(`
        <html>
          <head>
            <title>Verify Rope Access Hours</title>
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
            <h2>Verify Rope Access Hours</h2>
            
            <div class="info-panel">
              <p>You are being asked to verify that <strong>${technician}</strong> has performed <strong>${hours} hours</strong> of rope access tasks: <strong>${tasks}</strong> under your supervision.</p>
              <p>Please complete the form below to confirm this record.</p>
            </div>
            
            <form action="/api/rope-signatures/submitVerification" method="POST">
              <input type="hidden" name="token" value="${token}" />
              
              <label for="supervisorName" class="required">Your Full Name</label>
              <input type="text" id="supervisorName" name="supervisorName" value="${supervisorName}" required />
              
              <label for="employeeId" class="required">Employee ID Number</label>
              <input type="text" id="employeeId" name="employeeId" required />
              
              <label for="certNumber">IRATA/SPRAT Number (if applicable)</label>
              <input type="text" id="certNumber" name="certNumber" />
              
              <label for="certLevel">Certification Level</label>
              <select id="certLevel" name="certLevel">
                <option value="">Select if applicable</option>
                <option value="Level 1">Level 1</option>
                <option value="Level 2">Level 2</option>
                <option value="Level 3">Level 3</option>
                <option value="Assessor">Assessor</option>
              </select>
              
              <label for="verificationDate" class="required">Verification Date</label>
              <input type="date" id="verificationDate" name="verificationDate" value="${new Date().toISOString().split('T')[0]}" required />
              
              <label for="typedSignature" class="required">Type Your Signature</label>
              <input type="text" id="typedSignature" name="typedSignature" required placeholder="Type your full name as signature" />
              
              <button type="submit">I Verify These Hours</button>
              
              <p class="note">By submitting this form, you are certifying that the information provided is true and accurate. 
              A cryptographic timestamp will be created as evidence of this verification.</p>
            </form>
          </body>
        </html>
      `);
    }
  );
};

exports.submitVerification = (req, res) => {
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
    'SELECT * FROM rope_signatures WHERE token = ? AND status = "Pending"',
    [token],
    (err, results) => {
      if (err || results.length === 0) {
        return res.status(400).send('Invalid or expired token (or already confirmed).');
      }
      
      const signatureRow = results[0];
      
      // Create verification data object
      const verificationData = {
        signatureId: signatureRow.id,
        entryId: signatureRow.entry_id,
        supervisor: supervisorName,
        employeeId: employeeId,
        certNumber: certNumber || 'None',
        certLevel: certLevel || 'None',
        verificationDate: verificationDate,
        verifiedAt: new Date().toISOString(),
        signature: typedSignature
      };
      
      // Convert the data to a string for hashing
      const dataString = JSON.stringify(verificationData);
      
      // Create a hash of the verification data
      const hash = crypto.createHash('sha256').update(dataString).digest('hex');
      
      // Update the existing signature record with additional information
      db.query(
        `UPDATE rope_signatures SET 
          status = "Confirmed", 
          auto_signature = ?, 
          employee_id = ?,
          cert_number = ?,
          cert_level = ?,
          verification_date = ?,
          timestamp_hash = ?
        WHERE id = ?`,
        [typedSignature, employeeId, certNumber, certLevel, verificationDate, hash, signatureRow.id],
        async (err2) => {
          if (err2) {
            console.error('Database update error:', err2);
            return res.status(500).send('Error saving verification details.');
          }
          
          // Update rope_entries table with the hash
          db.query(
            'UPDATE rope_entries SET signature_hash = ? WHERE id = ?',
            [hash, signatureRow.entry_id],
            (err3) => {
              if (err3) {
                console.error('Error storing hash in rope_entries:', err3);
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
                      <p>Thank you, ${supervisorName}! You have successfully verified rope access hours.</p>
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
};

exports.verifySignature = async (req, res) => {
  const signatureId = req.params.id;
  
  db.query(
    'SELECT verification_date, cert_level, employee_id, cert_number FROM rope_signatures WHERE id = ?',
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
};