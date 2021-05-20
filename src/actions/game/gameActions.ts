import { GameAction, GameActionType } from 'reducers/game/gameReducer.types';

export const chosePage = (page: number): GameAction => ({
  type: GameActionType.CHOOSE_PAGE,
  payload: page,
});
