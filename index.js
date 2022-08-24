var randomNumber1 = Math.random()
randomNumber1 = randomNumber1 * 6
randomNumber1 = Math.floor(randomNumber1)
randomNumber1 = randomNumber1
var diceList = ["images\\dice6.png","images\\dice5.png","images\\dice4.png","images\\dice3.png","images\\dice2.png","images\\dice1.png"]
document.querySelector("#player1 img").setAttribute("src",diceList[randomNumber1])
var randomNumber2 = Math.random()
randomNumber2 = randomNumber2 * 6
randomNumber2 = Math.floor(randomNumber2)
randomNumber2 = randomNumber2
document.querySelector("#player2 img").setAttribute("src",diceList[randomNumber2])


if (randomNumber1===randomNumber2){
  document.querySelector("h1").textContent = "Draw"
}
else if (randomNumber1>randomNumber2){
  document.querySelector("h1").textContent = "Player2 Wins"
}
else if (randomNumber2>randomNumber1){
  document.querySelector("h1").textContent = "Player1 Wins"
}
