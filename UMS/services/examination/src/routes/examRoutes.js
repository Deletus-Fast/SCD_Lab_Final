const express = require('express');
const router = express.Router();
const { getExams, addExam, updateExam, deleteExam } = require('../controllers/examController');

router.get('/', getExams);
router.post('/', addExam);
router.put('/:id', updateExam);
router.delete('/:id', deleteExam);

module.exports = router;
