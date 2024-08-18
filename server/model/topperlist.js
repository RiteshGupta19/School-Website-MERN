const mongoose = require("mongoose");

const TopperlistSchema = new mongoose.Schema({
  photo: {
    type: String,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
  Class: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  Exam: {
    type: String,
    required: true,
  },
});

const Topperlistmodel = mongoose.model("Topperlistmodel", TopperlistSchema);

module.exports = Topperlistmodel;
