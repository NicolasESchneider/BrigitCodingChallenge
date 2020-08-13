import * as React from 'react';
import { Hand } from '../../types/hand';
// player has 2 actions
// // hit
// // stand
// cannot hit if bust
// cannot either post standing
interface PlayerProps {
  hand: Hand;
  isHouse?: boolean;
  deckId: string;
  stand?: () => any;
  hitMe?: (id: string) => any;
  activeRound?: boolean;
}
export default (props: PlayerProps): React.ReactElement => {
  const handDisplay = props.hand.cards.map((card) => {
    return (
      <div className='card-display' key={ card.code }>
        <img src={ card.imageUrl } alt={ card.code } />
      </div>
    )
  });

  const hit = () => {
    if (props.hitMe) {
      props.hitMe(props.deckId)
    }
  }
  return (
    <>
      { props.isHouse ? <p>{`The House: ${props.hand.handValue}`}</p> : <p>{`Your Hand: ${props.hand.handValue}`}</p>}
      <div className='player-hand-display'>
        { handDisplay }
      </div>
      { !props.isHouse && (
        <div className='button-container'>
          <button disabled={ !props.activeRound || props.hand.busted } onClick={ hit }>Hit</button>
          <button disabled={!props.activeRound} onClick={ props.stand }>Stand</button>
        </div>
      )}
    </>
  )
}