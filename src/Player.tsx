import { useState } from 'react';

import { PlayerProp } from './types';

function Player({ id, name, score, handleIncrement, handleDecrement }: PlayerProp) {
  return (
    <div className="player">
      <div className="name">{name}</div>
      <div className="playerScore">
        <button
          className="button decrement"
          onClick={() => handleDecrement(id)}
        >-</button>
        <span className="score">{score}</span>
        <button className="button increment" onClick={() => handleIncrement(id, score)}>+</button>
      </div>
    </div >
  )
}

export default Player;