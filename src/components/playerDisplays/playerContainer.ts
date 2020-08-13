import { connect } from 'react-redux';
import Player from './playerDisplay';
import { hitMeAction } from '../../actions/playerActions';
import { endRoundAction } from '../../actions/gameActions';
import { State } from '../../store/store';


const msp = ({ players, game }: State) => ({
  hand: players.player,
  deckId: game.deckId,
  activeRound: game.activeRound,
});

const mdp = (dispatch: any) => ({
  hitMe: (deckId: string) => dispatch(hitMeAction(deckId)),
  stand: () => dispatch(endRoundAction())
});

export default connect(msp, mdp)(Player);