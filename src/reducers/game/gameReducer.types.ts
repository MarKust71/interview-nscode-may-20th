export type GameState = {
  activePage?: number;
  numberOfPages?: number;
  playerName?: string;
};

export type GameAction = {
  type: GameActionType;
  payload: GameState;
};

export enum GameActionType {
  CHOOSE_PAGE = 'CHOOSE_PAGE',
  UPDATE_PLAYER_NAME = 'UPDATE_NAME',
}
