/**
 * Authentication Routes
 * Handles user registration, login, and logout
 */

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { redirectIfAuth } = require('../middleware/authMiddleware');
const db = require('../config/db');
const crypto = require('crypto');
const nodemailer = require('nodemailer');

/**
 * @route   GET /login
 * @desc    Display login page
 * @access  Public
 */
router.get('/login', redirectIfAuth, (req, res) => {
  res.sendFile('login.html', { root: './views' });
});

/**
 * @route   GET /register
 * @desc    Display registration page
 * @access  Public
 */
router.get('/register', redirectIfAuth, (req, res) => {
  res.sendFile('register.html', { root: './views' });
});

/**
 * @route   POST /login
 * @desc    Authenticate user & get token
 * @access  Public
 */

router.get('/forgot-password', (req, res) => {
  res.sendFile('forgot-password.html', { root: './views' });
});

/**
 * @route   GET /forgot-password
 * @desc    Display forgot password page
 * @access  Public
 */

router.post('/forgot-password', async (req, res) => {
  try {
    const { email } = req.body;
    
    // Find user by email
    db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ success: false, message: 'Server error' });
      }
      
      // Always return success even if email doesn't exist (security best practice)
      if (results.length === 0) {
        return res.json({ 
          success: true, 
          message: 'If your email exists in our system, you will receive a password reset link shortly.' 
        });
      }
      
      const user = results[0];
      
      // Generate a random token
      const token = crypto.randomBytes(32).toString('hex');
      
      // Set token expiration (1 hour from now)
      const expires = new Date();
      expires.setHours(expires.getHours() + 1);
      
      // Store token in database
      db.query(
        'UPDATE users SET reset_token = ?, reset_expires = ? WHERE id = ?', 
        [token, expires, user.id],
        async (updateErr) => {
          if (updateErr) {
            console.error('Error updating reset token:', updateErr);
            return res.status(500).json({ success: false, message: 'Server error' });
          }
          
          // Create reset link
          const baseUrl = process.env.BASE_URL || `http://localhost:${process.env.PORT || 3000}`;
          const resetLink = `${baseUrl}/reset-password?token=${token}`;
          
          // Send email with reset link
          try {
            const transporter = nodemailer.createTransport({
              service: 'gmail',
              auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
              }
            });
            
            const mailOptions = {
              from: process.env.EMAIL_USER,
              to: user.email,
              subject: 'NDT Hours Tracker Password Reset',
              text: `Hello ${user.full_name},
              
You have requested to reset your password for the NDT Hours Tracker application.

Please click the link below to reset your password:
${resetLink}

This link will expire in 1 hour.

If you did not request a password reset, please ignore this email.

Thank you,
NDT Hours Tracker Team`
            };
            
            await transporter.sendMail(mailOptions);
            
            res.json({ 
              success: true, 
              message: 'A password reset link has been sent to your email.' 
            });
          } catch (emailErr) {
            console.error('Error sending email:', emailErr);
            res.status(500).json({ success: false, message: 'Failed to send reset email.' });
          }
        }
      );
    });
  } catch (error) {
    console.error('Forgot password error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

/**
 * @route   GET /reset-password
 * @desc    Display reset password page
 * @access  Public
 */
router.get('/reset-password', (req, res) => {
  res.sendFile('reset-password.html', { root: './views' });
});

/**
 * @route   POST /reset-password
 * @desc    Process password reset
 * @access  Public
 */
router.post('/reset-password', async (req, res) => {
  try {
    const { token, password } = req.body;
    
    if (!token || !password) {
      return res.status(400).json({ 
        success: false, 
        message: 'Token and password are required' 
      });
    }
    
    // Check if token exists and is not expired
    db.query(
      'SELECT * FROM users WHERE reset_token = ? AND reset_expires > NOW()',
      [token],
      async (err, results) => {
        if (err) {
          console.error('Database error:', err);
          return res.status(500).json({ success: false, message: 'Server error' });
        }
        
        if (results.length === 0) {
          return res.status(400).json({ 
            success: false, 
            message: 'Password reset token is invalid or has expired' 
          });
        }
        
        const user = results[0];
        
        // Hash the new password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        
        // Update password and clear token
        db.query(
          'UPDATE users SET password_hash = ?, reset_token = NULL, reset_expires = NULL WHERE id = ?',
          [hashedPassword, user.id],
          (updateErr) => {
            if (updateErr) {
              console.error('Error updating password:', updateErr);
              return res.status(500).json({ success: false, message: 'Failed to update password' });
            }
            
            res.json({ success: true, message: 'Your password has been updated successfully' });
          }
        );
      }
    );
  } catch (error) {
    console.error('Password reset error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  
  try {
    db.query('SELECT * FROM users WHERE username = ?', [username], async (err, results) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ success: false, message: 'Server error' });
      }
      
      if (results.length === 0) {
        return res.status(401).json({ success: false, message: 'Invalid credentials' });
      }
      
      const user = results[0];
      
      // Compare the provided password with the stored hash
      const passwordMatch = await bcrypt.compare(password, user.password_hash);
      
      if (passwordMatch) {
        // Store user info in session
        req.session.userId = user.id;
        req.session.username = user.username;
        req.session.fullName = user.full_name;
        req.session.isAdmin = user.is_admin === 1; // Set admin flag
        
        // Redirect to admin dashboard if admin, otherwise to regular dashboard
        const redirectUrl = user.is_admin === 1 ? '/admin/dashboard' : '/tracker';
        return res.json({ success: true, redirectUrl });
      } else {
        return res.status(401).json({ success: false, message: 'Invalid credentials' });
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

/**
 * @route   POST /forgot-password
 * @desc    Handle forgot password request and send reset email
 * @access  Public
 */

/**
 * @route   POST /register
 * @desc    Register a new user
 * @access  Public
 */
router.post('/register', async (req, res) => {
  try {
    const { username, password, fullName, email } = req.body;
    
    // Check if user already exists
    db.query('SELECT * FROM users WHERE username = ? OR email = ?', [username, email], async (err, results) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ success: false, message: 'Server error' });
      }
      
      if (results.length > 0) {
        return res.status(400).json({ success: false, message: 'Username or email already exists' });
      }
      
      // Hash the password
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      
      // Insert new user
      db.query(
        'INSERT INTO users (username, password_hash, full_name, email) VALUES (?, ?, ?, ?)',
        [username, hashedPassword, fullName, email],
        (err, result) => {
          if (err) {
            console.error('Error registering user:', err);
            return res.status(500).json({ success: false, message: 'Failed to register user' });
          }
          
          res.status(201).json({ success: true, message: 'User registered successfully' });
        }
      );
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

/**
 * @route   GET /logout
 * @desc    Logout user and destroy session
 * @access  Private
 */
router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error destroying session:', err);
      return res.status(500).json({ success: false, message: 'Failed to log out' });
    }
    res.redirect('/login');
  });
});

/**
 * @route   GET /api/user
 * @desc    Get current user data
 * @access  Private
 */
router.get('/api/user', (req, res) => {
  if (!req.session || !req.session.userId) {
    return res.status(401).json({ success: false, message: 'Not authenticated' });
  }
  
  db.query('SELECT id, username, full_name, email FROM users WHERE id = ?', 
    [req.session.userId], 
    (err, results) => {
      if (err) {
        console.error('Error fetching user info:', err);
        return res.status(500).json({ success: false, message: 'Server error' });
      }
      
      if (results.length === 0) {
        return res.status(404).json({ success: false, message: 'User not found' });
      }
      
      res.json({ success: true, user: results[0] });
    }
  );
});

module.exports = router;
