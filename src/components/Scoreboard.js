import React from 'react';

const Scoreboard = ({ currentScore, bestScore }) => {
  return (
    <div className="Scoreboard">
      <div className="CScoreContainer">
        <div className="ScoreLabel">Current Score</div>
        <div className="ScoreValue">{currentScore}</div>
      </div>
      <div className="BScoreContainer">
        <div className="ScoreLabel">Best Score</div>
        <div className="ScoreValue">{bestScore}</div>
      </div>
    </div>
  )
}

export default Scoreboard;