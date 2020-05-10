$(document).ready( function () {
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
        answers: ["1908", "1892", "1900", "1952"],
        correctAnswer: "1908",
        questionGif: "anglo-persian.jpg"
    },

    questionTwo = {
        question: "After the British discovered oil, where did they build their refinery?",
        answers: ["Tehran", "Abadan", "Shiraz", "Tabriz"],
        correctAnswer: "Abadan",
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
    questionHeader = ("Question " + (gameState.currentQuestion +++ 1));
    $("#question-header").text(questionHeader);
    $("#question-name").text(currentQuestion.question);
    
    var answers = currentQuestion.answers;

    $("#answer1").text(answers[0]);
    $("#answer2").text(answers[1]);
    $("#answer3").text(answers[2]);
    $("#answer4").text(answers[3]);

    $("#answer1").click( setAnswer(answers[0]) );

    $("#answer2").click( setAnswer(answers[1]) );

    $("#answer3").click( setAnswer(answers[2]) );

    $("#answer4").click( setAnswer(answers[3]) );
    
    return currentQuestion;
};



function setAnswer(answer) {
    //when the player clicks an answer, animate the answer they clicked, and record the answer in the question object as this. If the timer ticks down to zero, record the player's answer as null.

    var playerAnswer = answer;

    var question = currentQuestion;

    console.log(playerAnswer);
    
    checkAnswer(playerAnswer, question.correctAnswer);
};

function checkAnswer(answer, correctAnswer){
    //if the player's answer matches the correct answer of the current question, set that question's isCorrect property to true.


    console.log(answer, correctAnswer);
    if (answer == correctAnswer){
        currentQuestion.isCorrect = true;
        trackState();
        $("#answer-box").empty()
    }
    else 
        currentQuestion.isCorrect = false;
        trackState();
        $("#answer-box").empty()
    return;
};


function trackState () {
    //when the player answers a question, record their answer. if it's correct, add a correct answer to the game state's correct answer count, display the correct answer screen and gif and then advance to the next question in the question array. If it is incorrect, show the incorrect answer screen and gif, then advance to the next question.

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


    //show game over HTML screen in viewport
};




// function noAnswer() {
//     return null
// }


//ok here's our main code flow.

startGame();



});