/**
 * Company Routes
 * Handles CRUD operations for companies
 */

const express = require('express');
const router = express.Router();
const { requireAuth } = require('../middleware/authMiddleware');
const db = require('../config/db');

// Apply authentication middleware to all routes
router.use(requireAuth);

/**
 * @route   GET /api/companies
 * @desc    Get all companies
 * @access  Private
 */
router.get('/', (req, res) => {
  db.query('SELECT name FROM companies ORDER BY name', (err, results) => {
    if (err) {
      console.error('DB fetch error:', err);
      return res.status(500).json({ success: false, message: 'Error fetching companies' });
    }
    
    // Extract just the company names from the results
    const companies = results.map(result => result.name);
    res.json({ success: true, data: companies });
  });
});

/**
 * @route   POST /api/companies
 * @desc    Add a new company
 * @access  Private
 */
router.post('/', (req, res) => {
  const { companyName } = req.body;
  
  if (!companyName) {
    return res.status(400).json({ success: false, message: 'Company name is required' });
  }

  db.query('INSERT IGNORE INTO companies (name) VALUES (?)', [companyName], (err, result) => {
    if (err) {
      console.error('DB insert error:', err);
      return res.status(500).json({ success: false, message: err.message });
    }
    res.json({ success: true, companyName });
  });
});

/**
 * @route   DELETE /api/companies/:id
 * @desc    Delete a company
 * @access  Private
 */
router.delete('/:id', (req, res) => {
  const companyId = req.params.id;
  
  // Check if company is in use before deleting
  db.query('SELECT COUNT(*) as count FROM entries WHERE company = (SELECT name FROM companies WHERE id = ?)', 
    [companyId], 
    (err, results) => {
      if (err) {
        console.error('DB query error:', err);
        return res.status(500).json({ success: false, message: err.message });
      }
      
      if (results[0].count > 0) {
        return res.status(400).json({ 
          success: false, 
          message: 'This company is in use and cannot be deleted' 
        });
      }
      
      // If company is not in use, proceed with deletion
      db.query('DELETE FROM companies WHERE id = ?', [companyId], (deleteErr) => {
        if (deleteErr) {
          console.error('DB delete error:', deleteErr);
          return res.status(500).json({ success: false, message: deleteErr.message });
        }
        
        res.json({ success: true });
      });
    });
});

module.exports = router;
