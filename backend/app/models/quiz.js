const optionsModel = require('./quizOptions')

const quiz = [{
    id: '1',
    question: 'What\'s the first thing you should do when you need motivation?',
    type: 'single-choice'
},{
    id: '2',
    question: 'When was Capism Founded?',
    type: 'single-choice'
},{
    id: '3',
    question: 'Which of the following are Capism products?',
    type: 'multi-choice'
}]

const getQuestions = () => {
    const response = []

    quiz.forEach((quizItem) => {
        response.push({
            question: quizItem.question,
            type: quizItem.type,
            options: optionsModel.getoptionsByQuestionId(quizItem.id)
        })
    })

    return response
}

module.exports = {
    getQuestions
}