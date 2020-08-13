import * as React from 'react';
import PlayerDisplay from './playerDisplays/playerContainer';
import HouseDisplay from './playerDisplays/houseContainer';

interface GameProps {
  active: boolean;
  deckId: string;
  startGame: () => any;
  endGame: () => any;
  dealNewHand: (deckId: string) => any;
  winner: string;
}

export default ({
  active,
  startGame,
  endGame,
  deckId,
  dealNewHand,
  winner,
}: GameProps): React.ReactElement => {
  const [hasDealt, toggleDealt] = React.useState(false);
  const handleInitialDeal = () => {
    toggleDealt(true);
    dealNewHand(deckId);
  }

  React.useEffect(() => {
    if (!active) {
      toggleDealt(false);
    };
  }, [active]);

  const renderWinner = (): null | React.ReactElement => {
    switch (winner) {
      case 'HOUSE':
        return (<h1>YOU LOSE</h1>)
      case 'PLAYER':
        return(<h1>YOU WIN</h1>)
      default:
        return null;
    }
  }
  if (!active) {
    return (
      <>
        <button onClick={ startGame }>
          Lets Play BlackJack!
        </button>
      </>
    )
  } 
  return (
    <div>
      { hasDealt && (
        <div className='player-container'>
          <HouseDisplay isHouse />
          <PlayerDisplay />
        </div>
      )}
      { renderWinner() }
      <div className='button-container'>
        { !hasDealt &&
          <button onClick={ handleInitialDeal }>
            Deal me in brother!
          </button>
        }
        <button onClick={ endGame }>
          End the game
        </button>
      </div>
    </div>
  ); 
}