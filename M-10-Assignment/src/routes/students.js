// routes/students.js
const express = require('express');
const router = express.Router();
const Students = require('../models/StudentsModel');

// Create a new student
router.post('/students', (req, res) => {
  const student = new Students(req.body);
  student.save((err, data) => {
    if (err) return res.status(400).json(err);
    res.status(201).json(data);
  });
});

// Get all students
router.get('/students', (req, res) => {
  Students.find((err, data) => {
    if (err) return res.status(500).json(err);
    res.json(data);
  });
});

// Update a student
router.put('/students/:id', (req, res) => {
  Students.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, data) => {
    if (err) return res.status(500).json(err);
    res.json(data);
  });
});

// Delete a student
router.delete('/students/:id', (req, res) => {
  Students.findByIdAndRemove(req.params.id, (err, data) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Student deleted successfully' });
  });
});

module.exports = router;
