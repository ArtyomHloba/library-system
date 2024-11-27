const express = require('express');
const router = express.Router();
const issueController = require('../controllers/issueController');

router.get('/', issueController.getIssues);

router.post('/', issueController.createIssue);

module.exports = router;
