const chai = require("chai");
const expect = chai.expect;
const Game = require("../src/Game");
const Card = require("../src/Card");
const Deck = require("../src/Deck");
const Turn = require("../src/Turn");
var Round = require("../src/Round");

describe("Round", function () {
  it("should instanutae a new Game class", function () {
    const round = new Game();
  });
  it("should keep track of the current round", function () {
    const game = new Game();
    expect(game.round).to.equal("");
  });
  it("should create cards", function () {
    const game = new Game();
    const card1 = {
      id: 4,
      question: "What is the capital of New Mexico?",
      answers: ["Albuquerque", "Santa Fe", "Las Cruces"],
      correctAnswer: "Santa Fe",
    };
    const card2 = {
      id: 5,
      question: "What is Piper's favorite color?",
      answers: ["Pink", "Blue", "Yellow"],
      correctAnswer: "Blue",
    };
    const card3 = {
      id: 6,
      question: "What is Bryce's favorite food?",
      answers: ["Pizza", "Noodles", "Hot Cheetos"],
      correctAnswer: "Hot Cheetos",
    };
    game.start([card1, card2, card3]);

    expect(game.cards).to.have.lengthOf(3);
  });
  it("should create a deck with the cards", function () {
    const game = new Game();
    const card1 = new Card(
      4,
      "What is the capital of New Mexico?",
      ["Albuquerque", "Santa Fe", "Las Cruces"],
      "Santa Fe"
    );
    const card2 = new Card(
      5,
      "What is Piper's favorite color?",
      ["Pink", "Blue", "Yellow"],
      "Blue"
    );
    const card3 = new Card(
      6,
      "What is Bryce's favorite food?",
      ["Pizza", "Noodles", "Hot Cheetos"],
      "Hot Cheetos"
    );
    game.start([card1, card2, card3]);
    const deck = new Deck([card1, card2, card3]);
    expect(deck.deck).to.have.lengthOf(3);
  });
  it("should create a round with the deck", function () {
    const game = new Game();

    const card1 = new Card(
      4,
      "What is the capital of New Mexico?",
      ["Albuquerque", "Santa Fe", "Las Cruces"],
      "Santa Fe"
    );
    const card2 = new Card(
      5,
      "What is Piper's favorite color?",
      ["Pink", "Blue", "Yellow"],
      "Blue"
    );
    const card3 = new Card(
      6,
      "What is Bryce's favorite food?",
      ["Pizza", "Noodles", "Hot Cheetos"],
      "Hot Cheetos"
    );
    game.start([card1, card2, card3]);
    const deck = new Deck([card1, card2, card3]);
    // const round = new Round(deck);
    expect(game.round).to.be.an.instanceof(Round);
  });
});
