const chai = require("chai");
const expect = chai.expect;
const Card = require("../src/Card");
const Deck = require("../src/Deck");
const Round = require("../src/Round");
const Turn = require("../src/Turn");

describe("Round", function () {
  it("should instanutae a new Round class", function () {
    const round = new Round();
  });
  it("should be able to take in a deck of cards", function () {
    const card1 = new Card(
      1,
      "What is Robbie's favorite animal",
      ["sea otter", "pug", "capybara"],
      "sea otter"
    );
    const card2 = new Card(
      14,
      "What organ is Khalid missing?",
      ["spleen", "appendix", "gallbladder"],
      "gallbladder"
    );
    const card3 = new Card(
      12,
      "What is Travis's middle name?",
      ["Lex", "William", "Fitzgerald"],
      "Fitzgerald"
    );
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
  });
  it("should instantuate a new turn when a player takes a turn", function () {
    const card1 = new Card(
      1,
      "What is Robbie's favorite animal",
      ["sea otter", "pug", "capybara"],
      "sea otter"
    );
    const card2 = new Card(
      14,
      "What organ is Khalid missing?",
      ["spleen", "appendix", "gallbladder"],
      "gallbladder"
    );
    const card3 = new Card(
      12,
      "What is Travis's middle name?",
      ["Lex", "William", "Fitzgerald"],
      "Fitzgerald"
    );
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it("should count how many turns have been played", function () {
    const card1 = new Card(
      1,
      "What is Robbie's favorite animal",
      ["sea otter", "pug", "capybara"],
      "sea otter"
    );
    const card2 = new Card(
      14,
      "What organ is Khalid missing?",
      ["spleen", "appendix", "gallbladder"],
      "gallbladder"
    );
    const card3 = new Card(
      12,
      "What is Travis's middle name?",
      ["Lex", "William", "Fitzgerald"],
      "Fitzgerald"
    );
    const turn = new Turn("pig", card1);
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    round.takeTurn("horse");
    round.takeTurn("dog");
    expect(round.turns).to.equal(2);
  });

  it("should start with the first card as the current card", function () {
    const card1 = new Card(
      1,
      "What is Robbie's favorite animal",
      ["sea otter", "pug", "capybara"],
      "sea otter"
    );
    const card2 = new Card(
      14,
      "What organ is Khalid missing?",
      ["spleen", "appendix", "gallbladder"],
      "gallbladder"
    );
    const card3 = new Card(
      12,
      "What is Travis's middle name?",
      ["Lex", "William", "Fitzgerald"],
      "Fitzgerald"
    );
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    round.takeTurn("pug");
    expect(round.round.deck[0]).to.equal(card1);
  });

  it("should return the next card after a guess is made", function () {
    const card1 = new Card(
      1,
      "What is Robbie's favorite animal",
      ["sea otter", "pug", "capybara"],
      "sea otter"
    );
    const card2 = new Card(
      14,
      "What organ is Khalid missing?",
      ["spleen", "appendix", "gallbladder"],
      "gallbladder"
    );
    const card3 = new Card(
      12,
      "What is Travis's middle name?",
      ["Lex", "William", "Fitzgerald"],
      "Fitzgerald"
    );
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    round.takeTurn("dog");
    expect(round.round.deck[1]).to.equal(card2);
    round.takeTurn("cat");
    expect(round.round.deck[2]).to.equal(card3);
  });
  it.skip("should evaluate whether the guess was correct", function () {
    const card1 = new Card(
      1,
      "What is Robbie's favorite animal",
      ["sea otter", "pug", "capybara"],
      "sea otter"
    );
    const card2 = new Card(
      14,
      "What organ is Khalid missing?",
      ["spleen", "appendix", "gallbladder"],
      "gallbladder"
    );
    const card3 = new Card(
      12,
      "What is Travis's middle name?",
      ["Lex", "William", "Fitzgerald"],
      "Fitzgerald"
    );
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.takeTurn("sea otter")).to.equal("Correct Answer!");
  });
  it.skip("should add incorrect guesses to an array", function () {
    const card1 = new Card(
      1,
      "What is Robbie's favorite animal",
      ["sea otter", "pug", "capybara"],
      "sea otter"
    );
    const card2 = new Card(
      14,
      "What organ is Khalid missing?",
      ["spleen", "appendix", "gallbladder"],
      "gallbladder"
    );
    const card3 = new Card(
      12,
      "What is Travis's middle name?",
      ["Lex", "William", "Fitzgerald"],
      "Fitzgerald"
    );
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.takeTurn("horse");
    expect(round.incorrectGuesses).to.have.lengthOf(1);
    round.takeTurn("spleen");
    expect(round.incorrectGuesses).to.have.lengthOf(2);
  });
  it("should calculate the percent of correct answers", function () {
    const card1 = new Card(
      1,
      "What is Robbie's favorite animal",
      ["sea otter", "pug", "capybara"],
      "sea otter"
    );
    const card2 = new Card(
      14,
      "What organ is Khalid missing?",
      ["spleen", "appendix", "gallbladder"],
      "gallbladder"
    );
    const card3 = new Card(
      12,
      "What is Travis's middle name?",
      ["Lex", "William", "Fitzgerald"],
      "Fitzgerald"
    );
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    round.takeTurn("horse");
    round.takeTurn("gallbladder");
    round.takeTurn("Fitzgerald");
    expect(round.calculatePercentCorrect()).to.equal(67);
  });
  it("should print the percent of correct questions to the console", function () {
    const card1 = new Card(
      1,
      "What is Robbie's favorite animal",
      ["sea otter", "pug", "capybara"],
      "sea otter"
    );
    const card2 = new Card(
      14,
      "What organ is Khalid missing?",
      ["spleen", "appendix", "gallbladder"],
      "gallbladder"
    );
    const card3 = new Card(
      12,
      "What is Travis's middle name?",
      ["Lex", "William", "Fitzgerald"],
      "Fitzgerald"
    );
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    round.takeTurn("horse");
    round.takeTurn("gallbladder");
    round.takeTurn("Fitzgerald");

    expect(round.endRound(67)).to.equal(
      "** Round over! ** You answered 67 of the questions correctly!"
    );
  });
});
