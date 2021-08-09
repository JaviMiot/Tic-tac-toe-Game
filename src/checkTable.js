const countFichaInRow = (table, row, gamer) => {
    let count = 0;
    table[row].forEach((ficha) => {
      if (ficha === gamer) {
        count += 1;
      }
    });
    return count;
  };
  
  const countFichaInColumn = (table, column, gamer) => {
    let count = 0;
  
    table.forEach((row) => {
      if (row[column] === gamer) {
        count += 1;
      }
    });
  
    return count;
  };
  
  const countFichaInDiagonal = (table, diagonal = 0, gamer) => {
    let count = 0;
    let column = 0;
  
    if (diagonal === 1) {
      column = 2;
    }
  
    table.forEach((row) => {
      if (row[column] === gamer) {
        count += 1;
      }
  
      if (diagonal === 1) {
        column -= 1;
      } else {
        column += 1;
      }
    });
  
    return count;
  };
  
  const checkTable = (gamer, tableStatus) => {
    let results = {
      countRow1: 0,
      countRow2: 0,
      countRow3: 0,
      countColumn1: 0,
      countColumn2: 0,
      countColumn3: 0,
      countDiagonal1: 0,
      countDiagonal2: 0,
    };
  
    results.countRow1 = countFichaInRow(tableStatus, 0, gamer);
    results.countRow2 = countFichaInRow(tableStatus, 1, gamer);
    results.countRow3 = countFichaInRow(tableStatus, 2, gamer);
  
    results.countColumn1 = countFichaInColumn(tableStatus, 0, gamer);
    results.countColumn2 = countFichaInColumn(tableStatus, 1, gamer);
    results.countColumn3 = countFichaInColumn(tableStatus, 2, gamer);
  
    results.countDiagonal1 = countFichaInDiagonal(tableStatus, 0, gamer);
    results.countDiagonal2 = countFichaInDiagonal(tableStatus, 1, gamer);
  
    const isWin = Object.values(results).filter((count) => {
      return count === 3;
    });
  
    return isWin.length === 1 ? true : false;
  };
  

  export default checkTable