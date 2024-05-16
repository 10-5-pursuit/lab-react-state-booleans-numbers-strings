import React , { useState, useEffect } from "react";
import "./App.css";


function App () {

  const [count , setCount] = useState(1)
  const [secondCount , setSecondCount] = useState(1)
  

  const updateCount = () => {
    setCount(count + secondCount);
  }

  const payTenPoints = () => {
    if(count >= 10) {
      setCount(count - 10)
      setSecondCount(secondCount + 1)
    }
    else if (count < 10 ) {
      alert('You can\'t afford that!')
    }
    
  }

    return (
      
      <main>
        <h1>Current Score: {count} </h1>
        <button onClick={updateCount}>{secondCount}</button>
        <button className="longButton" onClick={payTenPoints} >Pay 10 points to change from +{secondCount} to +{secondCount + 1}</button>
      </main>
    );
}

export default App;
