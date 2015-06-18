/************************************************************************************
FUNCTION INDEX:
    @FUNCTION FOR HIDING AND DISPLAYING HOMEPAGE AND QUIZHEAD (&Learn More / SignUp)
    @FUNCTION FOR NAVIGATING TO DIFFERENT CATAGORIES PAGES (&Learn More / SignUp)
    @QUIZ FUNCTION ((QUIZ) SWAPPED OUT FOR CATAGORY WHEN CALLED )    
    @FUNCTION USED TO SET UP COUNTDOWN TIMER
    @FUNCTION USED TO DISPLAY / START COUNTDOWN TIMER
    @FUNCTIONS USED TO DISPLAY COUNTDOWN AND START QUIZ FROM SELECTED CATAGORY
************************************************************************************/



/// Shorthand function for getElementById ///
var byId = function(id) {
    return document.getElementById(id);
};

// VARIABLES USED WITHIN THE FUNCTIONS FOR NAVIGATING TO DIFFERENT CATAGORY PAGES
var quizPageHead = byId("quiz-page-head");
var homePage = byId("homepage");
var sportsHeader = byId("sports-header");
var musicHeader = byId("music-header");
var filmHeader = byId("film-header");
var technologyHeader = byId("technology-header");
var tvHeader = byId("tv-header");
var generalHeader = byId("general-header");
var learnHeader = byId("learn-header");
var signupHeader = byId("signup-header");


//VAR FOR NAVIGATING TO DIFFERENT CATAGORIES PAGES (&Learn More / SignUp)
var sportQuiz = byId('sports');
var musicQuiz = byId("music");
var filmQuiz = byId("film");
var technologyQuiz = byId("technology");
var tvQuiz = byId("tv");
var generalQuiz = byId("general");
var learnPage = byId("learn-button");
var signupPage = byId("signup-button");

//FUNCTION FOR HIDING AND DISPLAYING HOMEPAGE AND QUIZHEAD (&Learn More / SignUp)
var quizH = function() {
        homePage.style.display = "none";
        quizPageHead.style.display = "inline-block";
    };
    //FUNCTION FOR NAVIGATING TO DIFFERENT CATAGORIES PAGES (&Learn More / SignUp)
var quickQuiz = function(quizTitle, quizHeader) {
    quizTitle.onclick = function() {
        quizH();
        quizHeader.style.display = "block";
    };
};

quickQuiz(sportQuiz, sportsHeader);
quickQuiz(musicQuiz, musicHeader);
quickQuiz(filmQuiz, filmHeader);
quickQuiz(technologyQuiz, technologyHeader);
quickQuiz(tvQuiz, tvHeader);
quickQuiz(generalQuiz, generalHeader);
quickQuiz(learnPage, learnHeader);
quickQuiz(signupPage, signupHeader);




// ////////////////////////////////////////////////////////////////////////////
// //   Arrays of Questions for each Catagory
// ////////////////////////////////////////////////////////////////////////////
var sportsQuestions = [{
    question: "Manchester Utd have won the F.A. Cup more than 10 times?",
    choices: ["true", "false"],
    correct: "true"
}, {
    question: "The next Olympics will be held in Russia?",
    choices: ["true", "false"],
    correct: "false"
}, {
    question: "France won the first ever Rugby World Cup in 1987?",
    choices: ["true", "false"],
    correct: "false"
}, {
    question: "Paula Radcliffe has run the London Marathon faster than any other woman?",
    choices: ["true", "false"],
    correct: "true"
}, {

    question: "Steffi Graf has won the most Wimbledon Ladies Championships?",
    choices: ["true", "false"],
    correct: "false"
}, ];


var musicQuestions = [{
        question: "Only 1 of The Beatles is still alive",
        choices: ["true", "false"],
        correct: "false"
    }, {
        question: "Kanye West was originally in the Black Eyed Peas",
        choices: ["true", "false"],
        correct: "false",
    }, {
        question: "Rhianna, was born in Hammersmith, and grew up in the U.S.A.",
        choices: ["true", "false"],
        correct: "false",
    }, {
        question: "Coldplay have only had 2 No.1 hits in the U.K.",
        choices: ["true", "false"],
        correct: "true",
    }, {
        question: "Ludvig Van Beethoven was born in Vienna",
        choices: ["true", "false"],
        correct: "false",
    },

];

var filmQuestions = [{
        question: "Quentin Tarrantino was 29 when he directed Resovoir Dogs",
        choices: ["true", "false"],
        correct: "true"
    }, {
        question: "Walt Disney started Paramount Pictures",
        choices: ["true", "false"],
        correct: "false",
    }, {
        question: "Avatar is the highest grossing film of all time",
        choices: ["true", "false"],
        correct: "false",
    }, {
        question: "James Bond was created by Ian Flemming",
        choices: ["true", "false"],
        correct: "true",
    }, {
        question: "MPAA stands for Motion Picture Association of America",
        choices: ["true", "false"],
        correct: "true",
    },

];

var technologyQuestions = [{
        question: '"The Woz" is a co-founder of Microsoft',
        choices: ["true", "false"],
        correct: "false"
    }, {
        question: "More people on earth use a mobile phone than a toothbrush",
        choices: ["true", "false"],
        correct: "true",
    }, {
        question: "Berkeley Enterprises created the first personal computer",
        choices: ["true", "false"],
        correct: "true",
    }, {
        question: "Over 100 Billion emails are sent every day",
        choices: ["true", "false"],
        correct: "false",
    }, {
        question: "Bill Gate's home was designed on an Apple Mac",
        choices: ["true", "false"],
        correct: "true",
    },

];

var tvQuestions = [{
        question: "John Snow is a fictional character in Game of Thrones",
        choices: ["true", "false"],
        correct: "true"
    }, {
        question: "Coronation Street is the world's longest running Soap Opera",
        choices: ["true", "false"],
        correct: "true",
    }, {
        question: "Hugh Laurie was the central character in Grey's Anatomy",
        choices: ["true", "false"],
        correct: "false",
    }, {
        question: "The name of the bar in which the TV show 'Cheers' was set, was called 'Cheers'",
        choices: ["true", "false"],
        correct: "true",
    }, {
        question: "Kelsey Grammer is the voice of 'Sideshow Bob'",
        choices: ["true", "false"],
        correct: "true",
    },

];

var generalQuestions = [{
        question: "It only takes 3mins and 20 seconds for light to reach us from the sun",
        choices: ["true", "false"],
        correct: "false"
    }, {
        question: "The Electric Chair was invented by Nikola Tesla",
        choices: ["true", "false"],
        correct: "false",
    }, {
        question: "Half of the worlds roundabouts are in France",
        choices: ["true", "false"],
        correct: "true",
    }, {
        question: "Birds are directly descended from Dinosaurs",
        choices: ["true", "false"],
        correct: "true",
    }, {
        question: "Candy Floss machines were invented by Dentists",
        choices: ["true", "false"],
        correct: "true",
    },

];



///////////////////         Var used for Quiz         //////////////////////////
var content = byId("content"),
    questionContainer = byId("question"),
    choicesContainer = byId("choices"),
    
    submitBtn = byId("submit");
var currentQuestion = 0,
    score = 0,
    askingQuestion = true;


///////    Quiz Function (quiz) swapped out for catagory when called    ///////
var quizzes = function(quiz) {

    function askQuestion() {

        var choices = quiz[currentQuestion].choices,
            choicesHtml = "";

        // loop through choices, and create radio buttons
        for (var i = 0; i < choices.length; i++) {
            choicesHtml += "<input type='radio' name='quiz" + currentQuestion +
                "' id='choice" + (i + 1) +
                "' value='" + choices[i] + "'>" +
                " <label for='choice" + (i + 1) + "'>" + choices[i] + "</label>";
        }
        // load the question
        questionContainer.textContent = quiz[currentQuestion].question;
        // load the choices
        choicesContainer.innerHTML = choicesHtml;
        // setup for the first time
        if (currentQuestion === 0) {
            submitBtn.textContent = "Submit Answer";
        }
    }
    askQuestion();

    function checkAnswer() {
        // are we asking a question, or proceeding to next question?
        if (askingQuestion) {

            submitBtn.textContent = "Next Question";
            askingQuestion = false;

            // determine which radio button they clicked
            var userpick,
                correctIndex,
                radios = document.getElementsByName("quiz" + currentQuestion);
            for (var i = 0; i < radios.length; i++) {
                if (radios[i].checked) { // if this radio button is checked
                    userpick = radios[i].value;
                }
                // get index of correct answer
                if (radios[i].value == quiz[currentQuestion].correct) {
                    correctIndex = i;
                }
            }
            // setup if they got it right, or wrong
            var labelStyle = document.getElementsByTagName("label")[correctIndex].style;

            if (userpick == quiz[currentQuestion].correct) {
                score++;
                labelStyle.color = "green";
            } else {
                labelStyle.color = "red";
            }


        } else { // move to next question
            // setting up so user can ask a question
            askingQuestion = true;
            // change button text back to "Submit Answer"
            submitBtn.textContent = "Submit Answer";
            // if we're not on last question, increase question number
            if (currentQuestion < quiz.length - 1) {
                currentQuestion++;
                askQuestion();
            } else {
                showFinalResults();
            }
        }
    }


    function showFinalResults() {
        content.innerHTML = "<h2 id='finalScore'>You beat the timer and got " + score + " out of " + quiz.length +
            " questions. Nice work! </h2>";
            clearInterval(interval);
            display.innerHTML = "";
            catagHome.style.display = "block";

    }

    window.addEventListener("load", askQuestion, true);
    submitBtn.addEventListener("click", checkAnswer, false);
};


///  Variables used for countodwn timer, once ready button is clicked  //////
var interval;
var twentySeconds = 60 * 0.32;
var failScreen = byId("fail");
var catagHome = byId("catagHome");

/////////       Function used to set up the countdown Timer       //////////
function startTimer(duration, display) {
    var timer = duration,
        minutes, seconds;
    interval = setInterval(function() {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.innerHTML = ":" + seconds;
        // change timer color when 5 seconds are left //
        if (timer < 6) {
            display.style.color = "red";
            display.style.fontSize = "2.2em";
        }

        

        if (--timer < 0) {
            display.innerHTML = "";
            content.style.display = "none";
            failScreen.style.display = "block";
            catagHome.style.display = "block";
            clearInterval(interval);
        }


    }, 1000);
}






/////////             Function used to display / start countdown       //////////
var displayTimer = function() {
    display.style.display = "inline-block";
    startTimer(twentySeconds, display);
};

//   Var = button used to start the the countdown Timer on each catagory page  //
var display = byId('countdown');
var sportsReady = byId("sports-ready");
var musicReady = byId("music-ready");
var filmReady = byId("film-ready");
var technologyReady = byId("technology-ready");
var tvReady = byId("tv-ready");
var generalReady = byId("general-ready");
var quizContainer = byId("quiz-container");



// Functions used to display Countdown and start Quiz from selected Catagory //////

var quizStart = function(catReady) {
    catReady.onclick = function() {
        displayTimer();
        quizContainer.style.display = "block";
        if (catReady == sportsReady) {
            quizzes(sportsQuestions);
            sportsHeader.style.display = "none";


        } else if (catReady == musicReady) {
            quizzes(musicQuestions);
            musicHeader.style.display = "none";
        } else if (catReady == filmReady) {
            quizzes(filmQuestions);
            filmHeader.style.display = "none";
        } else if (catReady == technologyReady) {
            quizzes(technologyQuestions);
            technologyHeader.style.display = "none";
        } else if (catReady == tvReady) {
            quizzes(tvQuestions);
            tvHeader.style.display = "none";
        } else if (catReady == generalReady) {
            quizzes(generalQuestions);
            generalHeader.style.display = "none";
        }
    };
};


quizStart(sportsReady);
quizStart(musicReady);
quizStart(filmReady);
quizStart(technologyReady);
quizStart(tvReady);
quizStart(generalReady);

