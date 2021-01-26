var startButton = document.querySelector("#start-game-button");
var questionText = document.querySelector("#container");
var header = document.querySelector("#header");
var questions = [
{prompt: "Why",
choices: ["A", "B", "C", "D"],
answer: "A",
},
{prompt: "How",
choices: ["A", "B", "C", "D"],
answer: "B",
},
{prompt: "Who",
choices: ["A", "B", "C", "D"],
answer: "C",
}
];
var secondsLeft = 75;
var i=0;
var r=1;

//this is my function that starts when you click the start button
function startQuiz() {
 var questionAsked = questions.slice(0,1);
 //this is my time in the header
 var timerInterval = setInterval(function() {
    secondsLeft--;
    header.textContent = secondsLeft;
    if(secondsLeft === 0) {
        clearInterval(timerInterval);
      }}, 1000)
//this is what shows in the container
questionText.textContent = questionAsked;
};

startButton.addEventListener("click", startQuiz);