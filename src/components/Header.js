import React from 'react';
import title from '../images/title.png';

const Header = () => {
  return (
    <header>
      <div className="TitleContainer">
        <img src={title} alt="" />
      </div>
    </header>
  )
}

export default Header;