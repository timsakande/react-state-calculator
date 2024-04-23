import { useState } from 'react';
import "./App.css";

function App() {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [operation, setOperation] = useState(null);
  const [result, setResult] = useState('0');



  const handleNumberClick = (number) => {
    setCurrentNumber((prevNumber) => (prevNumber === '0' ? number : prevNumber + number));
  };

  const handleOperationClick = (selectedOperation) => {
    setOperation(selectedOperation);
    setResult(currentNumber);
    setCurrentNumber('0');
  };

  const handleEqualsClick = () => {
    const num1 = parseFloat(result);
    const num2 = parseFloat(currentNumber);

    if (operation === '+') {
      setResult((num1 + num2).toString());
    } else if (operation === '-') {
      setResult((num1 - num2).toString());
    } else if (operation === '*') {
      setResult((num1 * num2).toString());
    } else if (operation === '÷') {
      setResult((num1 / num2).toString());
    }

    setCurrentNumber('0');
    setOperation(null);
  };

  const handleClearClick = () => {
    setCurrentNumber('0');
    setOperation(null);
    setResult('0');
  };
  
  return (
    <div className="calculator">
      <div className="panel">
        <p>{currentNumber}</p>
        <div className="numbers">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
            <button key={number} onClick={() => handleNumberClick(number.toString())}>
              {number}
            </button>
          ))}
          <button onClick={handleClearClick}>Clear</button>
        </div>
      </div>
      <div className="panel">
        <p>{operation}</p>
        <div className="numbers">
          <button onClick={() => handleOperationClick('+')}>+</button>
          <button onClick={() => handleOperationClick('-')}>-</button>
          <button onClick={() => handleOperationClick('*')}>*</button>
          <button onClick={() => handleOperationClick('÷')}>÷</button>
        </div>
      </div>
      <div className="panel">
        <p>{result}</p>
        <div className="numbers">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
            <button key={number} onClick={() => handleNumberClick(number.toString())}>
              {number}
            </button>
          ))}
          <button onClick={handleClearClick}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={handleEqualsClick}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App
