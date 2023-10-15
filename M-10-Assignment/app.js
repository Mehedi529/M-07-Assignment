// app.js
const express = require('express');
const app = express();

const studentsRoutes = require('./routes/students');
const worksRoutes = require('./routes/works');
const authRoutes = require('./routes/auth');

app.use('/api', studentsRoutes);
app.use('/api', worksRoutes);
app.use('/api', authRoutes);

// ...

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
