var startButton = document.querySelector("#start-game-button");
var questionText = document.querySelector("#container");
var header = document.querySelector("#header");
var questions = ["Why?", "Who?", "How?"];
var secondsLeft = 75;
var i=0;
var r=1;

function startQuiz() {
 var questionAsked = questions.slice(0,1);
 var timerInterval = setInterval(function() {
    secondsLeft--;
    header.textContent = secondsLeft;
    if(secondsLeft === 0) {
       
        clearInterval(timerInterval);
        
      }}, 1000)
questionText.textContent = questionAsked;
};

startButton.addEventListener("click", startQuiz);