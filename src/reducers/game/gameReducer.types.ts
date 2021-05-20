export type GameState = {
  activePage: number;
  numberOfPages: number;
  playerName: string;
};

export type GameAction = {
  type: GameActionType;
  payload: number;
};

export enum GameActionType {
  CHOOSE_PAGE = 'CHOOSE_PAGE',
}
