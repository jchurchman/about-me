"use strict";

var userName = prompt( "Hello, what is your name?" );
var questions = 0;
var correct = 0;

console.log( userName + " has logged on to the site.");

var intro = prompt( "Hello " + userName + "! I bet you're here to learn about Joe. Would you like to play a quick guessing game to learn some neat stuff about him?" ).toUpperCase();
console.log(intro);

if ( intro === "Y" || intro === "YES" ) {
   alert( "Great! Let's get started" );
   console.log ( userName + " has said that " + intro + ", they want to play." );
} else if ( intro === "N" || intro === "NO" ) {
   alert( "That's too bad, you're already committed." );
   console.log ( userName + " has said that " + intro + ", they don't want to play." );
} else {
   intro = prompt( "Please type YES or NO for your response. Don't you want to learn some neat stuff about Joe in a short guessing game?" ) ;
   console.log ( userName + " has entered an invalid option." );
}

// console.log( userName + " has said that " + intro + ", they want to play.");

var beer = prompt( "Would you believe he also likes to brew his own beer?").toLowerCase(); 
questions++;

if ( beer === "y" || beer === "yes" ) {
   alert( "Yep. He makes so much that he has to give it away!" );
   console.log ( userName + " has said that " + beer + ", they can tell Joe brews beer." );
   correct++;
} else if ( beer === "n" || beer === "no" ) {
   alert( "It's true! Just ask him about it. He'll go on and on and on." );
   console.log ( userName + " has said that " + beer + ", they don't think Joe makes beer." );
} else {
   beer = prompt( "Please type YES or NO for your response. You'd be surprised at the answer." ) ;
   console.log ( userName + " has entered an invalid option." );
}

console.log( questions + " question in the quiz have been asked." );
console.log( userName + "has made " + correct + " correct answers." );
// console.log( "Response to beer prompt: " + beer );

var jewelry = prompt( "Did Joe's BFA from Central Washington University carry an emphasis on sculpture?" ).toLowerCase();
questions++;

if ( jewelry === "y" || jewelry === "yes" ) {
   alert( "Trick question! He had an emphasis on Jewelry and Metalsmithing" );
   console.log ( userName + " has said that " + jewelry + ", they think Joe sculpted." );
} else if ( jewelry === "n" || jewelry === "no" ) {
   alert( "Correct. The emphasis of Joe's degree was on Jewelry and Metalsmithing." );
   console.log ( userName + " has said that " + jewelry + ", they know Joe made Jewelry." );
   correct++;
} else {
   jewelry = prompt( "Please type YES or NO for your response. You'd be surprised at the answer." ) ;
   console.log ( userName + " has entered an invalid option." );
}

console.log( questions + " question in the quiz have been asked." );
console.log( userName + "has made " + correct + " correct answers." );
// console.log( "Response to jewelry prompt: " + jewelry );

var family = prompt( "In all this crazy stuff, did you realize that Joe is supported by his wife and dogs?" ).toLowerCase();
questions++;

if ( family === "y" || family === "yes" ) {
   alert( "Yeppers! Joe appreciates his wife and fur babies." );
   console.log ( userName + " has said that " + family + ", they know Joe is considerate." );
   correct++;
} else if ( family === "n" || family === "no" ) {
   alert( "You crazy! Joe doesn't take his family for granted!" );
   console.log ( userName + " has said that " + family + ", they think Joe is an ass." );
} else {
   family = prompt( "Please type YES or NO for your response. You probably won't be surprised at the answer." ) ;
   console.log ( userName + " has entered an invalid option." );
}

console.log( questions + " question in the quiz have been asked." );
console.log( userName + "has made " + correct + " correct answers." );
// console.log( "Response to family prompt: " + family );

var games = prompt( "Pretty neat game, so far, huh? Do you think that Joe likes games?" ).toLowerCase();
questions++;

if ( games === "y" || games === "yes" ) {
   alert( "Heck yes! Joe devours board games." );
   console.log ( userName + " has said that " + games + ", they know Joe likes board games." );
   correct++;
} else if ( games === "n" || games === "no" ) {
   alert( "Well then, you need to get to know Joe a little bit more!" );
   console.log ( userName + " has said that " + games + ", they need to pay more attention to Joe." );
} else {
   games = prompt( "Please type YES or NO for your response. You probably won't be surprised at the answer." ) ;
   console.log ( userName + " has entered an invalid option." );
}

console.log( questions + " question in the quiz have been asked." );
console.log( userName + "has made " + correct + " correct answers." );
// console.log( "Response to games prompt: " + games );

var amp = prompt( "Yeah, turns out Joe loves games. Sometimes the more challenging ones are the most fun. Ready to amp this one up?");
questions++;

if ( amp === "y" || amp === "yes" ) {
   alert( "All right! Let's do this!" );
   correct++;
   console.log ( userName + " has said that " + amp + ", want a challenge." );
} else if ( amp === "n" || amp === "no" ) {
   alert( "Get it together! Life is all about challenges." );
   console.log ( userName + " has said that " + amp + ", they're weak sauce." );
} else {
   amp = prompt( "Please type YES or NO for your response." ) ;
   console.log ( userName + " has entered an invalid option." );
}

console.log( questions + " question in the quiz have been asked." );
console.log( userName + "has made " + correct + " correct answers." );

var milesAnswer = 11;
questions++;

for ( var i = 4; i > 0; i-- ) {
   var milesGuess = parseInt(prompt("Joe bikes to and from class as part of his commute every day. How many miles do you think he bikes total each day? You have " + i + " guesses."));
      console.log( userName + " has guessed that Joe bikes " + milesGuess + "miles per day.")
   correctAnswer = false;
   if ( milesGuess < milesAnswer ) {
      alert( "You're too low!");
   } else if ( milesGuess > milesAnswer ) {
      alert( "You're too high!");
   } else {
      alert( "That's, right, Joe bikes " + milesAnswer + " miles per day.");
      correct++;
      correctAnswer = true;
      break;
   }

   if ( correctAnswer === false && i === 1 ) {
      alert( "Sorry you didn't guess it. The correct answer is that Joe bikes 11 miles a day.")
   }
}

console.log( questions + " question in the quiz have been asked." );
console.log( userName + "has made " + correct + " correct answers." );

var countries = ["Canada", "Mexico", "Italy", "France", "Netherlands", "Australia"];
questions++;

for ( var guesses = 6; guesses > 0; guesses-- ) {
   var countriesGuess = prompt( "Ok, here's a really tough one: Which country has Joe travelled to? I'll give you " + guesses + " guesses this time.").toLowerCase();
   console.log( "First Loop | we are on guess #:" + ( guesses + 1 ) );

var correctAnswer = false;

   for ( var countriesIndex = 0; countriesIndex < countries.length; countriesIndex ++ ) {
      console.log( "Second Loop | Checking index " + countriesIndex + " of countries. Its data is " + countries[countriesIndex] );

      if ( countriesGuess === countries[countriesIndex].toLowerCase() ) {
         alert( "You got one! Joe has been to " + countries );
         correct++;
         correctAnswer = true;
      };
   }
   if ( correctAnswer === true ) {
      break;
   }
      if ( correctAnswer === false && guesses === 1 ) {
         alert( "Awww, you didn't guess any correctly. Joe has been to " + countries );
      };

}

console.log( questions + " question in the quiz have been asked." );
console.log( userName + "has made " + correct + " correct answers." );

alert ( "Well, " + userName + ", you got " + correct + " answers correct out of " + questions + " quiz questions. Thanks for playing!");