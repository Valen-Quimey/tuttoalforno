import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      <h2>{greeting}</h2>
      <p>¡Bienvenido! ¿Qué te gustaría almorzar hoy?</p>
    </div>
  );
}

export default ItemListContainer;
