
const mongoose = require('mongoose');

const gallarySchema = new mongoose.Schema({
  imagePath: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
});

const Gallary = mongoose.model('Gallary', gallarySchema);

module.exports = Gallary;