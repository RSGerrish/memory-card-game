import React, { useEffect, useState } from 'react';
import { shuffleArray } from '../src/Utils.js';
import Header from './components/Header.js';
import Scoreboard from './components/Scoreboard.js';
import CardGridWrapper from './components/CardGridWrapper.js';
import CardImg1 from './images/Alluro.png';
import CardImg2 from './images/Cheetara.png';
import CardImg3 from './images/Jackalman.png';
import CardImg4 from './images/Liono.png';
import CardImg5 from './images/Mummra.png';
import CardImg6 from './images/Panthro.png';
import CardImg7 from './images/Pumyra.png';
import CardImg8 from './images/Snarf.png';
import CardImg9 from './images/Tygra.png';

const App = () => {
  const [bScore, setBScore] = useState(0);
  const [cScore, setCScore] = useState(0);
  const [thundercats, setThundercats] = useState([]);
  const [thundercatsClicked, setThundercatsClicked] = useState([]);

  useEffect(() => {
    const loadThundercats = () => {
      setThundercats(shuffleArray([
        {
          name: 'Alluro',
          img: CardImg1,
          id: 1,
        },
        {
          name: 'Cheetara',
          img: CardImg2,
          id: 2,
        },
        {
          name: 'Jackalman',
          img: CardImg3,
          id: 3,
        },
        {
          name: 'Liono',
          img: CardImg4,
          id: 4,
        },
        {
          name: 'Mumm-Ra',
          img: CardImg5,
          id: 5,
        },
        {
          name: 'Panthro',
          img: CardImg6,
          id: 6,
        },
        {
          name: 'Pumyra',
          img: CardImg7,
          id: 7,
        },
        {
          name: 'Snarf',
          img: CardImg8,
          id: 8,
        },
        {
          name: 'Tygra',
          img: CardImg9,
          id: 9,
        },
      ]));
    };

    loadThundercats();
  }, [])

  const incrementCScore = () => {
    setCScore(prevCScore => prevCScore + 1);
  }

  const handleClick = (e) => {
    const thundercatName = e.currentTarget.lastChild.textContent;

    if(thundercatsClicked.includes(thundercatName)) {
      console.log("not good!");
      resetGame();
    } else {
      const newScore = cScore + 1;

      setThundercatsClicked((prevState) => [...prevState, thundercatName]);
      incrementCScore();
      console.log(cScore);
      if (newScore > bScore) {
        setBScore(newScore);
      }
    }

    setThundercats(shuffleArray(thundercats));
  }

  const resetGame = () => {
    setThundercatsClicked([]);
    setCScore(0);
  }

  return (
    <div className="App">
      <Header />
      <Scoreboard currentScore={cScore} bestScore={bScore} />
      <CardGridWrapper thundercats={thundercats} onCardClicked={handleClick} /> 
    </div>
  );
}

export default App;
