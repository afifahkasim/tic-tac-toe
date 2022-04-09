import React from 'react';
import Board from './components/Board';

function App() {
  return (
    <div className="App">
      <h1 className="header">
        TIC TAC TOE
      </h1>
      <div className="board-row">
        <h2 className="sub-header">
          Player 1: X <br />
          Player 2: O
        </h2>
      </div>
      <Board />
    </div>
  );
}

export default App;
