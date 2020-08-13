import React from 'react';
import './App.css';
import Game from './components/gameContainer';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Im gonna build my own casino, with blackjack and react</h2>
        <Game />
      </header>
    </div>
  );
}

export default App;
