var currentQuestion = 0;
var points = 0;
var sec = 59;


function timer(){
    var timer = setInterval(function(){
        document.getElementById('scoreDisplay').innerHTML=points;
        document.getElementById('safeTimerDisplay').innerHTML=sec;
        sec--;
        if (sec < 0) {
            currentQuestion =-1
            clearInterval(timer);
        }
    }, 1000);
}
function startQuiz() {
    document.getElementById('start_btn').style.display = "none";
    document.getElementById('quiz').style.display = "block";
    document.getElementById('scoreDisplay').style.display = "inline";
    nextQuestion(); 
}

function nextQuestion() {
    var quizDiv = document.getElementById('quiz');
    var i = getCurrentQuestion(); 
    var newQuestion = document.getElementById('question');
    var newAnswer1 = document.getElementById('answer1btn');
    var newAnswer2 = document.getElementById('answer2btn');
    var newAnswer3 = document.getElementById('answer3btn');
    var newAnswer4 = document.getElementById('answer4btn');

    newQuestion.innerHTML = questions[i].question;
    newAnswer1.innerHTML = questions[i].answer1;
    newAnswer2.innerHTML = questions[i].answer2;
    newAnswer3.innerHTML = questions[i].answer3;
    newAnswer4.innerHTML = questions[i].answer4;
}
function getCurrentQuestion() {
    return currentQuestion;

}
function setCurrentQuestion() {
    if(currentQuestion < questions.length && currentQuestion >= 0) {
        currentQuestion++;
    }
    else{
        currentQuestion = -1;
    }
}
function checkAnswer(answerId) {
    

    var i = getCurrentQuestion();
    console.log("current question "  + i )
    if(questions[i].correctAnswer == answerId) {
        points++;
        console.log('correctAnswer ' + answerId);
    }
    else {
        sec-=5;
        console.log("wrong " + answerId);
    }
    setCurrentQuestion();
    nextQuestion();
}

// for (var i = 0; i < questions.length; i++) {
//     var newEl = document.createElement('p');

//     newEl.innerText = questions[i].question;

//     wrapperEl.append(newEl);

var questions = [
    {
        answer1: 'boolean',
        answer2: 'string',
        answer3: 'integers',
        answer4: 'all of the above',
        question: 'arrays in JavaScript can store what kinds of values?',
        correctAnswer: "answer4btn"
    },
    {
        answer1: 'script',
        answer2: 'style',
        answer3: 'javascript',
        answer4: 'scripting',
        question: 'Inside which HTML element do we put the JavaScript file?',
        correctAnswer: 'answer1btn'
    },
    {
        answer1: 'alert("Hello World")',
        answer2: 'msg("Hello World");',
        answer3: 'alert("Hello World");',
        answer4: 'printf("Hello World");',
        question: 'How do you write "Hello World" in an alert box?',
        correctAnswer: 'answer3btn'
    },
    {
        answer1: 'if i = 5',
        answer2: 'if (i = 5) then',
        answer3: 'if i == 5 then',
        answer4: 'if(i==5)',
        question: 'How to write an IF statement in JavaScript?',
        correctAnswer: 'answer4btn'
    },

]

// document.querySelector