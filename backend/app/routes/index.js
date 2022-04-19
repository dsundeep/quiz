const express = require('express');
const router = express.Router();
const quizRouter = require('./quizRouter');

router.use('/quiz', quizRouter);

module.exports = router;