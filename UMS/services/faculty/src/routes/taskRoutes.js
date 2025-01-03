const express = require('express');
const { addTask, getTasksByFacultyId } = require('../controllers/taskController');
const router = express.Router();

// POST - Add task
router.post('/', addTask);

// GET - Get tasks by faculty ID
router.get('/:facultyId', getTasksByFacultyId);

module.exports = router;
