// models/WorksModel.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorksSchema = new Schema({
  title: String,
  classNote: String,
  description: String,
  status: String,
  email: String,
});

module.exports = mongoose.model('Work', WorksSchema);
