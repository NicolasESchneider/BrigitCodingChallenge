import { HIT_ME, DEAL_ME_IN } from '../actions/playerActions';
import { END_ROUND, END_GAME } from '../actions/gameActions';
import { PlayerState, Action } from '../store/store';
import { Hand } from '../types/hand';

const determineWinner = (playerHand: Hand, house: Hand) => {
  if (playerHand.handValue <= house.handValue || playerHand.busted) {
    return 'HOUSE';
  } else {
    return 'PLAYER';
  }
}


const initialState: PlayerState = {
  player: new Hand([]),
  house: new Hand([]),
  winner: '',
}
export default (state: PlayerState = initialState, { type, payload }: Action) => {
  switch (type) {
    case HIT_ME:
      const oldPlayerCards = [...state.player.cards]
      const newPlayerCards = [...oldPlayerCards, payload.card]
      const newState = { ...state, player: new Hand(newPlayerCards) };
      return newState;
    case DEAL_ME_IN:
      const { player, house } = payload;
      return { winner: '', player, house };
    case END_ROUND:
      const newWinner = determineWinner(state.player, state.house);
      return { ...state, winner: newWinner };
    case END_GAME:
      return initialState;
    default:
      return state;
  }
}