var gameState = {
    currentQuestion: 0,
    correctAnswers: 0,
    gamesPlayed: 0,
};

var questions = [
    questionOne = {
        question: "In what year did British prospectors find oil in Iran?",
        answers: {
            a: "1908",
            b: "1892",
            c: "1900",
            d: "1952"
        },
        correctAnswer: this.answers.c,
        playerAnswer:,
        questionGif: "anglo-persian.jpg"
    },

    questionTwo = {
        question: "After the British discovered oil, where did they build their refinery?",
        answers: {
            a: "Tehran",
            b: "Abadan",
            c: "",
            d: ""
        },
        correctAnswer: this.answers.c,
        playerAnswer: null,
        isCorrect: checkAnswer(),
        questionGif: "anglo-persian.jpg"

    },

    // questionThree = {

    // },

    // questionFour = {

    // },

    // questionFive = {

    // },

    // questionSix = {

    // },

    // questionSeven = {

    // },

    // questionEight = {

    // },

    // questionNine = {

    // },

    // questionTen = {

    // },
];


function startGame() {
    //change current screen to first question
    newQuestion(questions[gameState.currentQuestion])
};


function newQuestion (question) {
    //display a question on the screen
};

function getAnswer(question) {
    //when the player clicks an answer, animate the answer they clicked, and record the answer in the question object as this.playerAnswer

    // var answer = $(this)
    // return answer
};

function checkAnswer(answer,correctAnswer){
    console.log(answer, correctAnswer);
    if (answer == correctAnswer){
        return true
    }
    else 
    return false;
};


function trackState (question) {
    //when the player answers a question, record their answer.
    if (question.isCorrect === true){
        gameState.correctAnswers ++;
        gameState.currentQuestion ++;
        checkGameOver();
    }
    else
    gameState.currentQuestion ++;
    checkGameOver();
    return;
};

function checkGameOver(gameState){
    //if we're at the end of our list of questions, end the game.
    if (gameState.currentQuestion > questions.length) {
        gameOver()
    }
    else
    newQuestion()
}

