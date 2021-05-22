import './Game.css';
import { WelcomePage } from 'app/game/welcomePage/WelcomePage';
import { PageIndicator } from 'ui/pageIndicator/PageIndicator';
import { useSelector } from 'react-redux';
import { GameState } from 'reducers/game/gameReducer.types';
import { GamePage } from 'app/game/gamePage/GamePage';
import { ScorePage } from 'app/game/scorePage/ScorePage';

export const Game = () => {
  const activePage = useSelector<GameState, GameState['activePage']>((state) => state.activePage);

  return (
    <div className="container">
      {activePage === 1 && <WelcomePage />}
      {activePage === 2 && <GamePage />}
      {activePage === 3 && <ScorePage />}
      <div className="bottom-box">
        <PageIndicator />
      </div>
    </div>
  );
};
