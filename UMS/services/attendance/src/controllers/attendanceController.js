const Attendance = require('../models/Attendance');

// Add Attendance Record
exports.addAttendance = async (req, res) => {
  try {
    const { studentId, facultyId, status } = req.body;

    const newAttendance = new Attendance({
      studentId,
      facultyId,
      status
    });

    await newAttendance.save();
    res.status(201).json({ message: 'Attendance added successfully', newAttendance });
  } catch (err) {
    res.status(500).json({ message: 'Error adding attendance', error: err.message });
  }
};

// Get All Attendance Records
exports.getAllAttendance = async (req, res) => {
  try {
    const attendanceRecords = await Attendance.find()
      .populate('studentId', 'name') // Populate student name
      .populate('facultyId', 'name'); // Populate faculty name

    res.status(200).json({ attendanceRecords });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching attendance', error: err.message });
  }
};

// Get Attendance by ID
exports.getAttendanceById = async (req, res) => {
  try {
    const attendanceRecord = await Attendance.findById(req.params.id)
      .populate('studentId', 'name')
      .populate('facultyId', 'name');

    if (!attendanceRecord) {
      return res.status(404).json({ message: 'Attendance record not found' });
    }

    res.status(200).json({ attendanceRecord });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching attendance', error: err.message });
  }
};

// Update Attendance Record
exports.updateAttendance = async (req, res) => {
  try {
    const updatedAttendance = await Attendance.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedAttendance) {
      return res.status(404).json({ message: 'Attendance record not found' });
    }

    res.status(200).json({ message: 'Attendance updated successfully', updatedAttendance });
  } catch (err) {
    res.status(500).json({ message: 'Error updating attendance', error: err.message });
  }
};

// Delete Attendance Record
exports.deleteAttendance = async (req, res) => {
  try {
    const deletedAttendance = await Attendance.findByIdAndDelete(req.params.id);

    if (!deletedAttendance) {
      return res.status(404).json({ message: 'Attendance record not found' });
    }

    res.status(200).json({ message: 'Attendance deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting attendance', error: err.message });
  }
};
