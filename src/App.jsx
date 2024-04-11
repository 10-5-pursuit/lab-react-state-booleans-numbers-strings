import React from "react";
import {useState} from 'react';
import "./App.css";

function App () {
  const [score,setScore] = useState(0);
  const [counter,setCounter] = useState(1)
  
const purchaseUpgrade = () => {
  if(score >= 10) {
    setScore(score - 10);
    setCounter(counter + 1)
  }
  else {
    alert("You can't afford that!")
  }
}

const clickToScore = () => {
     setScore(score + counter);
  }

const resetScore = () => {
  setScore(0);
  setCounter(1);
}  

    return (
      <main>
          <h1>Current Score: {score}</h1>
          {score >= 100 ?  
            <>
              <h2>You Win!</h2>
              <button onClick={resetScore}>Play again?</button>
            </> 
            : 
            <>
             <button onClick={clickToScore}>+ {counter}</button>
              <button onClick={purchaseUpgrade}>Pay 10 points to change from +{counter} to +{counter + 1}</button>
            </>
           }
       
      </main>
    );
}

export default App;
