/**
 * Database Configuration
 * Manages the connection to MySQL database
 */

const mysql = require('mysql2');

// Check for required environment variables
if (!process.env.DB_PASSWORD) {
  console.error('ERROR: Database password not set in environment variables');
  console.error('Make sure you have a .env file with DB_PASSWORD defined');
  process.exit(1); // Exit with error code
}

// Create database connection
const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'user',
  password: process.env.DB_PASSWORD, // No fallback for security
  database: process.env.DB_DATABASE || 'tracker_db'
});

// Attempt to connect
connection.connect(err => {
  if (err) {
    console.error('Error connecting to database:', err);
    process.exit(1); // Exit if database connection fails
  }
  console.log('Connected to database successfully');
});

module.exports = connection;
