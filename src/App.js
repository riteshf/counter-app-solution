import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h2>Hello Ritesh</h2>
      <h2 data-testid="counter-value">You clicked {count} times!</h2>

      <button
        data-testid="counter-decrement-button"
        onClick={() => setCount(count - 1)}
        disabled={count < 1}
      >
        Decrement
      </button>
      <button
        data-testid="counter-increment-button"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
}

export default App;
