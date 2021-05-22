import { CheckTableParams } from './checkTable.types';
import { Card } from 'app/game/gamePage/GamePage.types';
import { chosePage, removeCard, timerOff, updateFlips } from 'actions/game/gameActions';

export const checkTable = ({ cards, dispatch, flips, cardsOnTable }: CheckTableParams): void => {
  const cardsSelected: Card[] = [];
  flips.map((flip, index) => {
    if (flip) cardsSelected.push(cards[index]);
    return null;
  });

  if (cardsSelected.length < 2) return;

  const newFlips = [...flips];
  newFlips.fill(false);
  if (cardsSelected[0].code === cardsSelected[1].code) {
    // two identical cards selected
    const indexes: number[] = [];
    flips.map((flip, index) => {
      if (flip) indexes.push(index);
      return null;
    });
    setTimeout(() => {
      dispatch(removeCard(indexes));
      dispatch(updateFlips([...newFlips]));
      if (cardsOnTable - indexes.length === 0) {
        dispatch(timerOff());
        dispatch(chosePage(3));
      }
    }, 500);
  } else {
    // flip all cards back
    setTimeout(() => dispatch(updateFlips([...newFlips])), 1000);
  }
};
