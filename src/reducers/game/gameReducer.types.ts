import { Card } from 'app/game/gamePage/GamePage.types';

export type GameState = {
  activePage?: number;
  numberOfPages?: number;
  playerName?: string;
  deck?: string;
  cards?: Card[];
  flips?: boolean[];
};

export type GameAction = {
  type: GameActionType;
  payload: GameState;
};

export enum GameActionType {
  CHOOSE_PAGE = 'CHOOSE_PAGE',
  UPDATE_PLAYER_NAME = 'UPDATE_NAME',
  SET_DECK = 'SET_DECK',
  DEAL_CARDS = 'DEAL_CARDS',
  UPDATE_FLIPS = 'UPDATE_FLIPS',
}
