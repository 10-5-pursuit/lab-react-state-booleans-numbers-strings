// App.jsx
import React, { useState } from "react";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [clickValue, setClickValue] = useState(1);

  const incrementScore = () => {
    setScore(score + clickValue);
  };

  const increaseClickValue = () => {
    if (score >= 10) {
      setScore(score - 10);
      setClickValue(clickValue + 1);
    } else {
      alert("You can't afford that!");
    }
  };

  if (score >= 100) {
    return (
      <main>
        <h2>You Win!</h2>
        <p>Current Score: {score}</p>
        <button onClick={() => window.location.reload()}>
          Play again?
        </button>
      </main>
    );
  }

  return (
    <main>
      <p>Current Score: {score}</p>
      <button className="plus-btn" onClick={incrementScore}>+{clickValue}</button>
      <button className="pay-btn"onClick={increaseClickValue}>
        Pay 10 points to change from +{clickValue} to +{clickValue + 1}
      </button>
    </main>
  );
}

export default App;
