import React from 'react';
import Fecha from './Fecha';

const Bienvenida = props => {
  return (
    <h1>¡Hola, {props.nombre}! <Fecha fecha={new Date(1989, 5, 14)} /></h1>
  )
}

export default Bienvenida;