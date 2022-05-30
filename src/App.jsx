import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let justAge = 20;
  const [age, setAge] = useState(20);

  return (
    <div className="App">
      <MainHeaderExample />
      <MainHeaderExample />
      <MainHeaderExample />
      <main>
        <div>
          <span>Just Age: {justAge}</span>
          <br />
          <span>Age using useState: {age}</span>
          <button
            onClick={function () {
              justAge++;
              const newAge = age + 1;
              setAge(newAge); // 스토커 역할. age가 쓰인 모든 곳을 찾아가서 바꿔 줌.
            }}
          >
            나이 증가
          </button>
        </div>
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
