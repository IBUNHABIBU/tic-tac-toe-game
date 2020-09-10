function Board() {
  const cells = document.querySelectorAll('.cell');
  const winningMsg = document.querySelector('.winning-msg');
  const winData = document.querySelector('[data-win-text]');
  const positions = Array.from(cells);
  const checkForWinner = () => {
    let winner = false;
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
    winningCombinations.forEach(winningCombo => {
      const pos0InnerText = positions[winningCombo[0]].innerText;
      const pos1InnerText = positions[winningCombo[1]].innerText;
      const pos2InnerText = positions[winningCombo[2]].innerText;
      const isWinningCombo = pos0InnerText !== ''
      && pos0InnerText === pos1InnerText
      && pos1InnerText === pos2InnerText;
      if (isWinningCombo) {
        winner = true;
        winningCombo.forEach(index => {
          positions[index].classList.add('win');
          winningMsg.classList.add('show');
          if (positions[index].innerText === 'X') {
            winData.innerText = 'Conguratulation You Won The game!';
          } else {
            winData.innerText = 'Oops You loose! Computer won try again';
          }
        });
      }
    });
    return winner;
  };
  return { positions, checkForWinner };
}
export default Board;