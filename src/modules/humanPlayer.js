function HumanPlayer(board) {
  const handleTurnTaken = (e) => {
    e.target.innerText = 'X';
    board.positions.forEach(el => el.removeEventListener('click', handleTurnTaken, { once: true }));
  };
  const takeTurn = () => {
    board.positions.forEach(position => position.addEventListener('click', handleTurnTaken, { once: true }));
  };
  return { takeTurn };
}
export default HumanPlayer;