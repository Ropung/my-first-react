import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <MainHeaderExample />
      <MainHeaderExample />
      <MainHeaderExample />
      <main>
        <span>React Project</span>
      </main>
    </div>
  );
}

function MainHeaderExample() {
  return (
    <header>
      <span>Title</span>
    </header>
  );
}

export default App;
