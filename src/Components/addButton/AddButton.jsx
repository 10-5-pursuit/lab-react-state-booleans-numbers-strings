// ./scr/Components/addButton/AddButton.jsx
import "./addButton.css";

export default function AddButton({ increment, updateScore }) {
  return (
    <div onClick={updateScore} className="add-button">
      +{increment}
    </div>
  );
}
