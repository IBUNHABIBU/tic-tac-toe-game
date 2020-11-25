import Board from '../modules/board';
import ComputerPlayer from '../modules/computerPlayer';

const container = document.createElement('div');
container.innerHTML = `
    <div class="start show">
        <input type="text" placeholder="Enter your Name" id="input">
        <button type="submit" id="submit" class="btn btn-primary">Start Game</button>
    </div>
        
        <div class="board">
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
        </div>
        
    </div>
    <div class="winning-msg" id="winningMsg">
        <div data-win-text></div>
        <button type="reset" id="reset">reset</button>
    </div>
`;

const winData = container.querySelector('[data-win-text]');
const winningMsg = container.querySelector('.winning-msg');
const cells = container.querySelectorAll('.cell');
const positions = Array.from(cells);

describe('ComputerPlayer', () => {
  describe('#takeTurn', () => {
    test('add a O on the positions', () => {
      const board = Board(positions, winData, winningMsg);
      const computer = ComputerPlayer(board);
      computer.takeTurn();
      const boardHasO = positions.some(
        (position) => position.textContent === 'O'
      );
      expect(boardHasO).toBeTruthy();
    });
  });
});
