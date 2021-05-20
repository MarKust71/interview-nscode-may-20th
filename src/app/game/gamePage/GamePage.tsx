import './GamePage.css';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { GameState } from 'reducers/game/gameReducer.types';

export const GamePage = () => {
  const [flip, setFlip] = useState(false);

  const cards = useSelector<GameState, GameState['cards']>((state) => state.cards) || [];

  useEffect(() => {
    setFlip(false);
  }, []);

  if (!cards) return null;

  return (
    <div className="wrapper inner-wrapper" onClick={() => setFlip((prevState) => !prevState)}>
      <div className="table">
        {cards.length > 0 &&
          cards.map((card, index) => (
            <div key={`${card.value}-${index}`} className={`card-grid-box ${flip && index === 5 ? 'flip' : ''}`}>
              <div
                style={{
                  backgroundImage: `url('${card.images.png}')`,
                }}
                className="card-box"
              />
              <div className="card-box-back" />
            </div>
          ))}
      </div>
    </div>
  );
};
