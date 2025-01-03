const Exam = require('../models/exam');

// Get all exams
const getExams = async (req, res) => {
  const exams = await Exam.find();
  res.json(exams);
};

// Add a new exam
const addExam = async (req, res) => {
  const { title, date, subject, duration } = req.body;
  const exam = new Exam({ title, date, subject, duration });
  await exam.save();
  res.status(201).json(exam);
};

// Update an exam
const updateExam = async (req, res) => {
  const exam = await Exam.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(exam);
};

// Delete an exam
const deleteExam = async (req, res) => {
  await Exam.findByIdAndDelete(req.params.id);
  res.json({ message: 'Exam deleted successfully' });
};

module.exports = { getExams, addExam, updateExam, deleteExam };
