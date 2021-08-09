import React from 'react';
import BoxTicToc from '../components/boxTicToc';
import '../assets/style/containers/tableTicToc.css'

const TableTictoc = ({onclick , disabled}) => {
  return (
    <section className="table" id="table">
      <BoxTicToc row="0" onclick = {onclick} disabled ={disabled}/>
      <BoxTicToc row="1" onclick = {onclick} disabled ={disabled}/>
      <BoxTicToc row="2" onclick = {onclick} disabled ={disabled}/>
    </section>
  );
};

export default TableTictoc;
