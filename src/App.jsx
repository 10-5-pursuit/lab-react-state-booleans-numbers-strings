import React , {useState} from "react";
import "./App.css";


function App () {

  const [count , setCount] = useState(0)
  
    return (
      <main>
        <h1>Current Score: {count} </h1>
        <button onClick={() => setCount(count + 1)}>+1</button>
      </main>
    );
}

export default App;
