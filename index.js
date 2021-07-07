var rollButton = document.getElementById("button-section");

function rollDice() {
  //generates random number between 1 and 6
  var randomNumber1 = Math.floor((Math.random() * 6) + 1);
  //images/dice1.png - images/dice6.png
  var randomImg1 = "images/dice" + randomNumber1 + ".png";
  //1st dice
  document.querySelector(".dice img").setAttribute("src", randomImg1);


  //generates random number between 1 and 6
  var randomNumber2 = Math.floor((Math.random() * 6) + 1);
  //images/dice1.png - images/dice6.png
  var randomImg2 = "images/dice" + randomNumber2 + ".png";
  //2nd dice
  document.querySelector(".dice .img2").setAttribute("src", randomImg2);


  //Change final message depending on the final result
  if (randomNumber1 === randomNumber2) {
    document.querySelector(".container h1").innerText = "Draw!🤝";
  } else if (randomNumber1 > randomNumber2) {
    document.querySelector(".container h1").innerText = "🎌Player 1 Wins!";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector(".container h1").innerText = "Player 2 Wins!🎌";
  }

}

rollButton.addEventListener("click", rollDice);
