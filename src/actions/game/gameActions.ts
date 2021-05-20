import { GameAction, GameActionType } from 'reducers/game/gameReducer.types';
import { Card } from 'app/game/gamePage/GamePage.types';

export const chosePage = (page: number): GameAction => ({
  type: GameActionType.CHOOSE_PAGE,
  payload: { activePage: page },
});

export const updatePlayerName = (name: string): GameAction => ({
  type: GameActionType.UPDATE_PLAYER_NAME,
  payload: { playerName: name },
});

export const setDeck = (id: string): GameAction => ({
  type: GameActionType.SET_DECK,
  payload: { deck: id },
});

export const dealCards = (cards: Card[]): GameAction => ({
  type: GameActionType.DEAL_CARDS,
  payload: { cards },
});

export const updateFlips = (flips: boolean[]): GameAction => ({
  type: GameActionType.UPDATE_FLIPS,
  payload: { flips },
});
