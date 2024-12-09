export const isOccupied = (board, x, y) => {
    // tikriname ar taskas uzimtas

    return board[y][x] !== null;
};

export const isValidMove = (board, x, y) => {
    // tikriname, ar taskas neuzimtas (kolkas tik paprastas tikrinimas)

    return !isOccupied(board, x, y);
};

export const placeStone = (board, x, y, currentPlayer) => {
    // sukuriame nauja lenta su padetu akmeniu

    const newBoard = board.map((row, rowIndex) => 
    row.map((stone, colIndex) => 
    rowIndex === y  && colIndex === x ? currentPlayer : stone
    )
    );

    return newBoard;
};

export const calculateScore = (board) => {
    let blackScore = 0;
    let whiteScore = 0;

    board.forEach((row) => 
        row.forEach((stone) =>{
        if (stone === "black") blackScore++;
        if (stone === "white") whiteScore++;
    })
);

return { black: blackScore, white: whiteScore };
};



