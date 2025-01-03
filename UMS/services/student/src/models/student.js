const mongoose = require('mongoose');

const gradeSchema = new mongoose.Schema({
  examId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Exam',
    required: true
  },
  grade: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  courses: [{
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course'
    },
    grades: [gradeSchema]
  }],
  attendance: {
    type: Map,
    of: Boolean, // record of attendance for each class session
    default: {}
  },
  parentContact: {
    type: String,
    required: true
  },
  dateOfBirth: Date,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Student', studentSchema);
