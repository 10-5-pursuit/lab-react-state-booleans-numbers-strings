import "./ClickGame.css";

let score = 0;
let increment = 1



function ClickGame(){

    
    
    return (
        <div className="container">
            <h1>Current Score: {score}</h1>
            <button className="increment" onClick={()=>{
                score += increment;
                console.log(score)
            }} >+{increment}</button>
            <button className="pay_btn">Pay 10 points to change from +{increment} to +{increment+1}</button>
        </div>
    )
}


export default ClickGame;