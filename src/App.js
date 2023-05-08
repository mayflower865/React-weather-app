import "./App.css";
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Main from "./Main";


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Main />
        <footer>
          Coded with 💗 by{" "}
          <a
            href="https://github.com/mayflower865/weather.react"
            target="_blank"
            rel="noreferrer"
          >
            May Longfellow
          </a>
        </footer>
      </div>
    </div>
  );
}

