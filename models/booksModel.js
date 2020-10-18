const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  author: {
    required: true,
    type: String,
  },
  summary: {
    required: true,
    type: String,
  },
});

const Book = mongoose.model("book", bookSchema);

module.exports = Book;
