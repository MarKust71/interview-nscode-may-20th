import React from 'react';
import { CardsProps } from './Cards.types';

export const Cards: React.FC<CardsProps> = ({ cards, flips, onClick }) => {
  return (
    <>
      {cards.map((card, index) => {
        return (
          <div key={`${card.value}-${index}`} className={`card-grid-box ${flips[index] ? 'flip' : 'no-flip'}`}>
            {card.code && (
              <>
                <div
                  style={{
                    backgroundImage: `url('${card.images.png}')`,
                  }}
                  className="card-box flip"
                  onClick={() => onClick(index)}
                />
                <div className="card-box-back no-flip" onClick={() => onClick(index)} />
              </>
            )}
          </div>
        );
      })}
    </>
  );
};
