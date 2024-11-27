const { Issue, Book, Reader } = require('../models');

exports.getIssues = async (req, res) => {
  try {
    const issues = await Issue.findAll({
      include: ['book', 'reader'],
    });
    res.json(issues);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving issues', error });
  }
};

exports.createIssue = async (req, res) => {
  try {
    const { issueDate, bookId, readerId } = req.body;
    const newIssue = await Issue.create({ issueDate, bookId, readerId });
    res.status(201).json(newIssue);
  } catch (error) {
    res.status(500).json({ message: 'Error creating issue', error });
  }
};
