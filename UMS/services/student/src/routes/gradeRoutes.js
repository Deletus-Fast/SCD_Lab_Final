const express = require('express');
const router = express.Router();
const { getGrades, addGrade, updateGrade, deleteGrade } = require('../controllers/gradeController');

router.get('/', getGrades);
router.post('/', addGrade);
router.put('/:id', updateGrade);
router.delete('/:id', deleteGrade);

module.exports = router;
