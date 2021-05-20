import './Game.css';
import { useEffect, useState } from 'react';
import { WelcomePage } from './welcomePage/WelcomePage';
import { PageIndicator } from 'ui/pageIndicator/PageIndicator';

export const Game = () => {
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    setActivePage(1);
  }, []);

  return (
    <div className="container">
      {activePage === 1 && <WelcomePage />}
      <div className="bottom-box">
        <PageIndicator />
      </div>
    </div>
  );
};
