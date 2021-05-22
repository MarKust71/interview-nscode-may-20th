import './GamePage.css';
import { useDispatch, useSelector } from 'react-redux';
import { GameState } from 'reducers/game/gameReducer.types';
import { counterIncrease, updateFlips } from 'actions/game/gameActions';
import { Cards } from 'ui/cards/Cards';
import { checkTable } from 'helpers/checkTable';

export const GamePage = () => {
  const dispatch = useDispatch();
  const cards = useSelector<GameState, GameState['cards']>((state) => state.cards) || [];
  const flips = useSelector<GameState, GameState['flips']>((state) => state.flips) || [];
  const cardsOnTable = useSelector<GameState, GameState['cardsOnTable']>((state) => state.cardsOnTable) || 0;

  const handleClick = (index: number) => {
    dispatch(counterIncrease());
    const newCardFlip = [...flips];
    newCardFlip[index] = !newCardFlip[index];
    dispatch(updateFlips([...newCardFlip]));
    checkTable({ cards, flips: [...newCardFlip], dispatch, cardsOnTable });
  };

  return (
    <div className="wrapper inner-wrapper">
      <div className="table">
        <Cards cards={cards} flips={flips} onClick={handleClick} />
      </div>
    </div>
  );
};
