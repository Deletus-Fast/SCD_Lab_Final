const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
  facultyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Faculty',
    required: true,
  },
  day: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
  },
});

const Schedule = mongoose.model('Schedule', scheduleSchema);

module.exports = Schedule;
