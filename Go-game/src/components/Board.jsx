import React from "react";
import Intersection from "./Intersection.jsx";

const Board = ({size, board, onPlaceStone}) => {
    return (
        <div style = {{
            display: "grid",
            gridTemplateColumns: `repeat(${size}, 1fr)`,
            gap: "1px",
            backgroundColor: "#333",

        }}
        >

{board.map((row, y) =>
        row.map((stone, x) => (
          <Intersection
            key={`${x}-${y}`}
            stone={stone}
            onClick={() => onPlaceStone(x, y)}
          />
        ))
      )}

      </div>
    );
};

export default Board;