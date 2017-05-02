"use strict";

var userName = prompt( "Hello, what is your name?" );

console.log( userName + " has logged on to the site.");

var intro = prompt( "Hello " + userName + "! I bet you're here to learn about Joe. Would you like to play a quick guessing game to learn some neat stuff about him?" ).toUpperCase();
console.log(intro);

if ( intro === "Y" || intro === "YES" ) {
   alert( "Great! Let's get started" );
} else if ( intro === "N" || intro === "NO" ) {
   alert( "That's too bad, you're already committed." );
} else {
   intro = prompt( "Please type YES or NO for your response. Don't you want to learn some neat stuff about Joe in a short guessing game?" ) ;
}

if ( intro === "YES" || intro === "Y" ) {
   console.log ( userName + " has said that " + intro + ", they want to play." );
} else if ( intro === "NO" || intro === "N" ) {
   console.log ( userName + " has said that " + intro + ", they don't want to play." );
} else {
   console.log ( userName + " has entered an invalid option." );
}
// console.log( userName + " has said that " + intro + ", they want to play.");

var beer = prompt( "Would you believe he also likes to brew his own beer?").toLowerCase();

if ( beer === "y" || beer === "yes" ) {
   alert( "Yep. He makes so much that he has to give it away!" );
} else if ( beer === "n" || beer === "no" ) {
   alert( "It's true! Just ask him about it. He'll go on and on and on." );
} else {
   intro = prompt( "Please type YES or NO for your response. You'd be surprised at the answer" ) ;
}

if ( intro === "yes" || intro === "y" ) {
   console.log ( userName + " has said that " + beer + ", they can tell Joe brews beer." );
} else if ( intro === "no" || intro === "n" ) {
   console.log ( userName + " has said that " + beer + ", they don't think Joe makes beer." );
} else {
   console.log ( userName + " has entered an invalid option." );
}

// console.log( "Response to beer prompt: " + beer );

// var jewelry = prompt( "Did Joe's BFA from Central Washington University carry an emphasis on Jewelry and Metalsmithing?" );

// console.log( "Response to jewelry prompt: " + jewelry );

// var family = prompt( "In all this crazy stuff, did you realize that Joe is supported by his wife and two dogs?" );

// console.log( "Response to family prompt: " + family );

// var coding = prompt( "This is the end of the game. Based on what you saw, do you think Joe likes coding?" );

// console.log( "Response to coding prompt: " + coding );
