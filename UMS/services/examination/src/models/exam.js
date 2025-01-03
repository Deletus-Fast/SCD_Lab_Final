const mongoose = require('mongoose');

const examSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    date: { type: Date, required: true },
    subject: { type: String, required: true },
    duration: { type: Number, required: true }, // in minutes
  },
  { timestamps: true }
);

module.exports = mongoose.model('Exam', examSchema);
