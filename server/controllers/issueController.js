const { Issue } = require('../models');

// Получение всех записей о выдаче
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

// Создание новой записи о выдаче
exports.createIssue = async (req, res) => {
  try {
    const { issueDate, bookId, readerId } = req.body;
    const newIssue = await Issue.create({ issueDate, bookId, readerId });
    res.status(201).json(newIssue);
  } catch (error) {
    res.status(500).json({ message: 'Error creating issue', error });
  }
};

// Удаление записи о выдаче по ID
exports.deleteIssue = async (req, res) => {
  try {
    const { id } = req.params;
    const issue = await Issue.findByPk(id);

    if (!issue) {
      return res.status(404).json({ message: 'Issue not found' });
    }

    await issue.destroy();
    res.status(200).json({ message: 'Issue deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting issue', error });
  }
};
