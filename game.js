
//this head section has all our definitions.

var gameState = {
    currentQuestion: 0,
    correctAnswers: 0,
    gamesPlayed: 0,
};

var isCorrect = false;
var questionTimer = 0;
var remainingTime = 20;
var int = 0;

var questions = [
    questionOne = {
        question: "In what year did British prospectors find oil in Iran?",
        answers: ["1908", "1892", "1900", "1952"],
        correctAnswer: 1,
        questionGif: "anglo-persian.jpg"
    },

    questionTwo = {
        question: "After the British discovered oil, where did they build their refinery?",
        answers: ["Tehran", "Abadan", "Shiraz", "Tabriz"],
        correctAnswer: 2,
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

    newQuestion();
};


function newQuestion () {
    //when it's time to show a new question, display the current question on the screen in the question box, start the timer, and display all the question's answers in the answer box.

    currentQuestion = (questions[gameState.currentQuestion]);

    questionHeader = ("Question " + (gameState.currentQuestion + 1));
    $("#question-header").text(questionHeader);
    $("#question-name").text(currentQuestion.question);
    
    var answers = currentQuestion.answers;

    $("#answer1").text(answers[0]);
    $("#answer2").text(answers[1]);
    $("#answer3").text(answers[2]);
    $("#answer4").text(answers[3]);

    startQuestionTimer()
};



 function startQuestionTimer () {
    questionTimer = setTimeout (onAnswer, 20000) //run the check answer routine if 20 seconds go by with no answer
    console.log (questionTimer)
    int = setInterval(decreaseTime, 1000)
    console.log(int)
};

function decreaseTime() {
    if (remainingTime > 0) {
    remainingTime--;
    }
    else {
        remainingTime = 0;
    }
    $("#question-timer").text(remainingTime)
}

function stopQuestionTimer () {
    clearTimeout(questionTimer)
    console.log(questionTimer)
    clearInterval(int)
    console.log(int)
    remainingTime = 20;
    $("#question-timer").text(remainingTime)
};


function onAnswer(answer) {
    //when the player clicks an answer, animate the answer they clicked, and record the answer in the question object as this. I
    stopQuestionTimer()

    var currentCorrectAnswer = currentQuestion.correctAnswer;

    console.log(currentCorrectAnswer)
    console.log(answer);

    checkAnswer(answer, currentCorrectAnswer);    
};


function checkAnswer(answer, correctAnswer){
    //if the player's answer matches the correct answer of the current question, set that question's isCorrect property to true.

    console.log(answer, correctAnswer);
    if (answer == correctAnswer){
        isCorrect = true;
        stopQuestionTimer();
        trackState();
        
    }
    else 
        isCorrect = false;
        stopQuestionTimer()
        trackState();
        
    return;
};


function trackState () {
    //when the player answers a question, record their answer. if it's correct, add a correct answer to the game state's correct answer count, display the correct answer screen and gif and then advance to the next question in the question array. If it is incorrect, show the incorrect answer screen and gif, then advance to the next question.

    if (isCorrect == true){
        gameState.correctAnswers ++;
        gameState.currentQuestion ++;
        isCorrect = false;
        checkGameOver();
    }
    else
        gameState.currentQuestion ++;
        isCorrect = false;
        console.log(gameState)
        checkGameOver();
    return;
};


function checkGameOver(){
    //if we're at the end of our list of questions, end the game.
    if (gameState.currentQuestion >= questions.length) {
        gameOver();
    }
    else
        newQuestion();
};


function gameOver (){
    //increment the games played counter in game state
    gameState.gamesPlayed ++;
    gameState.currentQuestion = 0;
    gameState.correctAnswers = 0;

    //show game over HTML screen in viewport
};

function sendOne() {
    onAnswer(1)
};

function sendTwo() {
    onAnswer(2)
};

function sendThree() {
    onAnswer(3)
};

function sendFour () {
    onAnswer(4)
};


$(document).ready( function (){
$("#answer1").on("click", sendOne);
$("#answer2").on("click", sendTwo);
$("#answer3").on("click", sendThree);
$("#answer4").on("click", sendFour);

startGame();


});

