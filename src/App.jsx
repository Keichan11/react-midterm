import { useState } from "react";
import { add, subtract } from "./calculator";

export default function App() {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [result, setResult] = useState(null);

  return (
    <main style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Midterm Calculator</h1>
      <p>Student: Dehapin, Malang, L</p>
      <p>Application Version: 1.1</p>
      <div>
        <label>
          First number:
          <input
            type="number"
            value={first}
            onChange={(e) => setFirst(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Second number:
          <input
            type="number"
            value={second}
            onChange={(e) => setSecond(e.target.value)}
          />
        </label>
      </div>
      <div style={{ marginTop: "1rem", display: "flex", gap: "0.5rem" }}>
        <button onClick={() => setResult(add(first, second))}>
          Add Numbers
        </button>
        <button onClick={() => setResult(subtract(first, second))}>
          Subtract Numbers
        </button>
      </div>
      {result !== null && <h2>Result: {result}</h2>}
    </main>
  );
}