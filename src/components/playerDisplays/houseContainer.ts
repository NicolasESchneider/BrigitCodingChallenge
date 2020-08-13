import { connect } from 'react-redux';
import Player from './playerDisplay';
import { State } from '../../store/store';

const msp = ({ players, game }: State) => ({
  hand: players.house,
  deckId: game.deckId,
});

export default connect(msp, {})(Player);