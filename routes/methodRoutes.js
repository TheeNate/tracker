/**
 * Method Routes
 * Handles CRUD operations for NDT methods
 */

const express = require('express');
const router = express.Router();
const { requireAuth } = require('../middleware/authMiddleware');
const db = require('../config/db');

// Apply authentication middleware to all routes
router.use(requireAuth);

/**
 * @route   GET /api/methods
 * @desc    Get all available methods
 * @access  Private
 */
router.get('/', (req, res) => {
  db.query('SELECT name FROM methods ORDER BY name', (err, results) => {
    if (err) {
      console.error('DB fetch error:', err);
      return res.status(500).json({ success: false, message: 'Error fetching methods' });
    }
    
    // Extract just the method names from the results
    const methods = results.map(result => result.name);
    res.json({ success: true, data: methods });
  });
});

/**
 * @route   POST /api/methods
 * @desc    Add a new method
 * @access  Private
 */
router.post('/', (req, res) => {
  const { methodName } = req.body;
  
  if (!methodName) {
    return res.status(400).json({ success: false, message: 'Method name is required' });
  }

  db.query('INSERT IGNORE INTO methods (name) VALUES (?)', [methodName], (err, result) => {
    if (err) {
      console.error('DB insert error:', err);
      return res.status(500).json({ success: false, message: err.message });
    }
    res.json({ success: true, methodName });
  });
});

/**
 * @route   DELETE /api/methods/:id
 * @desc    Delete a method
 * @access  Private
 */
router.delete('/:id', (req, res) => {
  const methodId = req.params.id;
  
  // Check if method is in use before deleting
  db.query('SELECT COUNT(*) as count FROM entries WHERE method = (SELECT name FROM methods WHERE id = ?)', 
    [methodId], 
    (err, results) => {
      if (err) {
        console.error('DB query error:', err);
        return res.status(500).json({ success: false, message: err.message });
      }
      
      if (results[0].count > 0) {
        return res.status(400).json({ 
          success: false, 
          message: 'This method is in use and cannot be deleted' 
        });
      }
      
      // If method is not in use, proceed with deletion
      db.query('DELETE FROM methods WHERE id = ?', [methodId], (deleteErr) => {
        if (deleteErr) {
          console.error('DB delete error:', deleteErr);
          return res.status(500).json({ success: false, message: deleteErr.message });
        }
        
        res.json({ success: true });
      });
    });
});

module.exports = router;
