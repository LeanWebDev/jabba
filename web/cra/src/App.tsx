import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <HomePage />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </header>
    </div>
  );
}

export default App;
