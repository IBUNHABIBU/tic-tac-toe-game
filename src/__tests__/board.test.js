import Board from '../modules/board';

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

describe('Board', () => {
  afterEach(() => {
    positions.map((position) => {
      position.textContent = '';
      return position;
    });
  });

  describe('#checkForWinner', () => {
    test('should return false if there is no winner', () => {
      const board = Board(positions, winData, winningMsg);

      expect(board.checkForWinner()).toBeFalsy();
    });

    test('should return true if X is a winner', () => {
      positions.slice(0, 4).map((position) => {
        position.textContent = 'X';
        return position;
      });
      const board = Board(positions, winData, winningMsg);

      expect(board.checkForWinner(1)).toBeTruthy();
    });

    test('should return true if O is a winner', () => {
      positions.slice(3, 6).map((position) => {
        position.textContent = 'O';
        return position;
      });
      const board = Board(positions, winData, winningMsg);
      expect(board.checkForWinner(0)).toBeTruthy();
    });
  });

  describe('#updateDom', () => {
    test('should put the text `Conguratulation You Won The game!` if X is a winner', () => {
      positions.slice(0, 4).map((position) => {
        position.innerText = 'X';
        return position;
      });
      const board = Board(positions, winData, winningMsg);
      board.updateDom(1);
      expect(winData.innerText).toStrictEqual(
        'Conguratulation You Won The game!'
      );
    });

    test('should put the text `Oops You loose! Computer won try again', () => {
      positions.slice(0, 4).map((position) => {
        position.innerText = 'O';
        return position;
      });
      const board = Board(positions, winData, winningMsg);
      board.updateDom(0);
      expect(winData.innerText).toStrictEqual(
        'Oops You loose! Computer won try again'
      );
    });
  });
});