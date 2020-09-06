const cells  = document.querySelectorAll('.cell');
let currentPlayer = 'X';
Array.from(cells).forEach( cell=> {
cell.addEventListener('click',addMark, { once: true });
});
function addMark(e){
const boxes = Array.from(cells);
const index = boxes.indexOf(e.target);
cells[index].innerHTML = currentPlayer;
  if(currentPlayer==='X'){
    currentPlayer = 'O';
  } else {
    currentPlayer = 'X';
  }
}
function checkWinner(){
  const winningCombination = [
    [0,1,3],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
  ]
}