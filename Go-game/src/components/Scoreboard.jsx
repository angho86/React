import React from "react";
import { calculateScore } from "./GameLogic";
import { calculateTerritory } from "./CalculateTerritory.jsx";

const Scoreboard = ({ board }) => {
    const { black, white } = calculateScore(board);
    const { black: blackTerritory, white: whiteTerritory } = calculateTerritory(board);

    return (
        <div
            style = {{
                margin: "20px 0",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                backgroundCOlor: "#f9f9f9",
                display: "flex",
                justifyContent: "space-around",
            }}
            >
                <div style ={{ color: "black "}}>
                    <strong>Juodieji: </strong> {black}
                </div>

                <div style = {{ color: "white", backgroundColor: "black", padding: "5px", borderRadius: "4px"}}>
                    <strong>Balti: </strong> {black} (akmenys) + {blackTerritory} (teritorija)
                </div>
                <div style={{ color: "white", backgroundColor: "black", padding: "5px", borderRadius: "4px" }}>
        <strong>Balti:</strong> {white} (akmenys) + {whiteTerritory} (teritorija)
      </div>
                </div>
    );
};

export default Scoreboard;