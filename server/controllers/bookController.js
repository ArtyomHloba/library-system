const { Book } = require('../models');

exports.getBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving books', error });
  }
};

exports.createBook = async (req, res) => {
  try {
    const { title, author, year } = req.body;
    const newBook = await Book.create({ title, author, year });
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: 'Error creating book', error });
  }
};
