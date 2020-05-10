//this head section has all our definitions.

var gameState = {
    currentQuestion: 0,
    correctAnswers: 0,
    gamesPlayed: 0,
};

var currentQuestion = null;

var questions = [
    questionOne = {
        question: "In what year did British prospectors find oil in Iran?",
        answers: {
            a: "1908",
            b: "1892",
            c: "1900",
            d: "1952"
        },
        correctAnswer: function (){
            return this.answers.c
        },
        questionGif: "anglo-persian.jpg"
    },

    questionTwo = {
        question: "After the British discovered oil, where did they build their refinery?",
        answers: {
            a: "Tehran",
            b: "Abadan",
            c: "Shiraz",
            d: "Tabriz"
        },
        correctAnswer: function (){
            return this.answers.b
        },
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
    //if the start game or new game button is clicked, reset gamestate's current question and correct answers values, then change current screen to first question
    gameState.currentQuestion = 0,
    gameState.correctAnswers = 0,
    console.log(newQuestion());

};


function newQuestion () {
    //when it's time to show a new question, display the current question on the screen in the question box, start the timer, and display all the question's answers in the answer box.
    currentQuestion = (questions[gameState.currentQuestion])
    return currentQuestion
};

function getAnswer() {
    //when the player clicks an answer, animate the answer they clicked, and record the answer in the question object as this. If the timer ticks down to zero, record the player's answer as null.
    var playerAnswer = null;

    playerAnswer = $(this).click(returnAnswerClass());

    checkAnswer(playerAnswer, currentQuestion.correctAnswer());
};

function checkAnswer(answer, correctAnswer){
    //if the player's answer matches the correct answer of the current question, set that question's isCorrect property to true.
    console.log(answer, correctAnswer);
    if (answer == correctAnswer){
        currentQuestion.isCorrect = true
        trackState();
    }
    else 
        currentQuestion.isCorrect = false
        trackState();
    return;
};


function trackState () {
    //when the player answers a question, record their answer. if it's correct, add a correct answer to the game state's correct answer count and advance to the next question in the question array. If it is incorrect, don't add anything, but advance to the next question.

    if (questions[gameState.currentQuestion].isCorrect == true){
        gameState.correctAnswers ++;
        gameState.currentQuestion ++;
        checkGameOver();
    }
    else
        gameState.currentQuestion ++;
        checkGameOver();
    return;
};

function checkGameOver(){
    //if we're at the end of our list of questions, end the game.
    if (gameState.currentQuestion > questions.length) {
        gameOver();
    }
    else
        newQuestion();
};

function gameOver (){
    //increment the games played counter in game state, and reset all questions' is correct properties to false in case we want to play again. that way, track state won't log the wrong count.
    gameState.gamesPlayed ++;
    questions.forEach(question => {
        question.isCorrect = false
    });
    //show game over HTML screen in viewport
};


function returnAnswerClass () {
    //all of the HTML elements for a given answer will be classed with that answer's corresponding letter. That way we'll return an answer whether or not the user clicks on the answer box, or the text within the box. 
    return $(this).class()
}


// function noAnswer() {
//     return null
// }


//ok here's our main code flow.

startGame();
