import React, { useState } from 'react';
import './App.css';
import RollDice from './components/RollDice';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

// Add all solid icons to the library
library.add(fas);

function App() {
  const [started, setStarted] = useState(false);

  return (
    <div className="App">
      {!started ? (
        <div className="Welcome">
          <h1 className="App-title">🎲 Welcome to DiceMaster 🎲</h1>
          <p className="App-tagline">Test your luck by rolling magical dice!</p>
          <button className="StartButton" onClick={() => setStarted(true)}>
            Start Rolling
          </button>
        </div>
      ) : (
        <div className="GameArea">
          <h2 className="GameHeader">🎯 Roll the Dice</h2>
          <RollDice />
        </div>
      )}
    </div>
  );
}

export default App;
