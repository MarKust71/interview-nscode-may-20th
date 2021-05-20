import { GameAction, GameActionType, GameState } from './gameReducer.types';

const initialState: GameState = {
  activePage: 1,
  numberOfPages: 3,
  playerName: '',
};
export const gameReducer = (state = initialState, action: GameAction) => {
  switch (action.type) {
    case GameActionType.CHOOSE_PAGE:
      return { ...state, activePage: action.payload.activePage };

    case GameActionType.UPDATE_PLAYER_NAME:
      return { ...state, playerName: action.payload.playerName };

    default:
      return state;
  }
};
