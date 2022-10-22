import { useState } from "react";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    fetch("http://localhost:3000")
      .then((response) => response.json())
      .then((data) => setCount(data.Item.count));
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{count}</p>
        <button onClick={() => incrementCount()}> Click me </button>
      </header>
    </div>
  );
}

export default App;
