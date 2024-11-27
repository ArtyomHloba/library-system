const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Получить все книги
router.get('/', bookController.getBooks);

// Создать новую книгу
router.post('/', bookController.createBook);

module.exports = router;
