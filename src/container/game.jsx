import React, { useState } from 'react';

import Header from '../components/header';
import StatusGame from '../components/statusGame';
import TableTictoc from './tableTictoc';

import '../assets/style/main.css';

//? import mesasseg box
import swal from 'sweetalert';

//? import check table
import checkTable from '../checkTable';

//* define message to the game
const Instructions = {
  init: 'Seleccione una ficha',
  winnerMessage: 'El Ganador es:',
};

const Game = () => {
  const [gamer, setGamer] = useState('');
  const [resetEnable, setResetEnable] = useState(true);
  const [tableDisable, setTableDisable] = useState(true);
  const [lbInstruction, SetLbInstruction] = useState(Instructions.init);

  const selectFicha = (even) => {
    setGamer(even.target.dataset.value);
    setTableDisable(false);
    setResetEnable(false);
  };

  const [tableStatus, setTableStatus] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);

  const putFicha = (event) => {
    const box = event.target;
    const row = box.dataset.row;
    const column = box.dataset.column;

    try {
      if (tableStatus[row][column] === 0) {
        if (gamer === 'x') {
          box.classList.add('image_equis__box');
          tableStatus[row][column] = 'x';
        } else {
          box.classList.add('image_circle__box');
          tableStatus[row][column] = 'o';
        }
        checkWin(gamer);
        changeGamer();
      }
    } catch (error) {}
  };

  const changeGamer = () => {
    if (gamer === 'x') {
      setGamer('o');
    } else {
      setGamer('x');
    }
  };

  const checkWin = (gamer) => {
    if (checkTable(gamer, tableStatus)) {
      swal('Your Win', `Gamer ${gamer}`, 'success');
      SetLbInstruction(`${Instructions.winnerMessage} ${gamer}`);
      setTableDisable(true);
    }
  };

  const resetGame = () => {
    setTableDisable(true);
    setResetEnable(true);
    setGamer('');
    setTableStatus([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);

    const boxes = document.querySelectorAll('button.square');
    boxes.forEach((box) => {
      box.classList.remove('image_equis__box');
      box.classList.remove('image_circle__box');
    });

    SetLbInstruction(Instructions.init);
  };

  return (
    <div>
      <Header />
      <main>
        <StatusGame
          onclick={selectFicha}
          gamer={gamer}
          enabled={!resetEnable}
          instruction={lbInstruction}
        />
        <TableTictoc onclick={putFicha} disabled={tableDisable} />
        <button
          id="btnReset"
          disabled={resetEnable}
          className="btnReset"
          onClick={resetGame}
        >
          Reset
        </button>
      </main>
    </div>
  );
};

export default Game;
