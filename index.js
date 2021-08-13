var randomNumber1 = Math.random()* (7-1)+1;
randomNumber1 = Math.floor(randomNumber1);
console.log(randomNumber1);

var randomNumber2 = Math.random()* (7-1)+1;
randomNumber2 = Math.floor(randomNumber2);
console.log(randomNumber2);

var img1 = document.querySelector(".img1").setAttribute("src", "images/dice"+randomNumber1+".png");
var img2= document.querySelector(".img2").setAttribute("src", "images/dice"+randomNumber2+".png");

if(randomNumber1 > randomNumber2) {
    document.querySelector(".container h1").innerHTML = "Player 1 Wins!";
} else if(randomNumber1 < randomNumber2) {
    document.querySelector(".container h1").innerHTML = "Player 2 Wins!";
} else if(randomNumber1 === randomNumber2) {
    document.querySelector(".container h1").innerHTML = "Draw!";
}