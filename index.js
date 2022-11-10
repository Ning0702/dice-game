// Set the random picture of img1
var randomNumber1 = Math.floor( Math.random() * 6 ) + 1;
var pictureName1 = "images/dice" + randomNumber1 + ".png";
document.querySelector( ".img1" ).setAttribute( "src", pictureName1 );

// Set the random picture of img2
var randomNumber2 = Math.floor( Math.random() * 6 ) + 1;
var pictureName2 = "images/dice" + randomNumber2 + ".png";
document.querySelector( ".img2" ).setAttribute( "src", pictureName2 );

// Refresh h1
if ( randomNumber1 > randomNumber2 )
{
    document.querySelector( "h1" ).innerHTML = "Player 1 Wins!";
} 

if ( randomNumber1 < randomNumber2 )
{
    document.querySelector( "h1" ).textContent = "Player 2 Wins!";
} 

if ( randomNumber1 === randomNumber2 )
{
    document.querySelector( "h1" ).textContent = "Draws!";
} 