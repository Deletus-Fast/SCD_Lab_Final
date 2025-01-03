const Faculty = require('../models/facultyModel');

// Add new faculty
const addFaculty = async (req, res) => {
  const { name, contact, department, email } = req.body;

  try {
    const newFaculty = new Faculty({ name, contact, department, email });
    await newFaculty.save();
    res.status(201).json(newFaculty);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get faculty details by ID
const getFacultyById = async (req, res) => {
  try {
    const faculty = await Faculty.findById(req.params.id);
    if (!faculty) {
      return res.status(404).json({ message: 'Faculty not found' });
    }
    res.json(faculty);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateFaculty = async (req, res) => {
  try {
    const facultyId = req.params.id;
    const updatedFaculty = await Faculty.findByIdAndUpdate(facultyId, req.body, { new: true });
    if (!updatedFaculty) {
      return res.status(404).json({ message: 'Faculty not found' });
    }
    res.status(200).json(updatedFaculty);
  } catch (error) {
    res.status(500).json({ message: 'Error updating faculty', error });
  }
};

const deleteFaculty = async (req, res) => {
  try {
    const facultyId = req.params.id;
    const deletedFaculty = await Faculty.findByIdAndDelete(facultyId);
    if (!deletedFaculty) {
      return res.status(404).json({ message: 'Faculty not found' });
    }
    res.status(200).json({ message: 'Faculty deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting faculty', error });
  }
};


module.exports = { addFaculty, getFacultyById, updateFaculty, deleteFaculty };
