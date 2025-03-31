/**
 * Entry Routes
 * Handle CRUD operations for entries
 */

const express = require('express');
const router = express.Router();
const { requireAuth } = require('../middleware/authMiddleware');
const EntryController = require('../controllers/entryController');

// Apply auth middleware to all routes
router.use(requireAuth);

/**
 * @route   GET /api/entries
 * @desc    Get all entries for the current user
 * @access  Private
 */
router.get('/', EntryController.getAllEntries);

/**
 * @route   POST /api/entries
 * @desc    Create a new entry
 * @access  Private
 */
router.post('/', EntryController.createEntry);

/**
 * @route   GET /api/entries/:id
 * @desc    Get a specific entry
 * @access  Private
 */
router.get('/:id', EntryController.getEntryById);

/**
 * @route   PUT /api/entries/:id
 * @desc    Update an entry
 * @access  Private
 */
router.put('/:id', EntryController.updateEntry);

/**
 * @route   DELETE /api/entries/:id
 * @desc    Delete an entry
 * @access  Private
 */
router.delete('/:id', EntryController.deleteEntry);

module.exports = router;
