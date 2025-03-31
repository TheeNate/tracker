/**
 * Entry Controller
 * Business logic for entry operations
 */

const db = require('../config/db');

/**
 * Get all entries for the current user
 */
exports.getAllEntries = (req, res) => {
  const userId = req.session.userId;
  const sql = 'SELECT * FROM entries WHERE user_id = ?';

  db.query(sql, [userId], (err, results) => {
    if (err) {
      console.error('DB fetch error:', err);
      return res.status(500).json({ success: false, message: 'Error fetching entries' });
    }
    res.json({ success: true, data: results });
  });
};

/**
 * Create a new entry
 */
exports.createEntry = (req, res) => {
  const userId = req.session.userId;
  const { empty } = req.body;
  
  // If empty flag is true, create blank entry
  if (empty) {
    const sql = `
      INSERT INTO entries (entry_date, method, location, hours, company, supervisor, user_id)
      VALUES (NULL, '', '', 0, '', '', ?)
    `;
    
    db.query(sql, [userId], (err, results) => {
      if (err) {
        console.error('DB insert error:', err);
        return res.status(500).json({ success: false, message: err.message });
      }
      
      const insertedId = results.insertId;
      console.log('New blank entry ID:', insertedId);
      res.json({ success: true, insertedId });
    });
  } else {
    // If not empty, create entry with provided data
    const { entryDate, method, location, hours, company } = req.body;
    
    const sql = `
      INSERT INTO entries (entry_date, method, location, hours, company, user_id)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    
    db.query(sql, [entryDate, method, location, hours, company, userId], (err, results) => {
      if (err) {
        console.error('DB insert error:', err);
        return res.status(500).json({ success: false, message: err.message });
      }
      
      const insertedId = results.insertId;
      res.json({ success: true, insertedId });
    });
  }
};

/**
 * Get a specific entry
 */
exports.getEntryById = (req, res) => {
  const userId = req.session.userId;
  const entryId = req.params.id;
  
  db.query(
    'SELECT * FROM entries WHERE id = ? AND user_id = ?',
    [entryId, userId],
    (err, results) => {
      if (err) {
        console.error('DB query error:', err);
        return res.status(500).json({ success: false, message: err.message });
      }
      
      if (results.length === 0) {
        return res.status(404).json({ success: false, message: 'Entry not found' });
      }
      
      res.json({ success: true, data: results[0] });
    }
  );
};

/**
 * Update an entry
 */
exports.updateEntry = (req, res) => {
  const userId = req.session.userId;
  const entryId = req.params.id;
  const { entryDate, method, location, hours, company } = req.body;
  
  // First verify this entry belongs to the current user
  db.query('SELECT user_id FROM entries WHERE id = ?', [entryId], (err, results) => {
    if (err) {
      console.error('DB query error:', err);
      return res.status(500).json({ success: false, message: err.message });
    }
    
    if (results.length === 0) {
      return res.status(404).json({ success: false, message: 'Entry not found' });
    }
    
    if (results[0].user_id !== userId) {
      return res.status(403).json({ success: false, message: 'Unauthorized access to this entry' });
    }
    
    // If verification passes, proceed with the update
    const sql = `
      UPDATE entries 
      SET entry_date = ?, method = ?, location = ?, hours = ?, company = ?
      WHERE id = ? AND user_id = ?
    `;
    
    db.query(
      sql,
      [entryDate, method, location, hours, company, entryId, userId],
      (updateErr) => {
        if (updateErr) {
          console.error('DB update error:', updateErr);
          return res.status(500).json({ success: false, message: updateErr.message });
        }
        res.json({ success: true });
      }
    );
  });
};

/**
 * Delete an entry
 */
exports.deleteEntry = (req, res) => {
  const userId = req.session.userId;
  const entryId = req.params.id;
  
  // First verify this entry belongs to the current user
  db.query('SELECT user_id FROM entries WHERE id = ?', [entryId], (err, results) => {
    if (err) {
      console.error('DB query error:', err);
      return res.status(500).json({ success: false, message: err.message });
    }
    
    if (results.length === 0) {
      return res.status(404).json({ success: false, message: 'Entry not found' });
    }
    
    if (results[0].user_id !== userId) {
      return res.status(403).json({ success: false, message: 'Unauthorized access to this entry' });
    }
    
    // If verification passes, proceed with deletion
    // First delete any signatures associated with this entry
    db.query('DELETE FROM signatures WHERE entry_id = ?', [entryId], (err) => {
      if (err) {
        console.error('Error deleting associated signatures:', err);
        return res.status(500).json({ success: false, message: err.message });
      }
      
      // Then delete the entry itself
      db.query('DELETE FROM entries WHERE id = ? AND user_id = ?', [entryId, userId], (err2) => {
        if (err2) {
          console.error('Error deleting entry:', err2);
          return res.status(500).json({ success: false, message: err2.message });
        }
        
        res.json({ success: true });
      });
    });
  });
};
