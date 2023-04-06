const mongoose = require("mongoose");

var schema = new mongoose.Schema({
  hardwareName: {
    type: String,
    required: true,
  },
  vendor: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  performance: {
    type: String,
  },
  status: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

const Hardwaredb = mongoose.model("hardwaredb", schema);

module.exports = Hardwaredb;
