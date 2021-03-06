"use strict";

var userName = prompt("Hello, what is your name?");

console.log(userName + " has logged on to the site.");
var intro = confirm("Hello " + userName + "! I bet you're here to learn about Joe. Would you like to play a quick guessing game to learn some neat stuff about him?");

if (intro === true) {
    alert("Great! Let's get started");
    console.log(userName + " has said that they want to play.");
    guessingGame();
} else if (intro === false) {
    alert("That's alright, maybe next time!");
    console.log(userName + " has said that they don't want to play.");
}

function guessingGame() {
    var questions = 0;
    var correct = 0;
    var questionsArray = [
        "Do you think Joe likes to brew his own beer?",
        "Did Joe's BFA carry an emphasis on sculpture?",
        "Do you think that Joe likes games?",
        "Did Joe wear suit pants the first time he went rock climbing?",
        "Do you think Joe was a basketball player in high school?",
        "Guess the number I'm thinking between 1 and 10! I'll give you 4 chances.",
        "Which country have I been to?"
    ];
    var responseCorrect = [
        "Heck yes! Joe's a brewing fool.",
        "Correct. It was on Jewelry and Metalsmithing.",
        "Oh man, you have no idea!",
        "Actually, yeah. You're right.",
        "Right! Joe wrestled all four years in high school"
    ];
    var responseIncorrect = [
        "It's true! Just ask him about it. He'll go on and on.",
        "Trick question! He had an emphasis on Jewelry and Metalsmithing.",
        "Clearly, you haven't been paying attention.",
        "Well, actually, it was kind of a weird day and, well, you're wrong.",
        "Nope, Joe was a wrestler."
    ];
    var answerArray = [
        "Y",
        "N",
        "Y",
        "Y",
        "N",
        Math.floor((Math.random() * 10) + 1),
        [
            "Canada",
            "Mexico",
            "Italy",
            "France",
            "Netherlands",
            "Australia"
        ]
    ]
    var i = 0
    do {
            var question = prompt(questionsArray[i]).toUpperCase();
            if (question.charAt(0) != "Y" &&
                question.charAt(0) != "N") {
                alert("Please answer Yes or No");
                console.log("Counter i " + i + " Question asked " + questionsArray[i]);
                i++
            } else if (question.charAt(0) === answerArray[i]) {
                console.log("Question asked: " + questionsArray[i] + " Response Given: " + question.charAt(0) + " Correct Answer " + answerArray[i] + " Counter i: " + i + " Response given " + responseCorrect[i]);
                alert(responseCorrect[i]);
                i++;
                questions++;
                correct++;
                console.log("Questions asked: " + questions + " Answers correct: " + correct );
            } else {
                console.log("Question asked: " + questionsArray[i] + " Response Given: " + question.charAt(0) + " Incorrect Answer " + answerArray[i] + " Counter i: " + i + " Response given " + responseIncorrect[i]);
                alert(responseIncorrect[i]);
                i++;
                questions++;
                console.log("Questions asked: " + questions + " Answers correct: " + correct ); 
            }
    } while (i < questionsArray.length-2);
    var intro = true;
    if (intro === true) {
        var intro = confirm("This has been pretty fun so far, how about we amp things up?");
        if (intro === false) {
            alert("That's too bad, " + userName + ". If you were curious, your final score was " + correct + " correct answers out of " + questions + " questions. Come back soon and play the rest of the game!");
            // i = 8;
            // console.log(i, intro);
        } else {
            alert("Great! Get ready for the hard questions!");
            // i++;
            // console.log(i, intro);
            while (i === 5) {
                var correctAnswer = false;
                for (var x = 4; x > 0; x--) {
                    var guessNumber = parseInt(prompt("You have " + x + " guesses to pick the right number between 1 and 10."), 10);
                    if (guessNumber !== answerArray[5]) {
                        alert("Nope, try again");
                        console.log("Guessed number: " + guessNumber + " counter i: " + i + " counter x: " + x + " actual answer: " + answerArray[5]);
                    } else {
                        alert("Congratulations, you got it!");
                        console.log("Guessed number: " + guessNumber + " counter i: " + i + " counter x: " + x + " Actual Answer: " + answerArray[5]);
                        correctAnswer = true;
                        correct++;
                        break;
                    };
                };
                if (correctAnswer === false && guesses === 1) {
                    alert("Awww, you didn't get it. The right answer was " + answerArray[5] + " Better luck next time!" );
                }
                i++;
                questions++;
            };
            console.log("We got out of question 6!" + " Counter i: " + i);
            console.log("Questions asked: " + questions + " Answers correct: " + correct);
            for (var guesses = 6; guesses > 0; guesses--) {
                var countriesGuess = prompt("Ok, here's a really tough one: Which country has Joe travelled to? I'll give you " + guesses + " guesses this time.").toLowerCase();
                console.log("First Loop | we are on guess #:" + (guesses));

                var correctAnswer = false;

                for (var countriesIndex = 0; countriesIndex < answerArray[6].length; countriesIndex++) {
                    console.log("Second Loop | Checking index " + countriesIndex + " of countries. Its data is " + answerArray[6][countriesIndex]);

                    if (countriesGuess === answerArray[6][countriesIndex].toLowerCase()) {
                        alert("You got one! Joe has been to " + answerArray[6][0] + ", " + answerArray[6][1] + ", " + answerArray[6][2] + ", " + answerArray[6][3] + ", " + answerArray[6][4] + ", " + answerArray[6][5] + "." );
                        correct++;
                        correctAnswer = true;
                    };
                }
                if (correctAnswer === true) {
                    break;
                }
                if (correctAnswer === false && guesses === 1) {
                    alert("Awww, you didn't guess any correctly. Joe has been to " + answerArray[6][0] + ", " + answerArray[6][1] + ", " + answerArray[6][2] + ", " + answerArray[6][3] + ", " + answerArray[6][4] + ", " + answerArray[6][5] + "." );
                };
            };
            questions++;
            console.log("Questions asked: " + questions + " Answers correct: " + correct);
            alert("Thank you for playing my game, " + userName + "!" + " Your final score was " + correct + " correct answers out of " + questions + " questions.");
        };
    };

//     var q1 = function () {

//         var beer = prompt("Would you believe he also likes to brew his own beer?").toLowerCase();
//         questions++;

//         if (beer === "y" || beer === "yes") {
//             alert("Yep. He makes so much that he has to give it away!");
//             console.log(userName + " has said that " + beer + ", they can tell Joe brews beer.");
//             correct++;
//         } else if (beer === "n" || beer === "no") {
//             alert("It's true! Just ask him about it. He'll go on and on and on.");
//             console.log(userName + " has said that " + beer + ", they don't think Joe makes beer.");
//         } else {
//             beer = prompt("Please type YES or NO for your response. You'd be surprised at the answer.");
//             console.log(userName + " has entered an invalid option.");
//         }
//     };


//     // console.log( questions + " question in the quiz have been asked." );
//     // console.log( userName + "has made " + correct + " correct answers." );
//     // console.log( "Response to beer prompt: " + beer );

//     var q2 = function () {

//         var jewelry = prompt("Did Joe's BFA from Central Washington University carry an emphasis on sculpture?").toLowerCase();
//         questions++;

//         if (jewelry === "y" || jewelry === "yes") {
//             alert("Trick question! He had an emphasis on Jewelry and Metalsmithing");
//             console.log(userName + " has said that " + jewelry + ", they think Joe sculpted.");
//         } else if (jewelry === "n" || jewelry === "no") {
//             alert("Correct. The emphasis of Joe's degree was on Jewelry and Metalsmithing.");
//             console.log(userName + " has said that " + jewelry + ", they know Joe made Jewelry.");
//             correct++;
//         } else {
//             jewelry = prompt("Please type YES or NO for your response. You'd be surprised at the answer.");
//             console.log(userName + " has entered an invalid option.");
//         }
//     };

//     // console.log( questions + " question in the quiz have been asked." );
//     // console.log( userName + "has made " + correct + " correct answers." );
//     // console.log( "Response to jewelry prompt: " + jewelry );

//     var q3 = function () {

//         var family = prompt("In all this crazy stuff, did you realize that Joe is supported by his wife and dogs?").toLowerCase();
//         questions++;

//         if (family === "y" || family === "yes") {
//             alert("Yeppers! Joe appreciates his wife and fur babies.");
//             console.log(userName + " has said that " + family + ", they know Joe is considerate.");
//             correct++;
//         } else if (family === "n" || family === "no") {
//             alert("You crazy! Joe doesn't take his family for granted!");
//             console.log(userName + " has said that " + family + ", they think Joe is an ass.");
//         } else {
//             family = prompt("Please type YES or NO for your response. You probably won't be surprised at the answer.");
//             console.log(userName + " has entered an invalid option.");
//         }
//     };

//     // console.log( questions + " question in the quiz have been asked." );
//     // console.log( userName + "has made " + correct + " correct answers." );
//     // console.log( "Response to family prompt: " + family );

//     var q4 = function () {

//         var games = prompt("Pretty neat game, so far, huh? Do you think that Joe likes games?").toLowerCase();
//         questions++;

//         if (games === "y" || games === "yes") {
//             alert("Heck yes! Joe devours board games.");
//             console.log(userName + " has said that " + games + ", they know Joe likes board games.");
//             correct++;
//         } else if (games === "n" || games === "no") {
//             alert("Well then, you need to get to know Joe a little bit more!");
//             console.log(userName + " has said that " + games + ", they need to pay more attention to Joe.");
//         } else {
//             games = prompt("Please type YES or NO for your response. You probably won't be surprised at the answer.");
//             console.log(userName + " has entered an invalid option.");
//         }
//     };

//     // console.log( questions + " question in the quiz have been asked." );
//     // console.log( userName + "has made " + correct + " correct answers." );
//     // console.log( "Response to games prompt: " + games );

//     var q5 = function () {

//         var amp = prompt("Yeah, turns out Joe loves games. Sometimes the more challenging ones are the most fun. Ready to amp this one up?");
//         questions++;

//         if (amp === "y" || amp === "yes") {
//             alert("All right! Let's do this!");
//             correct++;
//             console.log(userName + " has said that " + amp + ", want a challenge.");
//         } else if (amp === "n" || amp === "no") {
//             alert("Get it together! Life is all about challenges.");
//             console.log(userName + " has said that " + amp + ", they're weak sauce.");
//         } else {
//             amp = prompt("Please type YES or NO for your response.");
//             console.log(userName + " has entered an invalid option.");
//         }
//     };

//     // console.log( questions + " question in the quiz have been asked." );
//     // console.log( userName + "has made " + correct + " correct answers." );

//     var q6 = function () {

//         var milesAnswer = 11;
//         questions++;

//         for (var i = 4; i > 0; i--) {
//             var milesGuess = parseInt(prompt("Joe bikes to and from class as part of his commute every day. How many miles do you think he bikes total each day? You have " + i + " guesses."));
//             console.log(userName + " has guessed that Joe bikes " + milesGuess + "miles per day.")
//             var correctAnswer = false;
//             if (milesGuess < milesAnswer) {
//                 alert("You're too low!");
//             } else if (milesGuess > milesAnswer) {
//                 alert("You're too high!");
//             } else {
//                 alert("That's, right, Joe bikes " + milesAnswer + " miles per day.");
//                 correct++;
//                 correctAnswer = true;
//                 break;
//             }

//             if (correctAnswer === false && i === 1) {
//                 alert("Sorry you didn't guess it. The correct answer is that Joe bikes 11 miles a day.")
//             }
//         }
//     };

//     // console.log( questions + " question in the quiz have been asked." );
//     // console.log( userName + "has made " + correct + " correct answers." );

//     var q7 = function () {
//         questions++;

//     };

//     // console.log( questions + " question in the quiz have been asked." );
//     // console.log( userName + "has made " + correct + " correct answers." );


//     q1();
//     q2();
//     q3();
//     q4();
//     q5();
//     q6();
//     q7();


//     alert("Well, " + userName + ", you got " + correct + " answers correct out of " + questions + " quiz questions. Thanks for playing!");

}