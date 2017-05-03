"use strict";

var userName = prompt( "Hello, what is your name?" );

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

if ( beer === "y" || beer === "yes" ) {
   alert( "Yep. He makes so much that he has to give it away!" );
   console.log ( userName + " has said that " + beer + ", they can tell Joe brews beer." );
} else if ( beer === "n" || beer === "no" ) {
   alert( "It's true! Just ask him about it. He'll go on and on and on." );
   console.log ( userName + " has said that " + beer + ", they don't think Joe makes beer." );
} else {
   beer = prompt( "Please type YES or NO for your response. You'd be surprised at the answer." ) ;
   console.log ( userName + " has entered an invalid option." );
}

// console.log( "Response to beer prompt: " + beer );

var jewelry = prompt( "Did Joe's BFA from Central Washington University carry an emphasis on sculpture?" ).toLowerCase();

if ( jewelry === "y" || jewelry === "yes" ) {
   alert( "Trick question! He had an emphasis on Jewelry and Metalsmithing" );
   console.log ( userName + " has said that " + jewelry + ", they think Joe sculpted." );
} else if ( jewelry === "n" || jewelry === "no" ) {
   alert( "Correct. The emphasis of Joe's degree was on Jewelry and Metalsmithing." );
   console.log ( userName + " has said that " + jewelry + ", they know Joe made Jewelry." );
} else {
   jewelry = prompt( "Please type YES or NO for your response. You'd be surprised at the answer." ) ;
   console.log ( userName + " has entered an invalid option." );
}

// console.log( "Response to jewelry prompt: " + jewelry );

var family = prompt( "In all this crazy stuff, did you realize that Joe is supported by his wife and dogs?" ).toLowerCase();

if ( family === "y" || family === "yes" ) {
   alert( "Yeppers! Joe appreciates his wife and fur babies." );
   console.log ( userName + " has said that " + family + ", they know Joe is considerate." );
} else if ( family === "n" || family === "no" ) {
   alert( "You crazy! Joe doesn't take his family for granted!" );
   console.log ( userName + " has said that " + family + ", they think Joe is an ass." );
} else {
   family = prompt( "Please type YES or NO for your response. You probably won't be surprised at the answer." ) ;
   console.log ( userName + " has entered an invalid option." );
}


// console.log( "Response to family prompt: " + family );

var games = prompt( "Pretty neat game, so far, huh? Do you think that Joe likes games?" ).toLowerCase();

if ( games === "y" || games === "yes" ) {
   alert( "Heck yes! Joe devours board games." );
   console.log ( userName + " has said that " + games + ", they know Joe likes board games." );
} else if ( games === "n" || games === "no" ) {
   alert( "Well then, you need to get to know Joe a little bit more!" );
   console.log ( userName + " has said that " + games + ", they need to pay more attention to Joe." );
} else {
   games = prompt( "Please type YES or NO for your response. You probably won't be surprised at the answer." ) ;
   console.log ( userName + " has entered an invalid option." );
}

// console.log( "Response to games prompt: " + games );

var amp = prompt( "Yeah, turns out Joe loves games. Sometimes the more challenging ones are the most fun. Ready to amp this one up?")

if ( amp === "y" || amp === "yes" ) {
   alert( "All right! Let's do this!" );
   console.log ( userName + " has said that " + amp + ", want a challenge." );
} else if ( amp === "n" || amp === "no" ) {
   alert( "Get it together! Life is all about challenges." );
   console.log ( userName + " has said that " + amp + ", they're weak sauce." );
} else {
   amp = prompt( "Please type YES or NO for your response." ) ;
   console.log ( userName + " has entered an invalid option." );
}


var milesAnswer = 11;

for ( var i = 0; i < 4; i++ ) {
   var milesGuess = parseInt(prompt("Joe bikes to and from class as part of his commute every day. How many miles do you think he bikes total each day?"));
      console.log( userName + "has guessed that Joe bikes " + milesGuess + "miles per day.")

   if ( milesGuess < milesAnswer ) {
      prompt( "You're too low!");
   } else if ( milesGuess > milesAnswer ) {
      prompt( "You're too high!");
   } else {
      prompt( "That's, right, Joe bikes " + milesAnswer + " miles per day.")
      break;
   }
}