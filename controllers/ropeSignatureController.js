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

  // Generate hash + token
  const rawData = `${entryId}:${supervisorName}:${supervisorEmail}:${Date.now()}`;
  const hash = crypto.createHash('sha256').update(rawData).digest('hex');

  // Store signature request
  const sql = `
    INSERT INTO rope_signatures 
    (entry_id, supervisor_name, supervisor_email, supervisor_company, asnt_number, certification_level, hash_value) 
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(sql, [
    entryId, supervisorName, supervisorEmail, supervisorCompany || '',
    asnt || '', certLevel || '', hash
  ], (err) => {
    if (err) {
      console.error('DB insert error (signature):', err);
      return res.status(500).json({ success: false, message: 'DB insert error' });
    }

    // Generate confirmation link
    const baseUrl = process.env.BASE_URL || `http://localhost:${process.env.PORT || 3000}`;
    const link = `${baseUrl}/confirm/rope-signature?token=${hash}`;

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

Please click the link below to confirm:
${link}

This will certify the technician's hours and log your approval.

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
    'SELECT * FROM rope_signatures WHERE hash_value = ?',
    [token],
    (err, results) => {
      if (err || results.length === 0) {
        return res.status(404).send('Signature request not found.');
      }

      const signature = results[0];

      // Update rope_entries table with hash
      db.query(
        'UPDATE rope_entries SET signature_hash = ? WHERE id = ?',
        [signature.hash_value, signature.entry_id],
        (updateErr) => {
          if (updateErr) {
            console.error('Error updating rope entry with hash:', updateErr);
            return res.status(500).send('Error confirming signature.');
          }

          res.send(`
            <!DOCTYPE html>
            <html>
              <head>
                <title>Rope Access Hours Confirmed</title>
                <style>
                  body {
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                    margin: 0 auto;
                    max-width: 800px;
                    padding: 20px;
                  }
                  h2 {
                    color: #4a6da7;
                    border-bottom: 2px solid #4a6da7;
                    padding-bottom: 10px;
                  }
                  .info-panel {
                    background-color: #f0f4f8;
                    border: 1px solid #cdd4da;
                    padding: 20px;
                    border-radius: 5px;
                  }
                </style>
              </head>
              <body>
                <h2>Rope Access Hours Confirmation</h2>
                <div class="info-panel">
                  <p>Thank you, <strong>${signature.supervisor_name}</strong>!</p>
                  <p>Your signature has been confirmed and recorded successfully.</p>
                  <p>A cryptographic timestamp has been created as verification of your approval.</p>
                </div>
              </body>
            </html>
          `);
          
        }
      );
    }
  );
};
