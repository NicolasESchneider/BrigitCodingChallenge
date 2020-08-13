import { START_GAME, END_GAME, END_ROUND } from '../actions/gameActions';
import { GameState, Action } from '../store/store';

const initialState: GameState = {
  active: false,
  activeRound: false,
  deckId: '',
};
export default (state: GameState = initialState, { type, payload }: Action ) => {
  switch (type) {
    case START_GAME:
      const { deckId } = payload;
      return { 
        deckId,
        active: true,
        activeRound: true,
      };
    case END_ROUND:
      const newState = { ...state, activeRound: false };
      return newState;
    case END_GAME:
      return initialState;
    default:
      return state;
  }
}