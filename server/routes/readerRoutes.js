const express = require('express');
const router = express.Router();
const readerController = require('../controllers/readerController');

// Получение списка читателей
router.get('/', readerController.getReaders);

// Создание нового читателя
router.post('/', readerController.createReader);

// Удаление читателя по ID
router.delete('/:id', readerController.deleteReader);

module.exports = router;
