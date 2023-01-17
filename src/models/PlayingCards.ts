
export type Card = {
  type: Type,
  suit: Suit,
  index: number,
}

export enum Type {
  classic = "classic",
  tarot = "tarot",
}

export enum Suit {
  clubs = "clubs",
  spades = "spades",
  hearts = "hearts",
  diamonds = "diamonds",
  trumps = "trumps",
}
