const db = require('../config/db');

exports.getAllRopeEntries = (req, res) => {
  const userId = req.session.userId;
  db.query('SELECT * FROM rope_entries WHERE user_id = ?', [userId], (err, results) => {
    if (err) {
      console.error('DB error:', err);
      return res.status(500).json({ success: false, message: 'Error fetching entries' });
    }
    res.json({ success: true, data: results });
  });
};

exports.createRopeEntry = (req, res) => {
  const userId = req.session.userId;
  const {
    date_from, date_to, company, location,
    tasks, industry, details, supervisor,
    rope_hours, signature_hash
  } = req.body;

  // Add logging to debug date values
  console.log('Creating entry with dates:', { date_from, date_to });

  const sql = `
    INSERT INTO rope_entries (
      user_id, date_from, date_to, company, location,
      tasks, industry, details, supervisor, rope_hours, signature_hash
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(sql, [
    userId, date_from, date_to, company, location,
    tasks, industry, details, supervisor, rope_hours, signature_hash
  ], (err, result) => {
    if (err) {
      console.error('Insert error:', err);
      return res.status(500).json({ success: false, message: 'Failed to create entry' });
    }
    res.json({ success: true, insertedId: result.insertId });
  });
};

exports.updateRopeEntry = (req, res) => {
  const userId = req.session.userId;
  const entryId = req.params.id;
  const {
    date_from, date_to, company, location,
    tasks, industry, details, supervisor,
    rope_hours, signature_hash
  } = req.body;

  // Add logging to debug date values
  console.log('Updating entry with dates:', { entryId, date_from, date_to });

  // SQL query with proper date handling
  const sql = `
    UPDATE rope_entries SET
      date_from = ?, date_to = ?, company = ?, location = ?,
      tasks = ?, industry = ?, details = ?, supervisor = ?,
      rope_hours = ?, signature_hash = ?
    WHERE id = ? AND user_id = ?
  `;

  db.query(sql, [
    date_from, date_to, company, location,
    tasks, industry, details, supervisor,
    rope_hours, signature_hash,
    entryId, userId
  ], (err) => {
    if (err) {
      console.error('Update error:', err);
      return res.status(500).json({ success: false, message: 'Failed to update entry' });
    }
    res.json({ success: true });
  });
};

exports.deleteRopeEntry = (req, res) => {
  const userId = req.session.userId;
  const entryId = req.params.id;

  // Start a transaction to ensure all operations complete or none
  db.beginTransaction(err => {
    if (err) {
      console.error('Transaction start error:', err);
      return res.status(500).json({ success: false, message: 'Failed to start transaction' });
    }

    // First delete any associated signatures
    db.query('DELETE FROM rope_signatures WHERE entry_id = ?', [entryId], (sigErr) => {
      if (sigErr) {
        console.error('Error deleting associated signatures:', sigErr);
        return db.rollback(() => {
          res.status(500).json({ success: false, message: 'Failed to delete associated signatures' });
        });
      }
      
      // Then delete the entry
      db.query('DELETE FROM rope_entries WHERE id = ? AND user_id = ?', [entryId, userId], (entryErr) => {
        if (entryErr) {
          console.error('Entry delete error:', entryErr);
          return db.rollback(() => {
            res.status(500).json({ success: false, message: 'Failed to delete entry' });
          });
        }
        
        // Commit the transaction
        db.commit(commitErr => {
          if (commitErr) {
            console.error('Transaction commit error:', commitErr);
            return db.rollback(() => {
              res.status(500).json({ success: false, message: 'Failed to commit transaction' });
            });
          }
          
          res.json({ success: true });
        });
      });
    });
  });
};