function Board(positions, winData, winningMsg) {
  const checkForWinner = (turn) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    const currentTurn = turn % 2 === 0 ? 'O' : 'X';
    const currentValues = positions.map(el => el.textContent).reduce((a, e, i) => {
      if (e === currentTurn) a.push(+i);
      return a;
    }, []);
    const winner = winningCombinations.some(winComb => winComb.every(i => currentValues.includes(i)));
    return winner;
  };

  const updateDom = (turn) => {
    const currentTurn = turn % 2 === 0 ? 'O' : 'X';
    const winningCombo = positions.filter(position => position.textContent === currentTurn);

    if (currentTurn === 'X') {
      winData.innerText = 'Conguratulation You Won The game!';
    } else {
      winData.innerText = 'Oops You loose! Computer won try again';
    }

    winningCombo.forEach((element) => {
      element.classList.add('win');
      winningMsg.classList.add('show');
    });
  };
  return { positions, checkForWinner, updateDom };
}
export default Board;