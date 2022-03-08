import React, { useState, useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  // js작성
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);

  // input창 변화 감지
  const onChange = (event) => setTodo(event.target.value);
  // todo에 아무것도 없으면 return에 의해 함수 작동 안함
  // input입력하고 초기화 후 딥카피(...list)
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }
    // input 입력 후 초기화
    setTodo("");
    setList((currentArray) => [todo, ...list]);
  };
  // list를 콘솔창에 한번씩만 출력
  useEffect(() => {
    console.log(list);
  }, [list]);

  return (
    // html작성
    <div className="App">
      {/* input창에서 onChange 썼기에 모너터링 가능 */}
      <p>input창 감지 : {todo}</p>
      <p> list배열 = {list}</p>

      {/* todo-list 출력 */}
      <ul>
        {list.map((element, index) => (
          <li key={index}>
            {index} : {element}
          </li>
        ))}
      </ul>
      <h1>to do list ({list.length})</h1>

      {/* 인풋창 */}
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={todo}
          type="text"
          placeholder="write"
          style={{ margin: "10px" }}
        />
        <button>ADD</button>
      </form>
    </div>
  );
}

export default App;
