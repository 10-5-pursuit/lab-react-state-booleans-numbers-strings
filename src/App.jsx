import React, { useState } from 'react';
import "./App.css"

function App() {
  const [score, setScore] = useState(0);
  const [increment, setIncrement] = useState(1);

  const click = () => {
    setScore(score + increment);
  };

  const upgrade = () => {
    if (score >= 10) {
      setScore(score - 10);
      setIncrement(increment + 1);
    } else {
      alert("You don't have enough points!");
    }
  };

  const restart = () => {
    setScore(0);
    setIncrement(1);
  };

  return (
    <main>
      <h1>Current Score: {score}</h1>
      <button className='btn' onClick={click}>+{increment}</button>
      <br />
      {score >= 10 && (
        <button onClick={upgrade}>Pay 10 points to increase by +{increment} to +{increment + 1}</button>
      )}
      {score >= 100 && (
        <div>
          <h2>You Win!</h2>
          <button onClick={restart}>Play again?</button>
        </div>
      )}
    </main>
  );
}

export default App;
