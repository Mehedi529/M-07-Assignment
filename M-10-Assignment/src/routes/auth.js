// routes/auth.js
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Students = require('../models/StudentsModel');

// User login
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  
  // Check if email and password match in the database
  Students.findOne({ email, password }, (err, student) => {
    if (err) return res.status(500).json(err);
    
    if (student) {
      // Generate and return a JWT token
      const token = jwt.sign({ email: student.email }, 'your_secret_key');
      res.json({ token });
    } else {
      res.status(401).json({ message: 'Authentication failed' });
    }
  });
});

module.exports = router;
