import React from 'react';

const Fecha = props => {
  return <div>{props.fecha.getDate()}/{props.fecha.getMonth() + 1}/{props.fecha.getFullYear()}</div>
}

export default Fecha;
