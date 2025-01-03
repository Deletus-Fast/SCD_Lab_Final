const mongoose = require('mongoose');

const gradeSchema = mongoose.Schema(
  {
    studentId: { type: String, required: true },
    examId: { type: mongoose.Schema.Types.ObjectId, ref: 'Exam', required: true },
    grade: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Grade', gradeSchema);
