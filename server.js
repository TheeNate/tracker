/**
 * NDT Hours Tracker - Server
 * Main application entry point
 */

// Load environment variables
require('dotenv').config();

// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const nodemailer = require('nodemailer');

// Import database connection
const db = require('./config/db');

// Import route handlers
const authRoutes = require('./routes/authRoutes');
const entryRoutes = require('./routes/entryRoutes');
const methodRoutes = require('./routes/methodRoutes');
const companyRoutes = require('./routes/companyRoutes');
const signatureRoutes = require('./routes/signatureRoutes');
const adminRoutes = require('./routes/adminRoutes');
const ropeRoutes = require('./routes/ropeRoutes');
const ropeSignatureRoutes = require('./routes/ropeSignatureRoutes');
const ropeSignatureController = require('./controllers/ropeSignatureController');






// Initialize Express app
const app = express();

// Configure middleware
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Configure session storage
const sessionStore = new MySQLStore({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'user',
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE || 'tracker_db'
});

app.use(session({
  key: 'ndt_tracker_session',
  secret: process.env.SESSION_SECRET || 'your-secret-key',
  store: sessionStore,
  resave: false,
  saveUninitialized: false,
  cookie: { 
    secure: process.env.NODE_ENV === 'production', 
    maxAge: 1000 * 60 * 60 * 24 // 24 hours
  }
}));

// Import middleware
const { requireAuth } = require('./middleware/authMiddleware');

app.get('/confirm', signatureRoutes.handlers.confirmSignature);

// Apply routes
app.use('/', authRoutes);
app.use('/api/entries', entryRoutes);
app.use('/api/methods', methodRoutes);
app.use('/api/companies', companyRoutes);
app.use('/api/signatures', signatureRoutes);
app.use('/admin', adminRoutes);
app.use('/api/rope-entries', ropeRoutes);
app.use('/api/rope-signatures', ropeSignatureRoutes);




// Route to the main tracker interface
app.get('/tracker', requireAuth, (req, res) => {
  res.sendFile(path.join(__dirname, 'views/tracker/index.html'));
});

// Default route
app.get('/', (req, res) => {
  if (req.session && req.session.userId) {
    res.redirect('/tracker');
  } else {
    res.redirect('/login');
  }
});

app.get('/rope', requireAuth, (req, res) => {
  res.sendFile(path.join(__dirname, 'views/rope/index.html'));
});

app.get('/confirm/rope-signature', ropeSignatureController.confirmSignature);



// 404 handler
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views/errors/404.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).sendFile(path.join(__dirname, 'views/errors/500.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
