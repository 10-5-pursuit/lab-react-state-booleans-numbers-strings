import { useState } from "react";
import "./ClickGame.css";


function ClickGame(){
    const [score, setScore] = useState(0);
    const [increment, setIncrement] = useState(1);
    const [gameBtnStyle, setGameBtnStyle] = useState('block')
    const [winElements, setgamebtnStyle] = useState('none')
   

    function PayTen (){
        if(score<10){
            alert("You can't affort that")
        }else{
            setScore(score-10);
            setIncrement(increment+1); 
        }
    }
    function checkScore(){
        setScore(score + increment)
        if(score + increment>=100){
            setGameBtnStyle('none');
            setgamebtnStyle('block');
        }
    }

    function resetGame(){
        setScore(0);
        setIncrement(1);
        setGameBtnStyle('block');
        setgamebtnStyle('none');
    }

    return (
        <div className="container">
            <h1>Current Score: {score}</h1>

            <h1 style={{'display':winElements}}>YOU WIN!!!</h1>

            <button className="increment" 
            onClick={checkScore} 
            style={{'display':gameBtnStyle}}>+{increment}</button>

            <button className="pay_btn" 
            onClick={PayTen}
            style={{'display':gameBtnStyle}}>Pay 10 points to change from +{increment} to +{increment+1}</button>
            
            <button className="win_btn" 
            onClick={resetGame} 
            style={{'display':winElements}}>Play again</button>
        </div>
    )
}


export default ClickGame;