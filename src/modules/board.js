function Board() {
  const cells = document.querySelectorAll('.cell');
  const positions = Array.from(cells);

  const checkForWinner = (turn, values = false) => {
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
    const currentTurn = turn % 2 === 0 ? 'X' : 'O';
    const currentValues = values || positions.map(el => el.textContent).reduce(function(a, e, i) {
      if (e === currentTurn)
          a.push(+i);
      return a;
  }, [])

    const winner =  winningCombinations.some(winningCombo => {
      return winningCombo.every(index => currentValues.includes(index))
    });
    return winner
  };

  const updateDom = (turn) => {
    const winningMsg = document.querySelector('.winning-msg');
    const winData = document.querySelector('[data-win-text]');
    const currentTurn = turn % 2 === 0 ? 'X' : '0';
    const winningCombo = positions.filter(position => position.textContent === currentTurn);
    
    winningCombo.forEach(element => {
      element.classList.add('win');
      winningMsg.classList.add('show');
      if (element.innerText === 'X') {
        winData.innerText = 'Conguratulation You Won The game!';
      } else {
        winData.innerText = 'Oops You loose! Computer won try again';
      }
    });
  }
  return { positions, checkForWinner, updateDom };
}
export default Board;