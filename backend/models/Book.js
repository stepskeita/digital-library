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

const BookSchema = new mongoose.Schema(
  {
    coverImage: String,
    bookFile: String,
    title: String,
    description: String,
    isbn: String,
    authors: [String],
    categories: [String],
    keywords: [String],
    isDeleted: {
      type: Boolean,
      default: false,
    },
    views: {
      type: Number,
      default: 0,
    },

    modifiedBy: [modifiedBySchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("book", BookSchema);
