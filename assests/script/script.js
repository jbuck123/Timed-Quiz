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
// this function checks if the answer is correct and if it is answer incorrect than it subtracts 5 seconds 
function checkAnswer(answerId) {
    

    var i = getCurrentQuestion();
    console.log("current question "  + i )
    if(questions[i].correctAnswer == answerId) {
        points++;
        console.log('correctAnswer ' + answerId);
    }
    else {
        sec-=10;
        console.log("wrong " + answerId);
    }
    setCurrentQuestion();
    nextQuestion();
}


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
    {
        answer1: 'using args.length property',
        answer2: 'using arguments.length property',
        answer3: 'both of the above',
        answer4:  'both of the above',
        question: 'how can you ge the total number of arguemnts passed to a function?',
        correctAnswer: 'answer2btn'
    },
    {
        answer1: 'add()',
        answer2: 'append()',
        answer3: "merge()",
        answer4:  'concat()',
        question: "Which of the following function of string object combines the text of two strings and returns a new string?",
        correctAnswer: 'answer4btn'
    },
    {
        answer1: 'link()',
        answer2: 'script()',
        answer3: "sub()",
        answer4:  'href()',
        question: 'Which of the following function of string object creates an HTML hypertext link that request another URL?',
        correctAnswer: 'answer1btn'
    },
    {
        answer1: 'reverse()',
        answer2: 'shift()',
        answer3: 'slice()',
        answer4:  'some()',
        question: 'which of the following function of array object removes the first element from an array and returns that element?',
        correctAnswer: 'answer2btn'
    },
    {
        answer1: 'function cookie(){}' ,
        answer2: 'hello cookie',
        answer3: 'i = 0; i < cookie.length; i++',
        answer4:  'cookie()',
        question: "how do you call a function called 'cookie' in JavaScript?",
        correctAnswer: 'answer4btn'
    },
    {
        answer1:'.java',
        answer2:'.css',
        answer3: '.html',
        answer4:  '.js',
        question: 'JavaScript file has an Extension of:',
        correctAnswer:'answer4btn'
    }


]

// document.querySelector