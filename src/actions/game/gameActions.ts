import { GameAction, GameActionType } from 'reducers/game/gameReducer.types';

export const chosePage = (page: number): GameAction => ({
  type: GameActionType.CHOOSE_PAGE,
  payload: { activePage: page },
});

export const updatePlayerName = (name: string): GameAction => ({
  type: GameActionType.UPDATE_PLAYER_NAME,
  payload: { playerName: name },
});
