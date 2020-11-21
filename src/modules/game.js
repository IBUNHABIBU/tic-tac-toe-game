import Board from './board';

import HumanPlayer from './humanPlayer';

import ComputerPlayer from './computerPlayer';

function Game() {
  const winData = document.querySelector('[data-win-text]');
  const winningMsg = document.querySelector('.winning-msg');
  const board = Board();
  const humanPlayer = HumanPlayer(board);
  const computerPlayer = ComputerPlayer(board);
  let turn = 0;
  const takeTurn = () => {
    if (board.checkForWinner(turn)) {
       board.updateDom(turn);
       return;
    }
    if (turn === 9 && !board.checkForWinner(turn)) {
      winningMsg.classList.add('show');
      winData.innerText = 'It\'s Draw try again';
    } else if (turn % 2 === 0) {
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
export default Game;