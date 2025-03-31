const express = require('express');
const router = express.Router();
const { requireAuth } = require('../middleware/authMiddleware');
const ropeController = require('../controllers/ropeController');

router.use(requireAuth);

router.get('/', ropeController.getAllRopeEntries);
router.post('/', ropeController.createRopeEntry);
router.put('/:id', ropeController.updateRopeEntry);
router.delete('/:id', ropeController.deleteRopeEntry);

module.exports = router;
