class Deck {
  constructor(cardsArray) {
    this.deck = cardsArray;
  }
  countCards() {
    return this.deck.length;
  }
}
module.exports = Deck;
