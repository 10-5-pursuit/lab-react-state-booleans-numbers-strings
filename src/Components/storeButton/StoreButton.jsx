// ./scr/Components/storeButton/StoreButton.jsx
import "./storeButton.css";

export default function StoreButton({ cost, increment, updateIncrement }) {
  return (
    <div onClick={updateIncrement} className="store-button">
      Pay {cost} points to change from +{increment} to +{increment + 1}
    </div>
  );
}
