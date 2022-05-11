import React from 'react';

const Card = ({ img, name, onClick }) => {
  return (
    <div className="CardWrapper" onClick={onClick}>
      <img className="CardImage" src={img} alt="" />
      <div className="CardTitle">{name}</div>
    </div>
  )
}

export default Card