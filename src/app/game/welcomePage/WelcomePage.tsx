import './WelcomePage.css';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GameState } from 'reducers/game/gameReducer.types';
import {
  chosePage,
  dealCards,
  restartGame,
  setDeck,
  timerOn,
  updateFlips,
  updatePlayerName,
} from 'actions/game/gameActions';
import { fetchDeck } from 'providers/game/fetchDeck';
import { fetchCards } from 'providers/game/fetchCards';

export const WelcomePage = () => {
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const playerName = useSelector<GameState, GameState['playerName']>((state) => state.playerName) || '';
  const activePage = useSelector<GameState, GameState['activePage']>((state) => state.activePage) || 0;
  const deck = useSelector<GameState, GameState['deck']>((state) => state.deck) || '';

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setError(false);
    dispatch(updatePlayerName(target.value));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!playerName) {
      setError(true);
      return;
    }

    dispatch(restartGame());

    if (!deck) {
      try {
        const deck = await fetchDeck('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
        dispatch(setDeck(deck));

        const cards = await fetchCards(`https://deckofcardsapi.com/api/deck/${deck}/draw/?count=6`);
        dispatch(dealCards([...cards]));
      } catch (error) {
        console.log(error.message);
        return;
      }
    } else {
      try {
        const cards = await fetchCards(`https://deckofcardsapi.com/api/deck/${deck}/draw/?count=6`);
        dispatch(dealCards([...cards]));
        const flips = new Array(12);
        flips.fill(false);
        dispatch(updateFlips([...flips]));
      } catch (error) {
        console.log(error.message);
        return;
      }
    }

    dispatch(timerOn());

    dispatch(chosePage(activePage + 1));
  };

  return (
    <div className="wrapper">
      <header>
        <h1>React Redux Memory Game</h1>
        <h4>Just memorize position of cards and remove every pair</h4>
      </header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className={`form-control ${error ? 'input-error' : ''}`}
          placeholder="input your name"
          value={playerName}
          onChange={handleChange}
        />
        <br />
        <button type="submit" className="btn btn-info">
          LET'S PLAY
        </button>
      </form>
      {error && <div className="error">I can't believe you got no name! Try again.</div>}
    </div>
  );
};
