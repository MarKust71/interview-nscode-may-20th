import './ScorePage.css';
import { useDispatch, useSelector } from 'react-redux';
import parse from 'html-react-parser';
import { GameState } from 'reducers/game/gameReducer.types';
import { dealCards, restartGame, timerOn } from 'actions/game/gameActions';
import { fetchCards } from 'providers/game/fetchCards';

export const ScorePage = () => {
  const dispatch = useDispatch();
  const timerStart = useSelector<GameState, GameState['timerStart']>((state) => state.timerStart) || 0;
  const timerEnd = useSelector<GameState, GameState['timerEnd']>((state) => state.timerEnd) || 0;
  const clickCounter = useSelector<GameState, GameState['clickCounter']>((state) => state.clickCounter) || 0;
  const playerName = useSelector<GameState, GameState['playerName']>((state) => state.playerName) || '';
  const deck = useSelector<GameState, GameState['deck']>((state) => state.deck) || '';

  const handleClick = async () => {
    dispatch(restartGame());
    const cards = await fetchCards(`https://deckofcardsapi.com/api/deck/${deck}/draw/?count=6`);
    dispatch(dealCards([...cards]));
    dispatch(timerOn());
  };

  return (
    <div className="wrapper">
      <h4>Scoreboard</h4>
      {timerEnd ? (
        <>
          <br />
          <br />
          <h2>{`Well done, ${playerName}!`}</h2>
          <br />
          <div>{`You've completed the task in time`}</div>
          <div>{parse(`of <b>${(timerEnd - timerStart) / 1000} secs</b>`)}</div>
          <br />
          <div>{`performing only`}</div>
          <div>{parse(`<b>${clickCounter} clicks</b> (12 is the minimum)`)}</div>
          <br />
          <div>{`and now you may only`}</div>
          <br />
          <button className="btn btn-warning" onClick={handleClick}>
            play again!
          </button>
        </>
      ) : (
        <>
          <br />
          <br />
          <h2>Game is pending</h2>
        </>
      )}
    </div>
  );
};
