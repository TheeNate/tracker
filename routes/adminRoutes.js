/**
 * Admin Routes
 * Handles admin panel functionality
 */

const express = require('express');
const router = express.Router();
const { requireAuth } = require('../middleware/authMiddleware');
const { requireAdmin } = require('../middleware/adminMiddleware');
const db = require('../config/db');
const bcrypt = require('bcrypt');
const path = require('path');

// Apply middleware to all routes
router.use(requireAuth);
router.use(requireAdmin);

/**
 * @route   GET /admin/dashboard
 * @desc    Admin dashboard
 * @access  Admin
 */
router.get('/dashboard', (req, res) => {
    console.log('Trying to show admin dashboard');
    res.sendFile('dashboard.html', { root: path.join(__dirname, '../views/admin') });
}),

/**
 * @route   GET /admin/api/users
 * @desc    Get all users
 * @access  Admin
 */
router.get('/api/users', (req, res) => {
  db.query(
    'SELECT id, username, full_name, email, created_at, is_admin FROM users ORDER BY created_at DESC',
    (err, results) => {
      if (err) {
        console.error('Error fetching users:', err);
        return res.status(500).json({ success: false, message: 'Server error' });
      }
      
      res.json({ success: true, data: results });
    }
  );
});

/**
 * @route   POST /admin/api/users/:id/reset-password
 * @desc    Reset user password
 * @access  Admin
 */
router.post('/api/users/:id/reset-password', async (req, res) => {
  try {
    const userId = req.params.id;
    const { newPassword } = req.body;
    
    if (!newPassword) {
      return res.status(400).json({ success: false, message: 'New password is required' });
    }
    
    // Check if user exists
    db.query('SELECT * FROM users WHERE id = ?', [userId], async (err, results) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ success: false, message: 'Server error' });
      }
      
      if (results.length === 0) {
        return res.status(404).json({ success: false, message: 'User not found' });
      }
      
      // Hash the new password
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(newPassword, saltRounds);
      
      // Update the password
      db.query(
        'UPDATE users SET password_hash = ? WHERE id = ?',
        [hashedPassword, userId],
        (updateErr) => {
          if (updateErr) {
            console.error('Error updating password:', updateErr);
            return res.status(500).json({ success: false, message: 'Failed to update password' });
          }
          
          res.json({ success: true, message: 'Password has been reset successfully' });
        }
      );
    });
  } catch (error) {
    console.error('Password reset error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

/**
 * @route   DELETE /admin/api/users/:id
 * @desc    Delete a user
 * @access  Admin
 */
router.delete('/api/users/:id', (req, res) => {
  const userId = req.params.id;
  
  // Don't allow admins to delete themselves
  if (userId == req.session.userId) {
    return res.status(400).json({ 
      success: false, 
      message: 'You cannot delete your own account' 
    });
  }
  
  // Check if user exists
  db.query('SELECT * FROM users WHERE id = ?', [userId], (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ success: false, message: 'Server error' });
    }
    
    if (results.length === 0) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    
    // Delete associated data first (entries, signatures, etc.)
    db.query('DELETE FROM signatures WHERE technician_id = ?', [userId], (err) => {
      if (err) {
        console.error('Error deleting signatures:', err);
        return res.status(500).json({ success: false, message: 'Failed to delete associated data' });
      }
      
      db.query('DELETE FROM entries WHERE user_id = ?', [userId], (err) => {
        if (err) {
          console.error('Error deleting entries:', err);
          return res.status(500).json({ success: false, message: 'Failed to delete associated data' });
        }
        
        // Finally delete the user
        db.query('DELETE FROM users WHERE id = ?', [userId], (err) => {
          if (err) {
            console.error('Error deleting user:', err);
            return res.status(500).json({ success: false, message: 'Failed to delete user' });
          }
          
          res.json({ success: true, message: 'User has been deleted successfully' });
        });
      });
    });
  });
});

/**
 * @route   POST /admin/api/users/:id/toggle-admin
 * @desc    Toggle admin status
 * @access  Admin
 */
router.post('/api/users/:id/toggle-admin', (req, res) => {
  const userId = req.params.id;
  
  // Don't allow admins to remove their own admin rights
  if (userId == req.session.userId) {
    return res.status(400).json({ 
      success: false, 
      message: 'You cannot modify your own admin status' 
    });
  }
  
  // Get current admin status
  db.query('SELECT is_admin FROM users WHERE id = ?', [userId], (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ success: false, message: 'Server error' });
    }
    
    if (results.length === 0) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    
    const isCurrentlyAdmin = results[0].is_admin === 1;
    const newAdminStatus = isCurrentlyAdmin ? 0 : 1;
    
    // Toggle admin status
    db.query(
      'UPDATE users SET is_admin = ? WHERE id = ?',
      [newAdminStatus, userId],
      (updateErr) => {
        if (updateErr) {
          console.error('Error updating admin status:', updateErr);
          return res.status(500).json({ success: false, message: 'Failed to update admin status' });
        }
        
        res.json({ 
          success: true, 
          message: `User is ${newAdminStatus ? 'now' : 'no longer'} an admin`,
          isAdmin: newAdminStatus === 1
        });
      }
    );
  });
});

module.exports = router;