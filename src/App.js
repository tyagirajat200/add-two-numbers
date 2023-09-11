import './App.css';
import React from "react";
import { useState } from 'react';

function App() {
  const [firstNum, setFirstNum] = useState('');
  const [seconNum, setSecondNum] = useState('')
  const [result, setResult] = useState('');

  const checkValueIsNum = (setState, val) => {
    if (typeof +val === 'number') {
      setState(val);
    } else {
      setState(""); // Set the state to an empty string if the value is not a number
    }
  }

  return (
    <div className="App">
      <div className='inputDiv'>
        <label>Enter First Number : </label>
        <input data-testid="Text1" id="Text1" type='number' onChange={(e) => checkValueIsNum(setFirstNum, +e.target.value)} />
      </div>
      <div className='inputDiv'>
        <label>Enter Second Number : </label>
        <input data-testid="Text2" id="Text2" type='number' onChange={(e) => checkValueIsNum(setSecondNum, +e.target.value)} />
      </div>
      <div className='inputDiv'>
        <label>Result : </label>
        <input data-testid="txtresult" id="txtresult" disabled value={result} />
      </div>
      <div className='inputDiv'>
        <button
          data-testid="clickbtn"
          name="clickbtn"
          id="clickbtn"
          disabled={!firstNum || !seconNum} onClick={() => setResult((firstNum) + (seconNum))
          } >
          Display Result
        </button>
      </div>
    </div>
  );
}

export default App;
