export const aiMove = (board, currentPlayer) => {
    const size = board.length;

    const getNeighbors = (x, y) => {
        const directions = [
            [0,1], [1,0],[0,-1],[-1,0],
        ];

        return directions
                .map(([dx, dy]) =>({ x : x + dx, y: y + dy }))
                .filter(({ x, y }) => x >= 0 && x < size && y >= 0 && y < size);
    };

    const getValidMoves = () => {
        const validMoves = [];

        for (let y =0; y < size; y++){
            for (let x =0; x <size; x++){
                if(board[y][x] ===  null){
                    validMoves.push( { x, y});
                }
            }
        }

        return validMoves;
    }

    const validMoves = getValidMoves();

    if(validMoves.length === 0){
        return null; // ai praleidzia ejima
    }

    // rasti taska salia priesininko akmenu

    for (const move of validMoves){
        const neighbors = getNeighbors(move.x, move.y);
        if(neighbors.some(({ x, y }) => board[y][x] && board[y][x] !== currentPlayer)) {
            console.log(`AI (${currentPlayer}) strategically choose (${move.x}, ${move.y}).`);
            return move;
        }
    }

    // Jei nera strateginiu tasku, pasirinkti atsitiktinai

    const randomMove = validMoves[Math.floor(Math.random() * validMoves.length)];
    console.log(`AI (${currentPlayer}) choose random move at (${randomMove.x}, ${randomMove.y}).`);
    return randomMove;
}