import './GamePage.css';
import { useDispatch, useSelector } from 'react-redux';
import { GameState } from 'reducers/game/gameReducer.types';
import { updateFlips } from 'actions/game/gameActions';

export const GamePage = () => {
  const dispatch = useDispatch();
  const cards = useSelector<GameState, GameState['cards']>((state) => state.cards) || [];
  const flips = useSelector<GameState, GameState['flips']>((state) => state.flips) || [];

  const handleClick = (index: number) => {
    const newCardFlip = [...flips];
    newCardFlip[index] = !newCardFlip[index];
    dispatch(updateFlips([...newCardFlip]));
  };

  if (!cards) return null;

  return (
    <div className="wrapper inner-wrapper">
      <div className="table">
        {cards.length > 0 &&
          cards.map((card, index) => (
            <div key={`${card.value}-${index}`} className={`card-grid-box ${flips[index] ? 'flip' : 'no-flip'}`}>
              <div
                style={{
                  backgroundImage: `url('${card.images.png}')`,
                }}
                className="card-box flip"
                onClick={() => handleClick(index)}
              />
              <div className="card-box-back no-flip" onClick={() => handleClick(index)} />
            </div>
          ))}
      </div>
    </div>
  );
};
