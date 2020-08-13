// game state is either a boolean active or inactive
// game should hold a deckId that will be used for further apiCalls
import { Dispatch } from 'redux';
import { Action } from '../store/store';
import * as APICardUtils from '../utils/deckUtils';

export const START_GAME = 'START_GAME';
export const END_GAME = 'END_GAME';
export const END_ROUND = 'END_ROUND'
//type out all actions if time

const startGame = (deckId: string): Action => ({
  type: START_GAME,
  payload: {
    deckId: deckId,
    active: true,
  }
});

const endGame = { type: END_GAME } as Action
const endRound = { type: END_ROUND } as Action
//
export const startGameAction = () => (dispatch: Dispatch) => {
  return APICardUtils.getNewDeck()
  .then(res => res.json())
  .then(({ deck_id }) => {
    return APICardUtils.shuffleDeck(deck_id)
    .then(_ => dispatch(startGame(deck_id)))
  })
};

export const endRoundAction = () => (dispatch: Dispatch) => (dispatch(endRound));
export const endGameAction = () => (dispatch: Dispatch) => (dispatch(endGame));