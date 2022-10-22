import { useState } from "react";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  function incrementCount() {
    setIsLoading(true);
    fetch("http://localhost:3000")
      .then((response) => response.json())
      .then((data) => {
        setCount(data.Item.count);
        setIsLoading(false);
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{isLoading ? "loading" : count}</p>
        <button disabled={isLoading} onClick={() => incrementCount()}>
          Increment Count
        </button>
      </header>
    </div>
  );
}

export default App;
