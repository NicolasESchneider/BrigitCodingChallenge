// hand stores an array of cards
// get Hand Value should call.value on each card

import { Card } from '../types/card';


export class Hand {
  cards: Card[]

  constructor(initialHand: Card[]) {
    this.cards = initialHand
  }

  get handValue(): number {
    const sorted = [...this.cards].sort((cardA, cardB) => {
      const cardAVal = cardA.value;
      const cardBVal = cardB.value;
      if (cardAVal === 'ACE') return 1;
      if (cardBVal === 'ACE') return -1;
      return 0
    })

    // always put aces in the rear of the cards;
    // if you have more than 1 ace, only one can ever be worth 11 points
    // therefore, if we sort cards by putting aces in the back
    // only the last ace can ever be worth 11
    // it can only be worth 11 points if the total value sans that ace is <= 10

    return sorted.reduce((acc, card, idx) => {
      if (card.value === 'ACE') {
        if (idx === sorted.length - 1 && acc <= 10) {
          return acc + 11
        }
        return acc + 1
      }
      return acc + card.score
    }, 0);
  }

  get busted(): boolean {
    return this.handValue > 21
  }

}