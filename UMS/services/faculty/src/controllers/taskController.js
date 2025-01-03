const Task = require('../models/taskModel');

// Add task for a faculty
const addTask = async (req, res) => {
  const { facultyId, title, description, dueDate, status } = req.body;

  try {
    const newTask = new Task({ facultyId, title, description, dueDate, status });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get tasks for a faculty
const getTasksByFacultyId = async (req, res) => {
  try {
    const tasks = await Task.find({ facultyId: req.params.facultyId });
    if (!tasks) {
      return res.status(404).json({ message: 'Tasks not found' });
    }
    res.json(tasks);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { addTask, getTasksByFacultyId };
