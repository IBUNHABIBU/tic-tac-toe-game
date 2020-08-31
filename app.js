const cells = document.querySelectorAll('.cell');
const tictactoe = Game();
tictactoe.start();
function Game(){
  const board = Board();
  const humanPlayer = HumanPlayer(board);
  const computerPlayer = ComputerPlayer(board);
  let turn = 0;
  const takeTurn = () => {
    if(turn % 2 === 0) {
      humanPlayer.takeTurn();
    } else {
      computerPlayer.takeTurn();
    }
    turn++;
  }
  const start = () => {
    const config = { childList: true };
    const observer = new MutationObserver(() => takeTurn() );
    board.positions.forEach(element => {
      observer.observe(element, config);
      takeTurn();
    });
  }
  
  return {start};
}
function Board(){
  const positions = Array.from(cells);
  return { positions }
}
function HumanPlayer(board){
 
  const takeTurn = () => {
    board.positions.forEach(position => position.addEventListener('click', handleTurnTaken));
  };
  const handleTurnTaken = (e) => {
    e.target.innerText = 'X';
    board.positions.forEach(el => el.removeEventListener('click', handleTurnTaken));
  };
  return { takeTurn };
}
function ComputerPlayer(board){
  const takeTurn = () => {
    const availablePosition = board.positions.filter((p) => p.innerText === '');
    
    // const move = Math.floor(Math.random() * availablePosition.length);
    // console.log(move);
    // availablePosition[move].innerText = 'O';
  };
  return { takeTurn };
}