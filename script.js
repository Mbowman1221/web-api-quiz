var questions = [{
q: "What does the Acronym REST Stand for?",
a: "a. Representational State Transform",
b: "b. Representational State Transfer",
c: "c. Represent State Transform",
d: "d. Represent State Transfer",
correct: "b. Representational State Transfer",

},
{
    q:"what is 7 x 5",
    a: "a. 35",
    b: "b. 75",
    c: "c. 3.14",
    d: "d. 2000123",
    correct: "a. 35",

},
{ q: "what color is the sky?",
  a: "a. blue",
  b: "b. red",
  c: "c. green",
  d: "d. all colors",
  correct: "d. all colors",


},
{
    q: "what is my dogs name?",
    a: "a. sabine",
    b: "b. beanie",
    c: "c. beanie weenie fee fi fo feenie",
    d: "d. anything you want if you have hot dogs",
    correct: "d. anything you want if you have hot dogs",

},
{
   q: "who is my favorite dog in the world?",
   a: "a. pluto",
   b: "b. goofy",
   c: "c. sabine",
   d: "d. cerberus",
   correct: "c. sabine",
},
{
    q: "what is sabines favorite food?",
    a: "a. hot dogs",
    b: "b. worms",
    c: "c. avacados",
    d: "d. poprocks",
    correct: "a. hot dogs"
}];

var clkStart = document.getElementById("start");
var timeticker = document.getElementById("countdown");
var scoreLeft = 60;
var quizTotal;
var questionBox = document.querySelector("#quiz-box");

function timer() {
    timeticker.textContent = "score left:  " + scoreLeft;
    quizTotal = setInterval(function(){
        if (scoreLeft > 0){
        changeScore(-1);
        } else{
            endQuiz();
        }
    }, 1000);
}
function changeScore(amt) {
    scoreLeft += amt;
    if (scoreLeft < 0){
        scoreLeft = 0;
    }
    timeticker.textContent = "score left:" + scoreLeft;
}



clkStart.onclick = timer;
var showQuestion = function (question){
    questionBox.innerHTML = "";

    var qHead = document.createElement("h2");
    qHead.textContent = question.q;


    var ansA = document.createElement("button");
    ansA.textContent = question.a;
    ansA.addEventListener("click", theAnsClick);

    var ansB = document.createElement("button");
    ansB.textContent = question.b;
    ansB.addEventListener("click", theAnsClick);

    var ansC = document.createElement("button");
    ansC.textContent = question.c;
    ansC.addEventListener("click", theAnsClick);

    var ansD = document.createElement("button");
    ansD.textContent = question.d;
    ansD.addEventListener("click", theAnsClick);

    questionBox.appendChild(qHead);
    questionBox.appendChild(ansA);
    questionBox.appendChild(ansB);
    questionBox.appendChild(ansC);
    questionBox.appendChild(ansD);



}
var currentQuestion = 0;
var playerScore = 0;
var correctAnswer = questions[currentQuestion].correct;
var viewScores = document.getElementById("#view-score");

var theAnsClick = function(event){
    event.preventDefault();
    var playerAns = event.target.textContent;
    correctAnswer = questions[currentQuestion].correct;
    var answerRightWrong = document.querySelector("#answer-right-wrong");
    if (playerAns !== correctAnswer){
        changeScore(-10);
        answerRightWrong.textContent = "nope";
        currentQuestion++;
        if (currentQuestion >= questions.length){
            endQuiz();

        }
        else {showQuestion(questions[currentQuestion])};
        
    }
    else if (playerAns === correctAnswer){
        currentQuestion++;
        answerRightWrong.textContent = "yepperoni";
        playerScore++;
        if (currentQuestion >= questions.length){
            endQuiz();
        } else {showQuestion(questions[currentQuestion])};
    }
};

var quizididoda = function(event){
    event.preventDefault();
    displayReset();
    showQuestion(questions[currentQuestion]);
};

function displayReset(){
    questionBox.innerHTML = "";
    document.querySelector("#front-page").style.display = "none";
}
function topScores(){
    let it = localStorage.getItem("object");
    let findIt = JSON.parse(it);
    let name = findIt.name;
    let score = findIt.score;
    questionBox.innerHTML = "";
    questionBox.innerHTML = name + "  " + score;
}
viewScores.addEventListener("click", () => {
    topScores()
})

var digits;
function endQuiz(){
    displayReset();
    timeticker.textContent = "";
    clearInterval(quizTotal);
    var endeded = document.createElement("h2");
    questionBox.appendChild(endeded);

    let space = document.querySelector("#answer-right-wrong");
    space.innerHTML = "";

    endeded.innerHTML = "it is over....your total is" + playerScore + ". what do they call you?"

    var initialsBox = document.createElement("input");
    space.appendChild(initialsBox);

    var Submitbtn = document.createElement("button")
    Submitbtn.textContent = "submit";
    space.appendChild(Submitbtn);

    Submitbtn.addEventListener("click", () => {

        let storeInitials = (...input) => {
            let it = JSON.stringify({"name":input[0], "score":input[1]})
            localStorage.setItem("object", it)
        }
        storeInitials(initialsBox.value, playerScore);
    });
    function showInitials(){
        Submitbtn.addEventListener("click", function(event){
            event.preventDefault();
        })};

clkStart.addEventListener("click", quizididoda);

    }