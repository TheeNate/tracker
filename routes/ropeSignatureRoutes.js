const express = require('express');
const router = express.Router();
const ropeSignatureController = require('../controllers/ropeSignatureController');

// Auth middleware for requests
const { requireAuth } = require('../middleware/authMiddleware');

// 🔒 Authenticated route: send signature request
router.post('/request', requireAuth, ropeSignatureController.requestSignature);

// 🌐 Public route: supervisor confirms signature via email
router.get('/confirm', ropeSignatureController.confirmSignature);

module.exports = router;
