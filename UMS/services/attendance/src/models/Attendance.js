const mongoose = require('mongoose');

// Define the Attendance Schema
const attendanceSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student', // Connect to the Student model
    required: true
  },
  facultyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Faculty', // Connect to the Faculty model
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['Present', 'Absent', 'Late'],
    default: 'Absent'
  }
});

// Create the Attendance model
const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance;
