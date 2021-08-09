import React from 'react';
import '../assets/style/components/boxTicToc.css';

const BoxTicToc = ({ row, onclick, disabled }) => {
  return (
    <div className="row">
      <button
        className="square"
        data-row={row}
        data-column="0"
        onClick={onclick}
        disabled={disabled}
      ></button>
      <button
        className="square"
        data-row={row}
        data-column="1"
        onClick={onclick}
        disabled={disabled}
      ></button>
      <button
        className="square"
        data-row={row}
        data-column="2"
        onClick={onclick}
        disabled={disabled}
      ></button>
    </div>
  );
};

export default BoxTicToc;
