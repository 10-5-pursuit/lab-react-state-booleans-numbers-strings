import React from 'react'
import "../Components/Counter.scss"
import { useState } from 'react'
const Counter = () => {

    const[score, setScore] = useState(0)
    const[additional,setAdditional] = useState(1)

    const increaseCounterAmt = () => {
      if(score < 10) {
        alert ("You Can't Afford That!")
      } else {
        setScore(score - 10);
        setAdditional(additional + 1)
      }
    }

      if(score >= 100) {
       throw alert('You Win!')
      }

    
    const increaseScore = () => {
      setScore(score + additional)
    }

    const restartGame = () => {
      setScore(0)
      setAdditional(1)
    }




  return (
    <div className='container'>
    <h1>Counter Score : {score}</h1>
    <button onClick={increaseScore} className='container__increaseScore'>+{additional}</button>
    <div className='click-options'>
    <button onClick={increaseCounterAmt} className='container__increaseCounter'>Pay 10 points to change from {additional} to {additional +1}</button>
    <button onClick={restartGame} className='container__reset'>Reset Game</button>

    </div>
    </div>
  )
}
export default Counter