const data = require("./data");
const prototypeQuestions = data.prototypeData;
const util = require("./util");
var Turn = require("./Turn");
var Card = require("./Card");
var Round = require("./Round");
var Deck = require("./Deck");

class Game {
  constructor() {
    this.round = "";
    this.cards = [
      {
        id: 4,
        question: "What is the capital of New Mexico?",
        answers: ["Albuquerque", "Santa Fe", "Las Cruces"],
        correctAnswer: "Santa Fe",
      },
      {
        id: 5,
        question: "What is Piper's favorite color?",
        answers: ["Pink", "Blue", "Yellow"],
        correctAnswer: "Blue",
      },
      {
        id: 6,
        question: "What is Bryce's favorite food?",
        answers: ["Pizza", "Noodles", "Hot Cheetos"],
        correctAnswer: "Hot Cheetos",
      },
    ];
  }
  start() {
    this.cards.map((card) => {
      return new Card(card.id, card.question, card.answers, card.correctAnswer);
    });

    const deck = new Deck(this.cards);
    this.round = new Round(deck);
    this.printMessage(deck, this.round);
    this.printQuestion(this.round);
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
