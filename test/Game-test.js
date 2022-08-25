const chai = require("chai");
const expect = chai.expect;
const Card = require("../src/Card");
const Deck = require("../src/Deck");
const Turn = require("../src/Turn");

describe("Round", function () {
  it("should instanutae a new Game class", function () {
    const round = new Game();
  });
  it("should keep track of the current round", function () {
    const round = new Game(round);
    expect(game.round).to.equal("round 1");
  });
  it("should create cards", function () {
    expect(
      start(
        4,
        "What is the capital of New Mexico?",
        ["Albuquerque", "Santa Fe", "Las Cruces"],
        "Santa Fe"
      )
    ).to.be.an.instanceof(Card);
    expect(
      start(
        5,
        "What is Piper's favorite color?",
        ["Pink", "Blue", "Yellow"],
        "Blue"
      )
    ).to.be.an.instanceof(Card);
    expect(
      start(
        6,
        "What is Bryce's favorite food?",
        ["Pizza", "Noodles", "Hot Cheetos"],
        "Hot Cheetos"
      )
    ).to.be.an.instanceof(Card);
  });
  it("should create a deck with the cards", function () {
    start(
      4,
      "What is the capital of New Mexico?",
      ["Albuquerque", "Santa Fe", "Las Cruces"],
      "Santa Fe"
    );
    start(
      5,
      "What is Piper's favorite color?",
      ["Pink", "Blue", "Yellow"],
      "Blue"
    );
    start(
      6,
      "What is Bryce's favorite food?",
      ["Pizza", "Noodles", "Hot Cheetos"],
      "Hot Cheetos"
    );
    const deck = new Deck([card1, card2, card3]);
    expect(deck).to.be.an.instanceof(Deck);
  });
  it("should create a deck with the cards", function () {
    start(
      4,
      "What is the capital of New Mexico?",
      ["Albuquerque", "Santa Fe", "Las Cruces"],
      "Santa Fe"
    );
    start(
      5,
      "What is Piper's favorite color?",
      ["Pink", "Blue", "Yellow"],
      "Blue"
    );
    start(
      6,
      "What is Bryce's favorite food?",
      ["Pizza", "Noodles", "Hot Cheetos"],
      "Hot Cheetos"
    );
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round).to.be.an.instanceof(Round);
  });
  //   it("should should invoke the printMessage method", function () {
  //     start(
  //       4,
  //       "What is the capital of New Mexico?",
  //       ["Albuquerque", "Santa Fe", "Las Cruces"],
  //       "Santa Fe"
  //     );
  //     start(
  //       5,
  //       "What is Piper's favorite color?",
  //       ["Pink", "Blue", "Yellow"],
  //       "Blue"
  //     );
  //     start(
  //       6,
  //       "What is Bryce's favorite food?",
  //       ["Pizza", "Noodles", "Hot Cheetos"],
  //       "Hot Cheetos"
  //     );
  //     const deck = new Deck([card1, card2, card3]);
  //     const round = new Round(deck);
  //     expect(printMessage(deck, round)).to
  //       .equal(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
  // -----------------------------------------------------------------------`);
  // });
  // it("should should invoke the printQuestion method", function () {
  //
  // });
});
