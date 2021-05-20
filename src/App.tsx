import React from 'react';
import { Provider } from 'react-redux';

import { Root } from 'app/Root';
import { Game } from 'app/game/Game';
import { gameStore } from 'store/game/gameStore';

function App() {
  return (
    <Provider store={gameStore}>
      <Root>
        {/*<Demo />*/}

        <Game />
      </Root>
    </Provider>
  );
}

export default App;
