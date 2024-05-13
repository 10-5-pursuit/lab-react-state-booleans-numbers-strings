import { useState } from 'react';
import React from 'react';
import './App.css';

function App () {
  const [score, setScore] = useState(0);
  const [increasePoints, setIncreasePoints] = useState(1);

  // const increaseCount = () => {
  //   setScore((score) => {
  //     return score + 1
  //   })
  // }

  function increaseScoreCount () {
    setScore(score => score + 1); // saying what the current state and next state will be
  }

  function increaseIncrement () {
    if (score < 10) {
      alert (`You Can't Afford That!`);
    } else {
      setScore(score - 10);
      setIncreasePoints(increasePoints + 1);
    }
    if (score >= 100) {
     throw alert(`You Win!`);
    }
  }

  function restartGame () {
    setScore(0);
    setIncreasePoints(1);
  }

    return (
      <main>
        <p>Current Score: {score}</p>
        <button className='increment-btn' onClick={increaseScoreCount}>+{increasePoints}</button>
        <br></br>
        <button className='increaseIncrement-btn' onClick={increaseIncrement}>Pay 10 points to change from +{increasePoints} to +{increasePoints + 1}</button>
        {/* <button className='reset-btn' onClick={restartGame}>Reset Game</button> */}

      </main>
    );
}

export default App;
