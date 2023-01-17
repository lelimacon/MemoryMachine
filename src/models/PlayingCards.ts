
export type Card = {
  type: Type,
  suit: Suit,
  index: number,
}

export enum Type {
  Classic,
  Tarot,
}

export enum Suit {
  Clubs,
  Spades,
  Hearts,
  Diamonds,
  Trumps,
}
