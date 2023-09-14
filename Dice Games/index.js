//For Player1
var randomeNumber1 = Math.floor(Math.random() * 6)+1;   //Random number between 1 and 6

var randomDiceImage = "dice" + randomeNumber1 + ".png"
//dice1.png - dice6.png

var randomImageSource1 = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource1);



//For Player2
 var randomeNumber2 = Math.floor(Math.random()*6)+1;

var randomDiceImage = "dice" + randomeNumber2 + ".png"
//dice1.png - dice6.png

var randomImageSource2 = "images/" + randomDiceImage;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2)


if (randomeNumber1 > randomeNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if(randomeNumber2 > randomeNumber1)
{
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}
else
{
    document.querySelector("h1").innerHTML = "Game Draw"
}
