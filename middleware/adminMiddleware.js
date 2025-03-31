/**
 * Admin Authorization Middleware
 */

/**
 * Require admin privileges for routes
 * Redirects to dashboard if not admin
 */
exports.requireAdmin = (req, res, next) => {
    if (req.session && req.session.userId && req.session.isAdmin) {
      return next();
    }
    
    // If Ajax request, return 403
    if (req.xhr || req.headers.accept.indexOf('json') > -1) {
      return res.status(403).json({ success: false, message: 'Admin access required' });
    }
    
    // Otherwise redirect to dashboard or login
    if (req.session && req.session.userId) {
      return res.redirect('/tracker'); // Regular user dashboard
    } else {
      return res.redirect('/login');
    }
  };