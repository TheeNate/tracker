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

  db.query('DELETE FROM rope_entries WHERE id = ? AND user_id = ?', [entryId, userId], (err) => {
    if (err) {
      console.error('Delete error:', err);
      return res.status(500).json({ success: false, message: 'Failed to delete entry' });
    }
    res.json({ success: true });
  });
};
