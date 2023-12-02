const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
  company: { type: String, required: true },
  userName: { type: String, required: true },
  userEmail: { type: String, required: true },
  userId: { type: String, required: true },
  
});

const Data = mongoose.model('Data', DataSchema);

module.exports = Data;
