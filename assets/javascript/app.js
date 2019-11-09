$(document).ready(function () {

    var triviaOptions = [{
            question: "Who is Harry's godfather?",
            choice: ["Sirius Black", "Albus Dumbledore", "Remus Lupin", "Arthur Weasley"],
            answer: 0,
            fact: "Sirius was a very good friend of Harry's parents.",
            picture: "assets/images/sirius.jpg"
        },
        {
            question: "Which house did Harry belong to?",
            choice: ["Ravenclaw", "Hufflepuff", "Slytherin", "Gryffindor"],
            answer: 3,
            fact: "Harry was sorted into House Gryffindor by the Sorting Hat.",
            picture: "assets/images/gryffindor.jpg"
        },
        {
            question: "Who is Fluffy?",
            choice: ["Harry's owl", "Hermoine's cat", "Ron's rat", "Hagrid's three-headed dog"],
            answer: 3,
            fact: "Hagrid bought Fluffy from a 'Greek chappie' at The Leaky Cauldron",
            picture: "assets/images/fluffy.jpg"
        },
        {
            question: "Which of the following was never Harry's Defense Against the Dark Arts Teacher?",
            choice: ["Remus Lupin", "Gilderoy Lockhart", "Barty Crouch Jr.", "Rufus Scrimgeour"],
            answer: 3,
            fact: "Harry had many Defense Against the Dark Arts teachers, but Rufus Scrimgeour was never one. He was at one point, the Minister for Magic, though.",
            picture: "assets/images/rufus.jpg"
        },
        {
            question: "How did Hermoine take extra lessons in her third year at Hogwarts?",
            choice: ["Time-turner", "Free weekend classes", "The pensieve", "Tutoring"],
            answer: 0,
            fact: "The time-turner is a gift given to Hermoine that allows her to go back in time to relive past events. She used it to sit through past classes.",
            picture: "assets/images/timeTurner.jpg"
        },
        {
            question: "Who was the Seeker for the Bulgarian Team that played in the Quidditch World Cup against the Irish?",
            choice: ["Viktor Krum", "Igor Karkaroff", "Cedric Diggory", "Gellert Grindelwald"],
            answer: 0,
            fact: "Viktor Krum was a student that attended Durmstrang Institute, and was selected to participate in the Triwizard Tournament. He was a student during the World Cup.",
            picture: "assets/images/krum.jpg"
        },
        {
            question: "What causes Dumbledore's hand to turn black and shriveled?",
            choice: ["Age", "a Death Eater", "Poison", "a Horcrux"],
            answer: 3,
            fact: "The Horcrux that Dumbledore had was a ring, which after wearing, caused Dumbledore's hand became terribly disfigured.",
            picture: "assets/images/horcrux.jpg"
        },
        {
            question: "Who is the Half-Blood Prince?",
            choice: ["Severus Snape", "Lucius Malfoy", "Tom Riddle", "Eileen Prince"],
            answer: 0,
            fact: "Severus Snape was the Half-Blood Prince. He was a half-blood wizard meaning his mother was a wizard and his father was a muggle. His mother's maiden name was Prince.",
            picture: "assets/images/hbp.jpg"
        },
        {
            question: "Who became a professional Quidditch player?",
            choice: ["George", "Ginny", "Ron", "Harry"],
            answer: 1,
            fact: "Ginny played for the professional Quidditch team Holyhead Harpies, and became the senior Quidditch correspondant after retiring from the sport.",
            picture: "assets/images/ginny.jpg"
        },
        {
            question: "Who was the Ravenclaw house ghost?",
            choice: ["Nearly headless Nick", "The Bloody Baron", "The Grey Lady", "The Fat Friar"],
            answer: 2,
            fact: "The Gray Lady, or Helana Ravenclaw, was a witch and Rowena Ravenclaw's daughter.",
            picture: "assets/images/grayLady.jpg"
        },
        {
            question: "How is Harry able to breath underwater during the second task of the Triwizard Tournament?",
            choice: ["He transfigures into a shark", "He performs a bubble-head charm", "He eats Gillyweed", "He uses the engorgio charm to make his snorkel longer"],
            answer: 2,
            fact: "Gillyweed has magical properties which allow humans to adopt fish-like qualities for a time.",
            picture: "assets/images/gillyweed.jpg"
        },
        {
            question: "What is Wingardium Leviosa (not leviosaaa)?",
            choice: ["Levitation charm", "Summoning charm", "A charm which removes the opponent's wand from their hand", "Light charm"],
            answer: 0,
            fact: "Wingardium Leviosa is a charm that a witch or wizard can cast to make objects levitate.",
            picture: "assets/images/leviosaaa.jpg"
        },
        {
            question: "What phrase makes the Marauder's map blank?",
            choice: ["Nothing to see here", "All done", "Mischief managed", "I'm done"],
            answer: 2,
            fact: "The Marauder's Map is a 'live' map that showed all of Hogwart's grounds, including secret passageways, and the location of every person on the grounds.",
            picture: "assets/images/map.jpg"
        },
        {
            question: "Which of the following characters is not an animagi?",
            choice: ["Sirius Black", "Nymphadora Tonks", "Peter Pettigrew", "James Potter"],
            answer: 1,
            fact: "An animagi is a type of witch or wizard that is able to morph into an animal. This is a learned skill. Tonks was a Metamorphmagus, meaning she could change any part of her self at any moment. Metamorphmagi are born with their skill.",
            picture: "assets/images/nymph.jpg"
        },
        {
            question: "Which of the following are all Marauder's:",
            choice: ["Mooney, Wormtail, Padfoot, Prongs", "Mooney, Rattail, Pawfoot, Prongs", "Mooney, Wormtail, Pawfoot, Prongs", "Mooney, Rattail, Padfoot, Prongs"],
            answer: 0,
            fact: "The Marauders were a group of four Gryffindors and classmates: Remus Lupin, Peter Pettigrew, Sirius Black, and James Potter. All four at one point gave their lives defending Harry.",
            picture: "assets/images/marauders.jpg"
        },
    ];

    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var userPick;

    var timer = 10;
    var secondsVar;
    var runGame = false;
   
    var showOnce;
    var runningArray = [];

    //show info box (where directions live)
    $(".infoBox").show();
    //hide restart button
    $("#restart").hide();
    //area that holds potential answers
    $(".answerHolder").hide();
    //click start button to start game, timer and show first question
    $("#start").on("click", function () {
        $("#start").hide();
        beginGame();
        runTimer();
        //push items from array into "runningArray," run entire length
        for (var i = 0; i < triviaOptions.length; i++) {
            runningArray.push(triviaOptions[i]);
        }
    })
    //timer function
    function runTimer() {
        if (!runGame) {
            secondsVar = setInterval(decrementTimer, 1000);
            runGame = true;
        }
    }
    //timer decrementation function
    function decrementTimer() {
        //show time remaining on HTML page: #timeRemaining
        $("#timeRemaining").html("<h3>Time Remaining: " + timer + "</h3>");
        //decrement timer
        timer--;
        //if timer drops below 0 seconds, increment unanswered var
        if (timer === -1) {
            unanswered++;
            answerScreen();
            $("#answer").html("<p>Time's Up! The correct answer was " + userPick.choice[userPick.answer] + "</p>");
            $("#answer").append(userPick.fact);
            picture();
        }
    }
    //temporarily pause game and clear timer
    function answerScreen() {
        runGame = false;
        clearInterval(secondsVar);
    }
    //function to show single question with all 4 options
    function beginGame() {
        var userGuess = "";
        $(".answerHolder").show();
        $(".infoBox").hide();
        showOnce = Math.floor(Math.random() * triviaOptions.length);
        userPick = triviaOptions[showOnce];
        $("#question").html("<h2>" + userPick.question + "</h2>");
        for (var i = 0; i < userPick.choice.length; i++) {
            var userChoice = $("<div>");
            userChoice.addClass("answerchoice");
            userChoice.html(userPick.choice[i]);
            userChoice.attr("userSelection", i);
            $("#answer").append(userChoice);
        }
        $(".answerchoice").on("click", function () {
            userGuess = parseInt($(this).attr("userSelection"));
            if (userGuess === userPick.answer) {
                answerScreen();
                correct++;
                userGuess = "";
                $("#answer").html("<p>Correct! The correct answer was " + userPick.choice[userPick.answer] + "</p>");
                $("#answer").append(userPick.fact);
                picture();
            } else {
                answerScreen();
                incorrect++;
                userGuess = "";
                $("#answer").html("<p>Incorrect! The correct answer was " + userPick.choice[userPick.answer] + "</p>");
                $("#answer").append(userPick.fact);
                picture();
            }
        })
    }

    function picture() {
        $("#answer").append("<img class='container' src=" + userPick.picture + ">");
        var newArray = [];
        newArray.push(userPick);
        //pull out of array once question is asked (no repeat questions)
        triviaOptions.splice(showOnce, 1);
        setTimeout(function () {
            $("#answer").empty();
            //set timer on questions 2-15 for 10 secs (or whatever,  adjusted below)
            timer = 10;
            //add correct, incorrect, and unanswered. If total = 15, run results
            if ((correct + incorrect + unanswered) === 15) {
                results();
                //if number of run questions < 15, reset timer and continue game
            } else {
                runTimer();
                beginGame();
            }
        }, 6000);
    }

    function results() {
        $("#question").hide();
        $("#restart").show();
        $("#question").html("<h3>Thank you for playing! Here are your results: </h3>");
        $("#answer").append("<h4> Correct: " + correct + "</h4>");
        $("#answer").append("<h4> Incorrect: " + incorrect + "</h4>");
        $("#answer").append("<h4> Unanswered: " + unanswered + "</h4>");
        correct = 0;
        incorrect = 0;
        unanswered = 0;

        $("#restart").on("click", function () {
            restart();
        });
    }

    function restart() {
        $("#restart").hide();
        $("#answer").empty();
        $("#question").show();
        for (var i = 0; i < runningArray.length; i++) {
            triviaOptions.push(runningArray[i]);
        }
        runTimer();
        beginGame();
    }
});