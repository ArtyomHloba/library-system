const { Reader } = require('../models');

// Get all readers
exports.getReaders = async (req, res) => {
  try {
    const readers = await Reader.findAll();
    res.json(readers);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving readers', error });
  }
};

exports.createReader = async (req, res) => {
  try {
    const { name, phoneNumber } = req.body;
    const newReader = await Reader.create({ name, phoneNumber });
    res.status(201).json(newReader);
  } catch (error) {
    res.status(500).json({ message: 'Error creating reader', error });
  }
};
