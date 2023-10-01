const express = require('express');
const helmet = require('helmet');
const cors = require('cors');


const app = express();


app.use(helmet());
app.use(cors());





app.use((req, res) => {
  res.status(404).json({ status: 'error', message: 'Route not found' });
});

module.exports = app;
