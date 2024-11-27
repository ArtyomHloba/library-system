const express = require('express');
const router = express.Router();
const issueController = require('../controllers/issueController');

// Получение всех записей о выдаче
router.get('/', issueController.getIssues);

// Создание новой записи о выдаче
router.post('/', issueController.createIssue);

// Удаление записи о выдаче по ID
router.delete('/:id', issueController.deleteIssue);

module.exports = router;
