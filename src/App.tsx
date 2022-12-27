import "./styles.css";
import { useCounter } from "./useCounter";

export default function App() {
  const { count, isCounterRunning, onButtonClick, resetCounter } = useCounter();
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={onButtonClick}>
        {isCounterRunning ? "Pause" : "Start"}
      </button>
      {count !== 0 ? <button onClick={resetCounter}>{"Reset"}</button> : null}
    </div>
  );
}
