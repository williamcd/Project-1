//variables
let playerScore = 0;
let dealerScore = 0;
let cardValue;
let player = 0;
let dealer = 1;
let cardName;
let wallet = 100;
let bet = 10;
//deck
const deck = {
    cards: ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'],
    suits: ["Hearts", "Diamonds", "Clubs", "Spades"]
}
function drawCard() {
  suit = Math.floor((Math.random() * 4) + 0);
  name = Math.floor((Math.random() * 13) + 0);
  cardName = (deck.cards[name] + ' of ' + deck.suits[suit]);
  if (name >= 10) {
    cardValue = 10;
  } else if (name === 0 && playerScore + 11 > 21) {
    cardValue = 1;
  } else if (name === 0) {
    cardValue = 11;
  } else if (name < 10) {
    cardValue = parseInt(name) + 1;
  }
}
//newCard logic
function newCard(i) {
  if (i === 0) {
    drawCard();
    playerScore = playerScore + parseInt(cardValue);
    console.log("Player drew...     " + cardName);
  } else if (i === 1) {
    drawCard();
    dealerScore = dealerScore + parseInt(cardValue);
    console.log("Dealer drew...     " + cardName);
  }
}
//startGame logic
function startGame() {
  newHand();
  console.log("Good luck!");
  console.log("-------------DRAWING--------------");
  for (i = 0; i < 2; i++) {
    newCard(0);
    newCard(1);
  }
  console.log("Player score is... " + playerScore);
  console.log("Dealer score is... " + dealerScore);
}
function newHand() {
  playerScore = 0;
  dealerScore = 0;
  cardValue = 0;
  player = 0;
  dealer = 1;
  cardName = 0;
}
//hitMe logic
function hitMe() {
  console.log("-------------DRAWING--------------");
  newCard(0);
  if (playerScore > 21) {
    console.log("New score is...    " + playerScore);
    console.log("Bust!");
    bust();
  } else if (playerScore === 21) {
    console.log("New score is...    " + playerScore);
  } else if (playerScore < 21) {
    console.log("New score is...    " + playerScore);
  }
}
//win logic
function win() {
  wallet += bet;
  console.log("New Balance: $" + wallet);
  newGame()
}
//bust logic
function bust() {
  wallet = wallet - bet;
  console.log("New Balance: $" + wallet)
  newGame();
}
//stand logic
function stand() {
  if (dealerScore > 21) {
    console.log("Dealer busts!");
    win();
  } else if (dealerScore === 21) {
    console.log("Dealer has blackjack!");
    bust();
  } else if (dealerScore === playerScore) {
    console.log("Dealer wins!");
    bust();
  } else if (dealerScore > playerScore) {
    console.log("Dealer has " + dealerScore);
    bust();
  } else if (dealerScore < playerScore) {
    console.log("-------------DRAWING--------------");
    newCard(1);
    console.log("Dealer score is... " + dealerScore);
    stand();
  }
}
//newGame logic
function newGame() {
  newHand();
  console.log("----------------------------------");
  console.log("-------------NEW GAME-------------");
  console.log("----------------------------------");
  startGame();
}