import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//
import logger from 'redux-logger';
//
import { Hand } from '../types/hand';
import rootReducer from '../reducers/rootReducer';

export interface Action {
  type: string;
  payload?: any;
}

export interface GameState {
  active: boolean;
  activeRound: boolean;
  deckId: string;
}
export interface PlayerState {
  player: Hand;
  house: Hand;
  winner: string;
}

export interface State {
  game: GameState
  players: PlayerState
}

export default function configureStore() {
  return createStore(
   rootReducer,
   {},
    applyMiddleware(thunk, logger),
  );
};
