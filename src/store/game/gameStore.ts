import { createStore } from 'redux';
import { gameReducer } from 'reducers/game/gameReducer';

export const gameStore = createStore(gameReducer);
