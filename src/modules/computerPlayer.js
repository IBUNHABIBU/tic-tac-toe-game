function ComputerPlayer(board) {
  const takeTurn = () => {
    const availablePosition = board.positions.filter((p) => p.innerText === '');
    const move = Math.floor(Math.random() * availablePosition.length - 0);
    availablePosition[move].innerText = 'O';
  };
  return { takeTurn };
}
export default ComputerPlayer;