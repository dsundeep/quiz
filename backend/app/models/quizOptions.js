const options = [{
    option: 'Read a book',
    points: 5,
    questionId: '1',
},{
    option: 'Watch social media',
    points: 0,
    questionId: '1',
},{
    option: 'Go to the gym',
    points: 3,
    questionId: '1',
},{
    option: 'Run in the park',
    points: 7,
    questionId: '1',
},{
    option: 'August 2010',
    points: 0,
    questionId: '2',
},{
    option: 'April 1990',
    points: 0,
    questionId: '2',
},{
    option: 'December 2000',
    points: 0,
    questionId: '2',
},{
    option: 'January 1985',
    points: 1,
    questionId: '2',
},{
    option: 'CapismInbox',
    points: 1,
    questionId: '3',
},{
    option: 'ModXM',
    points: 1,
    questionId: '3',
},{
    option: 'CapismOutbox',
    points: 0,
    questionId: '3',
},{
    option: 'CompXM',
    points: 1,
    questionId: '3',
}]

const getoptionsByQuestionId = (questionId) => {

    if (!questionId) {
        return []
    }

    return [...options.filter((option) => option.questionId === questionId)]
}

module.exports = {
    getoptionsByQuestionId
}