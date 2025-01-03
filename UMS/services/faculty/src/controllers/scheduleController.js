const Schedule = require('../models/scheduleModel');

// Add schedule for a faculty
const addSchedule = async (req, res) => {
  const { facultyId, day, time, subject } = req.body;

  try {
    const newSchedule = new Schedule({ facultyId, day, time, subject });
    await newSchedule.save();
    res.status(201).json(newSchedule);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get schedules for a faculty
const getSchedulesByFacultyId = async (req, res) => {
  try {
    const schedules = await Schedule.find({ facultyId: req.params.facultyId });
    if (!schedules) {
      return res.status(404).json({ message: 'Schedules not found' });
    }
    res.json(schedules);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateSchedule = async (req, res) => {
  try {
    const scheduleId = req.params.id;
    const updatedSchedule = await Schedule.findByIdAndUpdate(scheduleId, req.body, { new: true });
    if (!updatedSchedule) {
      return res.status(404).json({ message: 'Schedule not found' });
    }
    res.status(200).json(updatedSchedule);
  } catch (error) {
    res.status(500).json({ message: 'Error updating schedule', error });
  }
};

const deleteSchedule = async (req, res) => {
  try {
    const scheduleId = req.params.id;
    const deletedSchedule = await Schedule.findByIdAndDelete(scheduleId);
    if (!deletedSchedule) {
      return res.status(404).json({ message: 'Schedule not found' });
    }
    res.status(200).json({ message: 'Schedule deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting schedule', error });
  }
};



module.exports = { addSchedule, getSchedulesByFacultyId, updateSchedule, deleteSchedule };
