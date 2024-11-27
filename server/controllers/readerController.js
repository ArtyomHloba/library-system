const { Reader } = require('../models');

// Get all readers
exports.getReaders = async (req, res) => {
  try {
    const readers = await Reader.findAll();
    res.json(readers); // This will include phoneNumber since it's part of the model
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving readers', error });
  }
};

// Create a new reader
exports.createReader = async (req, res) => {
  try {
    const { name, phoneNumber } = req.body; // Now accepting phoneNumber as well
    const newReader = await Reader.create({ name, phoneNumber }); // Saving phoneNumber in the database
    res.status(201).json(newReader);
  } catch (error) {
    res.status(500).json({ message: 'Error creating reader', error });
  }
};
