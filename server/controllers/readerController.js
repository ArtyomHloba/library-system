const { Reader } = require('../models');


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

exports.deleteReader = async (req, res) => {
  try {
    const { id } = req.params;
    const reader = await Reader.findByPk(id);

    if (!reader) {
      return res.status(404).json({ message: 'Reader not found' });
    }

    await reader.destroy();
    res.status(200).json({ message: 'Reader deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting reader', error });
  }
};
