const cells = document.querySelectorAll('.cell');
const winningMsg = document.querySelector('.winning-msg');
const winData = document.querySelector('[data-win-text]');
const reset = document.getElementById('reset');
function Board() {
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
            winData.innerText = 'Oops Computer won try again';
          }
        });
      }
    });
    return winner;
  };
  return { positions, checkForWinner };
}

function HumanPlayer(board) {
  const handleTurnTaken = (e) => {
    e.target.innerText = 'X';
    board.positions.forEach(el => el.removeEventListener('click', handleTurnTaken));
  };
  const takeTurn = () => {
    board.positions.forEach(position => position.addEventListener('click', handleTurnTaken));
  };
  return { takeTurn };
}
function ComputerPlayer(board) {
  const takeTurn = () => {
    const availablePosition = board.positions.filter((p) => p.innerText === '');
    const move = Math.floor(Math.random() * availablePosition.length);
    availablePosition[move].innerText = 'O';
  };
  return { takeTurn };
}

function Game() {
  const board = Board();
  const humanPlayer = HumanPlayer(board);
  const computerPlayer = ComputerPlayer(board);
  let turn = 0;
  const takeTurn = () => {
    if (board.checkForWinner()) {
      return;
    }
    if (turn % 2 === 0) {
      humanPlayer.takeTurn();
    } else {
      computerPlayer.takeTurn();
    }
    turn += 1;
  };
  const start = () => {
    const config = { childList: true };
    const observer = new MutationObserver(() => takeTurn());
    board.positions.forEach(element => observer.observe(element, config));
    takeTurn();
  };
  return { start };
}
const tictactoe = Game();
tictactoe.start();