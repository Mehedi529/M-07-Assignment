// models/OTPModel.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OTPSchema = new Schema({
  email: String,
  otp: String,
  status: Number,
});

module.exports = mongoose.model('OTP', OTPSchema);
