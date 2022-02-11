import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬 독학",
  ]);
  let [따봉, 따봉변경] = useState(0);
  let today = new Date();
  let [날짜, 날짜변경] = useState("2월 17일");

  return (
    <div className="App">
      <div className="title">개발 Blog</div>

      <div className="list">
        <h3>
          {글제목[0]}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            👍
          </span>
          {따봉}
          <button
            onClick={() => {
              글제목변경([
                "ㅁㅇㄴㅁㅇㄴㅇㅁㄴ",
                "강남 우동 맛집",
                "파이썬 독학",
              ]);
            }}
          >
            버튼
          </button>
        </h3>
        <p
          onClick={() => {
            // alert(today);
            // alert(new Date());
            날짜변경(new Date());
          }}
        >
          {날짜}
        </p>
        <hr />
      </div>
      <Modal></Modal>
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
