let homeScore = document.getElementById("h-score");
let guestScore = document.getElementById("g-score");
let winningText = document.getElementById("winner");
let hCounter = 0;
let gCounter = 0;

function homeAddOne() {
  hCounter += 1;
  homeScore.textContent = hCounter;
}
function guestAddOne() {
  gCounter += 1;
  guestScore.innerText = gCounter;
}
function homeAddTwo() {
  hCounter += 2;
  homeScore.textContent = hCounter;
}
function homeAddThree() {
  hCounter += 3;
  homeScore.textContent = hCounter;
}
function guestAddTwo() {
  gCounter += 2;
  guestScore.textContent = gCounter;
}
function guestAddThree() {
  gCounter += 3;
  guestScore.textContent = gCounter;
}
function resetScore() {
  hCounter = 0;
  gCounter = 0;
  homeScore.textContent = 0;
  guestScore.textContent = 0;
  winningText.textContent = "";
}
function homeOrGuest() {
  if (hCounter > gCounter) {
    winningText.textContent = "Home has won with " + hCounter + " points!";
  } else
    winningText.textContent = "Guest has won with " + gCounter + " points!";
}
