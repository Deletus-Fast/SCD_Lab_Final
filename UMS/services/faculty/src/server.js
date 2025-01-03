const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const facultyRoutes = require('./routes/facultyRoutes');
const scheduleRoutes = require('./routes/scheduleRoutes');
const taskRoutes = require('./routes/taskRoutes');

dotenv.config();
const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

// Routes
app.use('/api/faculty', facultyRoutes);
app.use('/api/schedule', scheduleRoutes);
app.use('/api/tasks', taskRoutes);

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Faculty Info Portal running on port ${process.env.PORT}`);
});
