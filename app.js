const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const hpp = require('hpp');
const validator = require('validator');

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(multer().any());
app.use(cors());
app.use(mongoSanitize());
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 100, 
  })
);
app.use(helmet());
app.use(hpp());
app.use(express.static('public')); 


const apiRoutes = require('./src/Routes/api');
app.use('/api', apiRoutes);


app.use((req, res) => {
  res.status(404).json({ status: 'error', message: 'Route not found' });
});

module.exports = app;
