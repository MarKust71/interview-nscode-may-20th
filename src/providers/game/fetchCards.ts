import { shuffleArray } from 'helpers/shuffle';
import { Card } from 'app/game/gamePage/GamePage.types';

export const fetchCards = async (url: string) => {
  let response;
  response = await fetch(url);
  if (!response.ok) {
    if (response.status === 500) {
      console.log('fetch cards retry...');
      await setTimeout(async () => {
        response = await fetch(url);
      }, 1000);
    } else {
      console.log(response);
      return [];
    }
  }
  const json = await response.json();

  if (!json.success) {
    console.log(json);
    return [];
  }

  const duplicates: Card[] = json.cards.map((item: Card) => ({ ...item }));
  const cardsToShuffle = [...json.cards, ...duplicates];
  shuffleArray(cardsToShuffle);

  return cardsToShuffle;
};
