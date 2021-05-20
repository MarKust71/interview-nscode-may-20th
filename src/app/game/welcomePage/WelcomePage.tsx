import './WelcomePage.css';
import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GameState } from 'reducers/game/gameReducer.types';
import { chosePage, updatePlayerName } from 'actions/game/gameActions';

export const WelcomePage = () => {
  const dispatch = useDispatch();
  const playerName = useSelector<GameState, GameState['playerName']>((state) => state.playerName) || '';
  const activePage = useSelector<GameState, GameState['activePage']>((state) => state.activePage) || 0;

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    dispatch(updatePlayerName(target.value));
  };

  const handleClick = () => {
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
