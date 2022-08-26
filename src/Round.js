var Turn = require("./Turn");
var Card = require("./Card");
class Round {
  constructor(deck) {
    this.round = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  takeTurn(guess) {
    const turn = new Turn(guess, this.round.deck[this.turns]);
    if (guess !== turn.card.correctAnswer) {
      this.incorrectGuesses.push(turn.card.id);
    }
    this.turns++;
    return turn.giveFeedback();
  }
  returnCurrentCard() {
    return this.round.deck[this.turns];
  }
  calculatePercentCorrect() {
    const correctGuesses = this.turns - this.incorrectGuesses.length;
    let percent = (correctGuesses / this.turns) * 100;
    return Math.round(percent);
  }
  endRound() {
    const percent = this.calculatePercentCorrect();
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
