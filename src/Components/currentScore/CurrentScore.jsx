// ./scr/Components/currentScore/CurrentScore.jsx
import "./currentScore.css";

export default function CurrentScore({ score }) {
  return (
    <div className="current-score">
      <h1>Current Score: {score}</h1>
    </div>
  );
}
