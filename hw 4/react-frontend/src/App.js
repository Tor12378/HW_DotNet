import React, { useState } from "react";
import axios from "axios";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState(null);

  const calculate = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/calculator/calculate",
        {
          operator: operator,
          num1: parseFloat(num1),
          num2: parseFloat(num2),
        }
      );
      setResult(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <select value={operator} onChange={(e) => setOperator(e.target.value)}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <button onClick={calculate}>Выполнить вычисление</button>
      {result && <p>Результат: {result}</p>}
    </div>
  );
}

export default App;
