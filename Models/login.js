const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
  name: { type: String, require: false },
  email: { type: String, require: true },
  password: { type: String, require: true, unique: true },
});

module.exports = mongoose.model("logins", loginSchema);