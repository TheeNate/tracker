/**
 * Authentication Middleware
 */

/**
 * Require authentication for routes
 * Redirects to login if not authenticated
 */
exports.requireAuth = (req, res, next) => {
  if (req.session && req.session.userId) {
    return next();
  }
  // If Ajax request, return 401
  if (req.xhr || req.headers.accept.indexOf('json') > -1) {
    return res.status(401).json({ success: false, message: 'Authentication required' });
  }
  // Otherwise redirect to login
  res.redirect('/login');
};

/**
 * Redirect if already authenticated
 * Used for login/register pages
 */
exports.redirectIfAuth = (req, res, next) => {
  if (req.session && req.session.userId) {
    return res.redirect('/tracker');
  }
  next();
};

/**
 * Attach user data to request
 * Makes user data available in all routes
 */
exports.attachUser = (req, res, next) => {
  if (req.session && req.session.userId) {
    req.db.query(
      'SELECT id, username, full_name, email FROM users WHERE id = ?',
      [req.session.userId],
      (err, results) => {
        if (!err && results.length > 0) {
          req.user = results[0];
        }
        next();
      }
    );
  } else {
    next();
  }
};
