export const calculateTerritory = (board) => {
    const size = board.length;

    const visited = Array.from({ length: size}, () => 
        Array(size).fill(false));

    let blackTerritory = 0;
    let whiteTerritory = 0;

    const isInsideBoard = (x, y) => x >= 0 && x < size && y >= 0 && y < size;

    const floodFill = (x, y) => {
        if(!isInsideBoard(x, y) || visited[y][x] || board[y][x] !== null) return { territory: 0, borders: new Set() };

        visited[y][x] = true; // zymime, kad taskas aplankytas
        let territory = 1; // vienas tuscias taskas
        let borders = new Set();

        // gretimu tasku tikrinimas
        const directions = [
            [0,1], [1, 0], [0, -1], [-1, 0],
        ];

        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;

            if (isInsideBoard(nx, ny)) {
                if(board[ny][nx] === null){
                    const result = floodFill(nx, ny);
                    territory += result.territory;
                    for (const color of result.borders) borders.add(color);
                } 
                else if (board[ny, nx]) {
                    borders.add(board[ny][nx]); // gretimu akmenu spalvos pridejimas
                }
            }
        }

        return { territory, borders };
    };

    // einama per kiekviena taska lentoje

    for (let y = 0; y < size; y++){
        for (let x = 0; x < size; x++) {

            if (!visited[y][x] && board[y][x] === null) {
                const { territory, borders } = floodFill(x, y);

                // jei teritorija apsupta tik viena spalva, ji priklauso tam zaidejui

                if (borders.size === 1){
                    const[color] = borders;
                    if (color === "black") blackTerritory += territory;
                    if (color === "white") whiteTerritory += territory;
                }
            }
        }
    };
        return { black: blackTerritory, white: whiteTerritory };
    
};


