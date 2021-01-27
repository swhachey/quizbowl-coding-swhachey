var startButton = document.querySelector("#start-game-button");
var questionText = document.querySelector("#container");
var answerContainer = document.querySelector("#answer-container")
var header = document.querySelector("#header");
var questions = [
{prompt: "Why?",
choices: ["A", "B", "C", "D"],
answer: "A",
},
{prompt: "How?",
choices: ["A", "B", "C", "D"],
answer: "B",
},
{prompt: "Who?",
choices: ["A", "B", "C", "D"],
answer: "C",
}
];
var secondsLeft = 75;
var i=0;
// var r=1;

//this is my function that starts when you click the start button
function startQuiz() {
 //this is my time in the header
//  questionText.setAttribute("class", "hide");
 var timerInterval = setInterval(function() {
    secondsLeft--;
    header.textContent = secondsLeft;
    if(secondsLeft === 0) {
        clearInterval(timerInterval);
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
}

function gameComplete (){
  console.log("yup");
  questionText.textContent = "";
  // if (i >= questions.length) {
  //   gameComplete();
  // }
    var score = document.createElement("h1")
    score.textContent = "All Done!! Your Score was " + secondsLeft;
    answerContainer.appendChild(score);
}

startButton.addEventListener("click", startQuiz);

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