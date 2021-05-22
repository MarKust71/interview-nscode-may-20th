import { Card } from 'app/game/gamePage/GamePage.types';
import { Dispatch } from 'redux';

export type CheckTableParams = {
  dispatch: Dispatch;
  cards: Card[];
  flips: boolean[];
  cardsOnTable: number;
};
