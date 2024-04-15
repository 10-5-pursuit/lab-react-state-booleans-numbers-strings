import React, { useState } from "react";

function ClickerGame() {
  const [score, setScore] = useState(0);
  const [increment, setIncrement] = useState(1);

  const incrementScore = () => {
    setScore(score + increment);
  };

  const payPoints = () => {
    if (score < 10) {
      alert("You can't afford that!");
    } else {
      setScore(score - 10);
      setIncrement(increment + 1);
    }
  };

  const resetGame = () => {
    setScore(0);
    setIncrement(1);
  };

  return (
    <div>
      <h2>Current Score: {score}</h2>
      {score < 100 ? (
        <>
          <button onClick={incrementScore}>+{increment}</button>
          <button onClick={payPoints}>
            Pay 10 points to change from +{increment} to +{increment + 1}
          </button>
        </>
      ) : (
        <>
          <h2>You Win!</h2>
          <button onClick={resetGame}>Play again?</button>
        </>
      )}
    </div>
  );
}

export default ClickerGame;
