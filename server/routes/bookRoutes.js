// Импортируем роутер и контроллеры
const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Получение списка книг
router.get('/', bookController.getBooks);

// Создание новой книги
router.post('/', bookController.createBook);

// Удаление книги по ID
router.delete('/:id', bookController.deleteBook);

module.exports = router;
