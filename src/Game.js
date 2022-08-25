const data = require("./data");
const prototypeQuestions = data.prototypeData;
const util = require("./util");

class Game {
  constructor(round) {
    this.round = round;
  }
  start(id, question, possibleAnswers, correctAnswer) {
    let cards = new Card(id, question, possibleAnswers, correctAnswer);
    let deck = new Deck(cards);
    this.printMessage();
    this.printQuestion();
  }
  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`);
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;
