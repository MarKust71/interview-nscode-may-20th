import { GameAction, GameActionType, GameState } from './gameReducer.types';

const initialState: GameState = {
  activePage: 1,
  numberOfPages: 3,
  playerName: '',
  deck: '',
  flips: [],
  cardIndexes: [],
  cardsOnTable: 0,
  clickCounter: 0,
  timerEnd: 0,
  timerStart: 0,
};

export const gameReducer = (state = initialState, action: GameAction) => {
  const { cards } = state;

  switch (action.type) {
    case GameActionType.CHOOSE_PAGE:
      return { ...state, activePage: action.payload.activePage };

    case GameActionType.UPDATE_PLAYER_NAME:
      return { ...state, playerName: action.payload.playerName };

    case GameActionType.SET_DECK:
      return { ...state, deck: action.payload.deck };

    case GameActionType.DEAL_CARDS:
      return {
        ...state,
        cards: action.payload.cards,
        cardsOnTable: action.payload.cards?.filter((card) => !!card.code).length,
      };

    case GameActionType.UPDATE_FLIPS:
      return { ...state, flips: action.payload.flips };

    case GameActionType.REMOVE_CARD:
      const indexes = action.payload.cardIndexes;

      if (!cards || cards?.length === 0 || !indexes || indexes?.length === 0) return state;

      const newCards = [...cards];
      newCards.map((card, index) => {
        if (indexes?.includes(index)) newCards[index].code = '';
        return null;
      });

      return {
        ...state,
        cardIndex: action.payload.cardIndexes,
        cards: [...newCards],
        cardsOnTable: newCards.filter((card) => !!card.code).length,
      };

    case GameActionType.TIMER_ON:
      const timerStart = Date.now();
      return { ...state, timerStart };

    case GameActionType.TIMER_OFF:
      const timerEnd = Date.now();
      return { ...state, timerEnd };

    case GameActionType.COUNTER_INCREASE:
      const clickCounter = state.clickCounter || 0;
      return { ...state, clickCounter: clickCounter + 1 };

    case GameActionType.RESTART_GAME:
      console.log('restartgame');
      const newState = {
        ...state,
        activePage: 2,
        cards: [],
        clickCounter: 0,
        timerStart: 0,
        timerEnd: 0,
      };

      return { ...state, ...newState };

    default:
      return state;
  }
};
