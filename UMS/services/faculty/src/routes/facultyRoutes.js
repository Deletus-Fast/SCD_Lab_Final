const express = require('express');
const { addFaculty, getFacultyById, updateFaculty, deleteFaculty } = require('../controllers/facultyController');
const router = express.Router();

// POST - Add new faculty
router.post('/', addFaculty);

// GET - Get faculty by ID
router.get('/:id', getFacultyById);

router.put('/:id', updateFaculty);
router.delete('/:id', deleteFaculty);


module.exports = router;
