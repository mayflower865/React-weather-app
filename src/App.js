import './App.css';
import Weather from "./Weather";
import React from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi</h1>
        <Weather city="Paris" />
      </header>
    </div>
  );
}

export default App;
