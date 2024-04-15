// ./scr/Components/winScreen/WinScreen.jsx
import "./winScreen.css";

export default function WinScreen({ resetGame }) {
  return (
    <div className="win-screen">
      <h2>You Win!</h2>
      <button onClick={resetGame}>Play again?</button>
    </div>
  );
}
