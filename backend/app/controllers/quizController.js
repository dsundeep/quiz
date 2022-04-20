const quizModel = require('../models/quiz')

const getQuiz = (req, res) => {
    const quiz = quizModel.getQuestions()
    if (!quiz) return res.error('Oops! unable to fetch quiz')
    if (quiz.length < 1) return res.error('Oops! No questions found for the quiz')
    return res.send(quiz)
}

module.exports = {
    getQuiz
}