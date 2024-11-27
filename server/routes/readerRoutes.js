const express = require('express');
const router = express.Router();
const readerController = require('../controllers/readerController');

router.get('/', readerController.getReaders);

router.post('/', readerController.createReader);

router.delete('/:id', readerController.deleteReader);

module.exports = router;
