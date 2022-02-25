import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [title, setTitle] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬 독학",
  ]);
  // deep copy로 새로운 배열 생성 -> 변수 지정 후 조작
  function changeTitle() {
    const newArray = [...title];
    newArray[0] = "asddsadsasda";
    setTitle(newArray);
  }

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="list">
        <button onClick={changeTitle}>남자 코트 추천 - sadsaddsa 바꿈</button>
        <br />
        {title[0]}
        <span
          onClick={() => {
            setCount(count + 1);
          }}
        >
          👍
        </span>
        {count}
      </div>
      <div className="list">{title[1]}</div>
      <div className="list">{title[2]}</div>

      <Modal></Modal>

      <img src={logo} />
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <p>제목</p>
      <p>내용</p>
    </div>
  );
}

export default App;
