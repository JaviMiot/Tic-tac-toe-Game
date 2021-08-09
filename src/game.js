import swal from 'sweetalert';
import checkTable from './checkTable'

const pInstruction = document.querySelector('#pinstructions');
const btnExis = document.querySelector('#btnExis');
const btnCircle = document.querySelector('#btnCircle');
const btnReset = document.querySelector('#btnReset');
const lbGamer = document.querySelector('#lbGamer');
const table = document.querySelector('#table');

//* Create array status of the table
let tableStatus = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

var gamer = NaN;

pInstruction.textContent = 'Seleccione un a ficha';

const addFicha = (event) => {
  const box = event.target;
  const row = box.dataset.row;
  const column = box.dataset.column;
  try {
    if ((box.nodeName === 'DIV') & (tableStatus[row][column] == 0)) {
      if (gamer === 'x') {
        box.classList.add('image_equis');
        tableStatus[row][column] = 'x';
      } else {
        box.classList.add('image_circle');
        tableStatus[row][column] = 'o';
      }
      checkWin(gamer);
      changeGamer();
      lbGamer.textContent = gamer;
    }
  } catch (error) {}
};

const initGame = (event) => {
  gamer = event.target.dataset.value;
  btnExis.disabled = true;
  btnCircle.disabled = true;
  btnReset.disabled = false;

  lbGamer.textContent = gamer;

  //* Read each button in the table
  table.addEventListener('click', addFicha);
};

const changeGamer = () => {
  if (gamer === 'x') {
    gamer = 'o';
  } else {
    gamer = 'x';
  }
};

const resetGame = () => {
  btnExis.disabled = false;
  btnCircle.disabled = false;
  lbGamer.textContent = '';
  tableStatus = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  pInstruction.textContent = 'Seleccione un a ficha';
  const boxes = document.querySelectorAll('div.square');
  boxes.forEach((box) => {
    box.classList.remove('image_equis');
    box.classList.remove('image_circle');
  });
  btnReset.disabled = true;
  finishGame();
};

const finishGame = () => {
  table.removeEventListener('click', addFicha);
};

const checkWin = (gamer) => {
  if (checkTable(gamer)) {
    swal('Your Win', `Gamer ${gamer}`, 'success');
    pInstruction.textContent = `El Ganador es: ${gamer}`;
    finishGame();
  }
};

btnExis.addEventListener('click', initGame);
btnCircle.addEventListener('click', initGame);
btnReset.addEventListener('click', resetGame);