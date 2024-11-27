const express = require('express');
const router = express.Router();
const readerController = require('../controllers/readerController');

// Получить всех читателей
router.get('/', readerController.getReaders);

// Создать нового читателя
router.post('/', readerController.createReader);

module.exports = router;
