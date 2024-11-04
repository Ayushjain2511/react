import React, { useState } from 'react';
import './App.css'; // Make sure to import the CSS file for styling

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0);

  const handleClick = (value) => {
    setInput(input + value);
  };

  const calculate = () => {
    try {
      setResult(eval(input)); // Caution: eval should be used with care
    } catch (error) {
      alert('Invalid calculation');
    }
  };

  const clearInput = () => {
    setInput('');
    setResult(0);
  };

  return (
    <div className="App">
      <h1>Calculator</h1>
      <div className="calculator">
        <input type="text" value={input} readOnly />
        <p>Result: {result}</p>
        <div className="button-grid">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
            <button onClick={() => handleClick(num.toString())} key={num}>
              {num}
            </button>
          ))}
          {['+', '-', '*', '/'].map((operator) => (
            <button onClick={() => handleClick(operator)} key={operator}>
              {operator}
            </button>
          ))}
          <button onClick={calculate}>=</button>
          <button onClick={clearInput}>C</button>
        </div>
      </div>
    </div>
  );
}

export default App;