import { connect } from 'react-redux';
import Game from './game';
import { startGameAction, endGameAction } from '../actions/gameActions';
import { dealAction } from '../actions/playerActions';
import { State } from '../store/store';


// map state
const msp = ({ game, players }: State) => ({
  active: game.active,
  deckId: game.deckId,
  activeRound: game.activeRound,
  winner: players.winner,
});

// map dispatch
const mdp = (dispatch: any) => ({
  startGame: () => dispatch(startGameAction()),
  endGame: () => dispatch(endGameAction()),
  dealNewHand: (deckId: string) => dispatch(dealAction(deckId)),
});

export default connect(msp, mdp)(Game);