import React from "react";
import "./App.css";
import { useState } from "react";

function App () {

  const [score, updateScore] = useState(0);
  const [incrementer, updateIncrementor] = useState(1);
  const [winDisplay, changeWinDisplay] = useState("none");
  const [playingDisplay, changePlayingDisplay] = useState("block");

  function incrementScore(){
    updateScore(score + incrementer);
    if (score >= 99){
      changeWinDisplay("block");
      changePlayingDisplay("none");
    }
  }

  function payMoney(){
    if(score < 10)
      alert("You can't afford that!");
    else{
      updateScore(score - 10);
      updateIncrementor(incrementer + 1);
    }
  }

  function resetGame(){
    updateScore(0);
    updateIncrementor(1);
    changeWinDisplay("none");
    changePlayingDisplay("block");
  }

  return (
    <main>
      <h1>Current Score: {score}</h1>
      <button onClick={incrementScore} style={{margin:"10px auto", display: playingDisplay}}>+{incrementer}</button>
      <button onClick={payMoney} style={{margin:"auto", display: playingDisplay}}>Pay 10 points to change from +{incrementer} to +{incrementer + 1}</button>
      <h2 style={{display: winDisplay}}>You Win!</h2>
      <button onClick={resetGame} style={{display: winDisplay, margin: "auto"}}>Play again?</button>
    </main>
  );
}

export default App;
