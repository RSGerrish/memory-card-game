import React from 'react';
import Card from './Card.js';

const CardGrid = ({ thundercats, onCardClicked }) => {
  return thundercats.map((card) => {
      return <Card key={card.id} img={card.img} name={card.name} onClick={onCardClicked} />
  });
}

export default CardGrid;