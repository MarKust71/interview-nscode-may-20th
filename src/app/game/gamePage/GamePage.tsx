import './GamePage.css';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { GameState } from 'reducers/game/gameReducer.types';

export const GamePage = () => {
  const [cardFlip, setCardFlip] = useState<boolean[]>([]);

  const cards = useSelector<GameState, GameState['cards']>((state) => state.cards) || [];

  const handleClick = (index: number) => {
    const newCardFlip = [...cardFlip];
    newCardFlip[index] = !newCardFlip[index];
    setCardFlip([...newCardFlip]);
  };

  useEffect(() => {
    const flips = new Array(12);
    flips.fill(false);
    setCardFlip([...flips]);
  }, []);

  if (!cards) return null;

  return (
    <div className="wrapper inner-wrapper">
      <div className="table">
        {cards.length > 0 &&
          cards.map((card, index) => (
            <div key={`${card.value}-${index}`} className={`card-grid-box ${cardFlip[index] ? 'flip' : 'no-flip'}`}>
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
