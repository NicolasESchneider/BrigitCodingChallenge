

// card has an image, 
// card has a numerical value

export type CardDataVal =
  'ACE' | 'KING' | 'QUEEN' |
  'JACK' |'10' | '9' |
  '8' | '7' | '6' |
  '5' | '4' | '3' |
  '2'
const FACE_CARDS = [
  'KING',
  'QUEEN',
  'JACK',
] as CardDataVal[];

export interface CardData {
  image: string;
  value: CardDataVal;
  suit: string;
  code: string;
}

export class Card {
  private _data: CardData;
  imageUrl: string;
  value: CardDataVal;
  code: string;

  constructor(data: CardData) {
    this._data = data;
    this.imageUrl = this._data.image;
    this.value = this._data.value;
    this.code = this._data.code;
  }
  get score(): number {
    if (FACE_CARDS.includes(this.value)) {
      return 10
    }
    return Number(this.value);
  }
}