function ComputerPlayer(board) {
  const takeTurn = () => {
    const availablePosition = board.positions.filter((p) => p.textContent === '');
    const move = Math.floor(Math.random() * availablePosition.length - 0);
    availablePosition[move].textContent = 'O';
  };
  return { takeTurn };
}
export default ComputerPlayer;