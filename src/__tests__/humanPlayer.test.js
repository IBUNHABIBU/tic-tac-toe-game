import Board from '../modules/board';
import humanPlayer from '../modules/humanPlayer';

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
            <div class="cell">x</div>
            <div class="cell">x</div>
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

describe('humanPlayer', () => {
  describe('#takeTurn', () => {
    test('add a O on the positions', () => {
      const board = Board(positions, winData, winningMsg);
      const human = humanPlayer(board);
      // human.handleTurnTaken('click');
      human.takeTurn();
      const boardHasO = positions.some(position => position.textContent === 'X');
      // expect(boardHasO).toBeTruthy();
      // console.log(human.handleTurnTaken());
      console.log(human.takeTurn());
    });
  });
});
