var currentQuestion = 0;


function timer(){
    var sec = 59;
    var timer = setInterval(function(){
        document.getElementById('safeTimerDisplay').innerHTML=sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}
function startQuiz() {
    document.getElementById('start_btn').style.display = "none";
    document.getElementById('quiz').style.display = "block";
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

    setCurrentQuestion();
}
function getCurrentQuestion() {
    return currentQuestion;

}
function setCurrentQuestion() {
    if(currentQuestion < questions.length) {
        currentQuestion++;
    }
}
function checkAnswer() {
    var i = getCurrentQuestion();
    if(questions[i].correctAnswer == )
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
        correctAnswer: 1
    },
    {
        answer1: 'alert("Hell)o World")',
        answer2: 'msg("Hello World");',
        answer3: 'alert("Hello World");',
        answer4: 'printf("Hello World");',
        question: 'How do you write "Hello World" in an alert box?',
        correctAnswer: 3
    },
    {
        answer1: 'if i = 5',
        answer2: 'if (i = 5) then',
        answer3: 'if i == 5 then',
        answer4: 'if(i==5)',
        question: 'How to write an IF statement in JavaScript?',
        correctAnswer: 4
    },

]

// document.querySelector