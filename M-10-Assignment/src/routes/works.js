// routes/works.js
const express = require('express');
const router = express.Router();
const Works = require('../models/WorksModel');
const authVerify = require('../middleware/auth-verify');

// Create a new work (requires token)
router.post('/works', authVerify, (req, res) => {
  const work = new Works(req.body);
  work.email = req.decoded.email;
  work.save((err, data) => {
    if (err) return res.status(400).json(err);
    res.status(201).json(data);
  });
});

// Get all works (requires token)
router.get('/works', authVerify, (req, res) => {
  Works.find({ email: req.decoded.email }, (err, data) => {
    if (err) return res.status(500).json(err);
    res.json(data);
  });
});

// Update a work (requires token)
router.put('/works/:id', authVerify, (req, res) => {
  Works.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, data) => {
    if (err) return res.status(500).json(err);
    res.json(data);
  });
});

// Delete a work (requires token)
router.delete('/works/:id', authVerify, (req, res) => {
  Works.findByIdAndRemove(req.params.id, (err, data) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Work deleted successfully' });
  });
});

module.exports = router;
