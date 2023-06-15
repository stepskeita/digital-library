const mongoose = require("mongoose");

const modifiedBySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "user",
    },
    reason: String,
  },
  {
    timestamps: true,
  }
);

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
  modifiesBy: [modifiedBySchema],
});

module.exports = mongoose.model("user", userSchema);
