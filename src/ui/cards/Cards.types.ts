import { Card } from 'app/game/gamePage/GamePage.types';

export type CardsProps = {
  cards: Card[];
  flips: boolean[];
  onClick: (index: number) => void;
};
