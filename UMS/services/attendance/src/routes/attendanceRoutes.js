const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendanceController');

// Add Attendance
router.post('/attendance', attendanceController.addAttendance);

// Get All Attendance
router.get('/attendance', attendanceController.getAllAttendance);

// Get Attendance by ID
router.get('/attendance/:id', attendanceController.getAttendanceById);

// Update Attendance
router.put('/attendance/:id', attendanceController.updateAttendance);

// Delete Attendance
router.delete('/attendance/:id', attendanceController.deleteAttendance);

module.exports = router;
