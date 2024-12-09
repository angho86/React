import React, { useState } from 'react';
import Board from './components/board';
import Scoreboard from './components/Scoreboard.jsx';
import { isValidMove, placeStone } from "./components/GameLogic.jsx";


// <button onClick={()=>{setCount(count +1)}}>Didinti {count}</button>

const createEmptyBoard = (size) => {
  return Array.from({ length: size }, () => Array(size).fill(null));
}


function App() {
  const [size] = useState(19); // lenteles dydis (19x19)
  const [board, setBoard] = useState(createEmptyBoard(size));
  const [currentPlayer, setCurrentPlayer] = useState("black");

  const handlePlaceStone = (x, y) => {
    if (!isValidMove(board, x, y)) return; // negalima uzimti uzimto tasko

    const newBoard = placeStone(board, x, y, currentPlayer);

    setBoard(newBoard);
    setCurrentPlayer(currentPlayer === "black" ? "white" : "black");
  };

  return (
    <div>
      <h1>Go Zaidimas</h1>
      <Scoreboard board={board} />
      <Board size={size} board={board} onPlaceStone={handlePlaceStone} />
      <p>Einantis zaidejas: <span style ={{ color: currentPlayer }}>{currentPlayer}</span></p>
    </div>
  )
}

export default App
