var startButton = document.querySelector("#start-game-button");
var questionText = document.querySelector("#container");
var answerContainer = document.querySelector("#answer-container")
var header = document.querySelector("#header");
var resetBtnLocation = document.querySelector("#reset-button-location");
var questions = [
{prompt: "What does D stand for in DOM?",
choices: ["Document", "Display", "Download", "Dunder"],
answer: "Document",
},
{prompt: "What symbol references an ID in CSS and Javascript?",
choices: ["%", "#", "&", "@"],
answer: "#",
},
{prompt: "Which of these is NOT a Primitive Type",
choices: ["Boolean", "String", "Reference", "Number"],
answer: "Reference",
}
];
var secondsLeft = 60;
var i=0;
var initialsArray = []
var scoresArray = []
// var r=1;

//this is my function that starts when you click the start button
function startQuiz() {
 //this is my time in the header
 var timerInterval = setInterval(function() {
    secondsLeft--;
    header.textContent = secondsLeft;
    if(secondsLeft === 0) {
        clearInterval(timerInterval);
        questionText.textContent = "GAME OVER!";
      }}, 1000)
//this is what shows in the container
displayQuestion();
};

function displayQuestion(){
  if (i >= 3) {
    gameComplete();
  } else {
    var questionAsked = questions[i].prompt;
  var choicesAvailable = questions[i].choices;
    questionText.textContent = questionAsked;
  }
  
  for (var j = 0; j < choicesAvailable.length; j++) {
  var answersEl = document.createElement("button");
  answersEl.addEventListener("click", answerChoice)
  answersEl.textContent = choicesAvailable[j];
  answerContainer.appendChild(answersEl);}
 
};

function answerChoice() {
  answerContainer.textContent = "";
  var chosenAnswer = this.textContent;
  var correctAnswer = questions[i].answer;
  if (chosenAnswer !== correctAnswer) {
secondsLeft= secondsLeft - 15;
i++;
displayQuestion();
  } else {
    i++;
displayQuestion();
  }
};


function gameComplete (){
  questionText.textContent = "";
    var score = document.createElement("h1")
    score.textContent = "All Done!! Your Score was " + secondsLeft;
    answerContainer.appendChild(score);
    
    var initials = window.prompt("Great Job!! Your score was " + secondsLeft + ". Enter your initials to log your score", "Initials Here");
    initialsArray.push(initials);
    scoresArray.push(secondsLeft);
    localStorage.setItem("initials", JSON.stringify(initialsArray))
    localStorage.setItem("score", JSON.stringify(scoresArray))
    showHighScores()
};

function showHighScores() {
    var highScoresList = document.createElement("span");
    var resetBtn = document.createElement("button");
    var firstInitial = JSON.parse(localStorage.getItem("initials"));
  var firstScore = JSON.parse(localStorage.getItem("score"));
  highScoresList.textContent = firstInitial + "   ///   " + firstScore;
  resetBtn.textContent = "RESET";
  highScoresList.setAttribute("style", "font-size:larger; font-weight:bolder;")
  answerContainer.appendChild(highScoresList);
  resetBtnLocation.appendChild(resetBtn);
}

startButton.addEventListener("click", startQuiz);
resetBtn.addEventListener("click", window.location.reload);

//JS
//Data - Questions
//Global Vars
//Functions
//Event Listeners

//click start button
//ref startButton on DOM
//add onclick event listener
//start timer
//ref timer in DOM, use set interval
//show timer in header

//function displayQuestion
//display question and choices
//ref in dom
//loop through questions
//display questions on DOM
//loop thru answers

//function questionClick
//check answer against choice
//if answer correct, show next questions
//if incorrect, subtract time
// time - 15
//when all questions answered, game over
//when time reaches zero, game over