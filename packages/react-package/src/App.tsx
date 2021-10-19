import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = require("typescript-package");
  const variable = name("Edison", "Moreno");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{variable}</h2>
      </header>
    </div>
  );
}

export default App;
