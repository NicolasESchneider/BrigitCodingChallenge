export const getNewDeck = () => {
  return fetch('https://deckofcardsapi.com/api/deck/new/');
}

export const shuffleDeck = (deckId: string) => {
  return fetch(`https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`);
}

export const hit = (deckId: string) => {
  return fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
}

export const drawInitialHands = (deckId: string) => {
  return fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=4`)
}