function HumanPlayer(board) {
  const handleTurnTaken = (e) => {
    e.target.innerText = 'X';
    console.log(board.positions);
    board.positions.forEach(el => el.removeEventListener('click', handleTurnTaken, { once: true }));
  };
  const takeTurn = () => {
    board.positions.forEach((position) => {
      if (position.textContent === '') position.addEventListener('click', handleTurnTaken, { once: true });
    });
  };
  return { takeTurn };
}
export default HumanPlayer;