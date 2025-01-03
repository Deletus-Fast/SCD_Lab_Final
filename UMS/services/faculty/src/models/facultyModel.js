const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  department: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

const Faculty = mongoose.model('Faculty', facultySchema);

module.exports = Faculty;
