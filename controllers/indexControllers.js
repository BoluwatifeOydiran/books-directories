//  get_books, get_book,
const Book = require("../models/booksModel");

const get_books = (req, res) => {
  Book.find()
    .then((result) => {
      res.render("index", { books: result });
    })
    .catch((err) => console.log(err));
};

const get_book = (req, res) => {
  const id = req.params.id;

  console.log(id);
  Book.findById(id)
    .then((result) => res.render("book", { book: result }))
    .catch((err) => console.log(err));
};

const create_book = async (req, res) => {
  try {
    const book = await Book.create(req.body).then((result) =>
      res.redirect("/")
    );
    console.log(book);
    res.status(201).json(book);
  } catch (err) {
    console.log(err);
    res.status(404).send("err, Book not created");
  }
};

const about_site = (req, res) => {
  res.render("about");
};

module.exports = {
  get_books,
  get_book,
  create_book,
  about_site,
};
