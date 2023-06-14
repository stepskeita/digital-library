const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  isAdmin: {
    type: Boolean,
    default: true,
  },
  isPasswordChanged: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("user", userSchema);
