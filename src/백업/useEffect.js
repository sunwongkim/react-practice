import React, { useState, useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  // js작성

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const onClick = () => setCount(count + 1);
  const onClick2 = () => setCount2(count2 + 1);

  // 검색창 변화 감지
  const [todo, setTodo] = useState("");
  const onChange = (event) => setTodo(event.target.value);

  // 첫 실행만
  useEffect(() => {
    console.log("start");
  }, []);
  // 첫번쨰 버튼만
  useEffect(() => {
    console.log("btn.1");
  }, [count]);
  // 검색창만
  useEffect(() => {
    if (todo.length > 3) {
      console.log("serch :", todo);
    }
  }, [todo]);
  // 항상 출력
  console.log("always");

  return (
    // html작성
    <div className="App">
      {/* 검색창 */}
      <input
        onChange={onChange}
        value={todo}
        type="text"
        placeholder="write"
        style={{ margin: "10px" }}
      />
      {/* 버튼 */}
      <h1>{count}</h1>
      <button onClick={onClick}>click me</button>
      <h1>{count2}</h1>
      <button onClick={onClick2}>click me2</button>
    </div>
  );
}

export default App;
