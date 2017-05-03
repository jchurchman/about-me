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

var family = prompt( "In all this crazy stuff, did you realize that Joe is supported by his wife and two dogs?" ).toLowerCase();

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

var coding = prompt( "This is the end of the game. Based on what you saw, do you think Joe likes coding?" ).toLowerCase();

if ( coding === "y" || coding === "yes" ) {
   alert( "Heck yes! Joe is having a blast with this stuff." );
   console.log ( userName + " has said that " + coding + ", they know Joe is having a blast learning to code." );
} else if ( coding === "n" || coding === "no" ) {
   alert( "Well then, you need to get to know Joe a little bit more!" );
   console.log ( userName + " has said that " + coding + ", they need to pay more attention to Joe." );
} else {
   coding = prompt( "Please type YES or NO for your response. You probably won't be surprised at the answer." ) ;
   console.log ( userName + " has entered an invalid option." );
}


// console.log( "Response to coding prompt: " + coding );
