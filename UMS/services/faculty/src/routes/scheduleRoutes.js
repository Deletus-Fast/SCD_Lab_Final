const express = require('express');
const { addSchedule, getSchedulesByFacultyId, updateSchedule, deleteSchedule } = require('../controllers/scheduleController');
const router = express.Router();

// POST - Add schedule
router.post('/', addSchedule);

// GET - Get schedules by faculty ID
router.get('/:facultyId', getSchedulesByFacultyId);
router.put('/:facultyId', updateSchedule);
router.delete('/:facultyId', deleteSchedule);

module.exports = router;
