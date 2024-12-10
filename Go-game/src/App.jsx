import React, { useState } from 'react';
import { useEffect } from 'react';
import Board from './components/Board';
import Scoreboard from './components/Scoreboard.jsx';
import { isValidMove, placeStone } from "./components/GameLogic.jsx";
import { findGroup, hasLiberty, removeGroup, isInsideBoard } from './components/GameLogic.jsx';
import { aiMove } from './components/SimpleAi.jsx';


// <button onClick={()=>{setCount(count +1)}}>Didinti {count}</button>

const createEmptyBoard = (size) => {
  return Array.from({ length: size }, () => Array(size).fill(null));
}


function App() {
  const [size] = useState(9); // lenteles dydis (19x19)
  const [board, setBoard] = useState(createEmptyBoard(size));
  const [currentPlayer, setCurrentPlayer] = useState("black");

  const handlePlaceStone = (x, y) => {
    if (!isValidMove(board, x, y)) return; // negalima uzimti uzimto tasko

    let newBoard = placeStone(board, x, y, currentPlayer); // padedamas akmuo ant lentos

    // Tikriname kiekvieną priešininko akmenį šalia padėto akmens
  const directions = [
    [0, 1], [1, 0], [0, -1], [-1, 0],
  ];

  for (const [dx, dy] of directions) {
    const nx = x + dx;
    const ny = y + dy;

    // Tikriname, ar gretima grupė priklauso priešininkui ir ar yra apsupta
    if (isInsideBoard(newBoard, nx, ny) &&
      newBoard[ny][nx] !== null &&
      newBoard[ny][nx] !== currentPlayer
    ) {
      const group = findGroup(newBoard, nx, ny);
      const groupHasLiberty = hasLiberty(newBoard, group);
      let updatedBoard = newBoard;
      // Jei grupė neturi laisvės, pašaliname ją
      if (!groupHasLiberty) {
        console.log("Grupė neturi laisvės, pašaliname ją:", group);
        updatedBoard = removeGroup(newBoard, group);
        setBoard(updatedBoard);
      } 
    }
  }

    setBoard(newBoard);
    setCurrentPlayer(currentPlayer === "black" ? "white" : "black");
  };

  const aiTurn = () => {
    const move = aiMove(board, currentPlayer);
  
    if (move) {
      const newBoard = board.map((row, rowIndex) =>
        row.map((cell, colIndex) =>
          rowIndex === move.y && colIndex === move.x ? currentPlayer : cell
        )
      );
      setBoard(newBoard);
      setCurrentPlayer(currentPlayer === "black" ? "white" : "black");
    } else {
      console.log(`${currentPlayer} AI skips its turn.`);
      setCurrentPlayer(currentPlayer === "black" ? "white" : "black");
    }
  };

useEffect(() => {
  if(currentPlayer === "white") {
    aiTurn();
  }
}, [currentPlayer]);


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
