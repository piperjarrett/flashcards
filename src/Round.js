var Turn = require("./Turn");
var Card = require("./Card");
class Round {
  constructor(deck) {
    this.round = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  takeTurn(guess, card) {
    const turn = new Turn(guess, card);
    this.turns++;
    if (guess !== turn.card.correctAnswer) {
      this.incorrectGuesses.push(turn.card.id);
    }
    return turn.giveFeedback();

    // return turn;
  }
  returnCurrentCard() {
    let currentCard = this.round.deck[0];
    if (this.turns === 1) {
      currentCard = this.round.deck[1];
    }
    if (this.turns === 2) {
      currentCard = this.round.deck[2];
    }
    return currentCard;
  }
  calculatePercentCorrect() {
    let correctGuesses = this.turns - this.incorrectGuesses;
    let percent = (correctGuesses / this.turns) * 100;
    percent = Math.round(percent);
    this.endRound(percent);
    return percent;
  }
  endRound(percent) {
    console.log(
      "** Round over! ** You answered " +
        percent +
        " of the questions correctly!"
    );
    return (
      "** Round over! ** You answered " +
      percent +
      " of the questions correctly!"
    );
  }
}

module.exports = Round;
