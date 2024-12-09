import React from "react";
import { calculateScore } from "./GameLogic";

const Scoreboard = ({ board }) => {
    const { black, white } = calculateScore(board);

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
                    <strong>Balti: </strong> {white}
                </div>
                </div>
    );
};

export default Scoreboard;