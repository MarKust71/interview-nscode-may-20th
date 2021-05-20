import { GameAction, GameActionType, GameState } from './gameReducer.types';

const initialState: GameState = {
  activePage: 1,
  numberOfPages: 3,
  playerName: '',
  deck: '',
  flips: [],
};

export const gameReducer = (state = initialState, action: GameAction) => {
  switch (action.type) {
    case GameActionType.CHOOSE_PAGE:
      return { ...state, activePage: action.payload.activePage };

    case GameActionType.UPDATE_PLAYER_NAME:
      return { ...state, playerName: action.payload.playerName };

    case GameActionType.SET_DECK:
      return { ...state, deck: action.payload.deck };

    case GameActionType.DEAL_CARDS:
      return { ...state, cards: action.payload.cards };

    case GameActionType.UPDATE_FLIPS:
      return { ...state, flips: action.payload.flips };

    default:
      return state;
  }
};
