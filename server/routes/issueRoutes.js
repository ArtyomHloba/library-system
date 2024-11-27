const express = require('express')
const router = express.Router()
const issueController = require('../controllers/issueController')

// Получить все записи о выдаче книг
router.get('/', issueController.getIssues)

// Создать новую запись о выдаче книги
router.post('/', issueController.createIssue)

module.exports = router
