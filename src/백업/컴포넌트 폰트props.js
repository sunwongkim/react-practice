import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function Btn({ text, fontSize }) {
  // const [text, setText] = useState(0);

  return (
    <button style={{ margin: " 20px", fontSize: fontSize }}>{text}</button>
  );
}

function App() {
  // js작성
  // const [counter, setCounter] = useState(0);
  // const onClick = () => setCounter(counter + 1);
  return (
    // html작성
    <div className="App">
      {/* <h1 onClick={onClick}>클릭{counter}</h1> */}
      <Btn text="aaaaaa" fontSize={100} />
      <Btn text="bbbbbb" fontSize={50} />
    </div>
  );
}

export default App;
