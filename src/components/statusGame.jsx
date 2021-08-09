import React from 'react';
import '../assets/style/components/statusGame.css'

const StatusGame = ({onclick ,gamer, enabled, instruction}) => {
  return (
    <div className="status_container">
      <p id="pinstructions">{instruction}</p>
      <div className="ficha-container">
        <button
          className="btn-ficha image-cruz"
          data-value="x"
          id="btnExis"
          onClick={onclick}
          disabled = {enabled}
          ></button>
        <button
          className="btn-ficha image-circle"
          data-value="o"
          id="btnCircle"
          onClick={onclick}
          disabled = {enabled}
        ></button>
      </div>
      <h3>
        Jugador: <span id="lbGamer">{gamer}</span>
      </h3>
    </div>
  );
};

export default StatusGame;
