import { Card } from 'app/game/gamePage/GamePage.types';

export const shuffleArray = (cards: Card[]) => {
  if (cards.length < 1) {
    console.log('no cards shuffled');
    return;
  }
  for (let i = cards.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
};
