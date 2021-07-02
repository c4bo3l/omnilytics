import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useAlphaNumericGenerator, useNumericGenerator } from './hooks';

function App() {
  const { generateAlphaNumeric, generateAlphabets } = useAlphaNumericGenerator();
  const { generateIntegerStr, generateFloatStr } = useNumericGenerator();
  console.log(generateAlphaNumeric());
  console.log(generateAlphabets());
  console.log(generateIntegerStr());
  console.log(generateFloatStr());
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
