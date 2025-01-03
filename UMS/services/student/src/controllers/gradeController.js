const Grade = require('../models/grade');

// Get all grades
const getGrades = async (req, res) => {
  const grades = await Grade.find().populate('examId');
  res.json(grades);
};

// Add a new grade
const addGrade = async (req, res) => {
  const { studentId, examId, grade } = req.body;
  const newGrade = new Grade({ studentId, examId, grade });
  await newGrade.save();
  res.status(201).json(newGrade);
};

// Update a grade
const updateGrade = async (req, res) => {
  const updatedGrade = await Grade.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedGrade);
};

// Delete a grade
const deleteGrade = async (req, res) => {
  await Grade.findByIdAndDelete(req.params.id);
  res.json({ message: 'Grade deleted successfully' });
};

module.exports = { getGrades, addGrade, updateGrade, deleteGrade };
