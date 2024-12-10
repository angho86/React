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

export const isInsideBoard = (board, x, y) => {
    const size = board.length;
    return x >= 0 && x < size && y >= 0 && y < size;
}

// randma akmenu grupe naudojant flood fill

export const findGroup = (board, x, y) => {
    const size = board.length; // Lentos dydis
    const color = board[y][x]; // Spalva, kuriai priklauso grupė
    const group = []; // Čia kaupsime grupės akmenų koordinates
    const visited = Array.from({ length: size }, () => Array(size).fill(false)); // Aplankytų taškų lentelė
  
    // Tikrina, ar taškas yra lentoje
    const isInsideBoard = (x, y) => x >= 0 && x < size && y >= 0 && y < size;
  
    // Rekursinė funkcija (giliojo paieškos algoritmas)
    const dfs = (x, y) => {
      if (!isInsideBoard(x, y)) return; // Ne lentos ribose
      if (visited[y][x]) return; // Jau aplankytas taškas
      if (board[y][x] !== color) return; // Skirtinga spalva arba tuščias
  
      visited[y][x] = true; // Pažymime, kad lankėmės šiame taške
      group.push({ x, y }); // Pridedame akmenį į grupę
  
      // Tikriname gretimus taškus
      const directions = [
        [0, 1], // Žemyn
        [1, 0], // Dešinėn
        [0, -1], // Aukštyn
        [-1, 0], // Kairėn
      ];
  
      for (const [dx, dy] of directions) {
        dfs(x + dx, y + dy); // Rekursyviai tikriname gretimus taškus
      }
    };
  
    // Pradedame ieškoti grupės nuo pradinio taško
    dfs(x, y);
  
    return group; // Grąžiname grupę
  };
  

// tikrina ar grupe turi kvepavimo taska (aki)

export const hasLiberty = (board, group) => {
    const size = board.length;
  
    // Patikrina, ar koordinates yra lentos ribose
    const isInsideBoard = (x, y) => x >= 0 && x < size && y >= 0 && y < size;
  
    for (const { x, y } of group) {
      const directions = [
        [0, 1],  // Žemyn
        [1, 0],  // Dešinėn
        [0, -1], // Aukštyn
        [-1, 0], // Kairėn
      ];
  
      for (const [dx, dy] of directions) {
        const nx = x + dx; // Nauja x koordinatė
        const ny = y + dy; // Nauja y koordinatė
  
        // Tikriname, ar kaimyninė koordinatė yra lentos ribose ir laisva
        if (isInsideBoard(nx, ny) && board[ny][nx] === null) {
          return true; // Rasta laisvė
        }
      }
    }
  
    return false; // Jokios laisvės
  };
  

// pasalina apsupta grupe

export const removeGroup = (board, group) => {
    // Sukuriame lentos kopiją
    const newBoard = board.map(row => [...row]);
    console.log("Pašalinama grupė:", group); // Patikrinkite grupės koordinates
    // Pašaliname visus akmenis iš grupės
    group.forEach(({ x, y }) => {
      newBoard[y][x] = null; // Pašaliname akmenį
    });
    console.log("Nauja lenta po pašalinimo:", newBoard);
    return newBoard;
  };



