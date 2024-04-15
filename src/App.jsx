// ./scr/App.jsx
// import React from "react";
import React from "react";
import { useState } from "react";
import CurrentScore from "./Components/currentScore/CurrentScore";
import AddButton from "./Components/addButton/AddButton";
import StoreButton from "./Components/storeButton/StoreButton";
import WinScreen from "./Components/winScreen/WinScreen";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [increment, setIncrement] = useState(1);
  const [cost, setCost] = useState(10);

  function updateScore() {
    setScore(score + increment);
  }

  function updateIncrement() {
    if (score < cost) {
      alert("You can't buy this");
    } else {
      setIncrement(increment + 1);
      setScore(score - 10);
      setCost(cost + 10);
    }
  }

  function resetGame() {
    setCost(10);
    setScore(0);
    setIncrement(1);
  }

  if (score < 100) {
    return (
      <main>
        <CurrentScore score={score} />
        <AddButton increment={increment} updateScore={updateScore} />
        <StoreButton
          cost={cost}
          increment={increment}
          updateIncrement={updateIncrement}
        />
      </main>
    );
  } else {
    return (
      <main>
        <CurrentScore score={score} />
        <WinScreen resetGame={resetGame} />
      </main>
    );
  }
}

export default App;
