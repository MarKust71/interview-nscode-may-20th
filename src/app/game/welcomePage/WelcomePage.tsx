import './WelcomePage.css';
import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GameState } from 'reducers/game/gameReducer.types';
import { chosePage, dealCards, setDeck, updatePlayerName } from 'actions/game/gameActions';
import { shuffleArray } from 'helpers/shuffle';
import { fetchDeck } from 'providers/game/fetchDeck';
import { fetchCards } from 'providers/game/fetchCards';

export const WelcomePage = () => {
  const dispatch = useDispatch();
  const playerName = useSelector<GameState, GameState['playerName']>((state) => state.playerName) || '';
  const activePage = useSelector<GameState, GameState['activePage']>((state) => state.activePage) || 0;

  const deck = useSelector<GameState, GameState['deck']>((state) => state.deck) || '';

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    dispatch(updatePlayerName(target.value));
  };

  const handleClick = async () => {
    if (!deck) {
      try {
        const deck = await fetchDeck('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
        dispatch(setDeck(deck));

        const cards = await fetchCards(`https://deckofcardsapi.com/api/deck/${deck}/draw/?count=6`);
        const cardsToShuffle = [...cards, ...cards];
        shuffleArray(cardsToShuffle);
        dispatch(dealCards(cardsToShuffle));
      } catch (error) {
        console.log(error.message);
      }
    }
    dispatch(chosePage(activePage + 1));
  };

  return (
    <div className="wrapper">
      <header>
        <h1>React Redux Memory Game</h1>
        <h4>Just memorize position of cards and remove every pair</h4>
      </header>
      <input
        type="text"
        className="form-control"
        placeholder="input your name"
        value={playerName}
        onChange={handleChange}
      />
      <button className="btn btn-info" onClick={handleClick}>
        LET'S PLAY
      </button>
    </div>
  );
};
