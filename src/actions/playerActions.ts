// player can stand, or hit
// standing is a game action

// hitting is a player action with api call
import { Dispatch } from 'redux';
import { Action } from '../store/store';
import * as APICardUtils from '../utils/deckUtils';
import { Card, CardData } from '../types/card';
import { Hand } from '../types/hand';

export const HIT_ME = 'HIT_ME';
export const DEAL_ME_IN = 'DEAL_ME_IN';

const hitMe = (card: Card): Action => ({
  type: HIT_ME,
  payload: {
    card
  }
});

const dealMeIn = (player: Hand, house: Hand): Action => ({
  type: DEAL_ME_IN,
  payload: {
    player,
    house,
  }
});

export const hitMeAction = (deckId: string) => (dispatch: Dispatch) => {
  return APICardUtils.hit(deckId)
    .then(res => res.json())
    .then((data: any) => {
      const { cards } = data;
      const card = new Card(cards[0] as CardData);
      return dispatch(hitMe(card));
    });
};
export const dealAction = (deckId: string) => (dispatch: Dispatch) => {
  return APICardUtils.drawInitialHands(deckId)
    .then(res => res.json())
    .then((data: any) => {
      const { cards } = data;
      // instantiate brand new hands for player and the house with the drawn cards
      const houseHand = new Hand(cards.slice(0,2).map((cardDat: CardData) => (
        new Card(cardDat)))
      );
      const playerHand = new Hand(cards.slice(2).map((cardDat: CardData) => (
        new Card(cardDat)))
      )
      dispatch(dealMeIn(playerHand, houseHand));
    })
}