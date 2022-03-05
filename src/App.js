import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // js작성
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);
  // input창 변화 감지
  const onChange = (event) => setTodo(event.target.value);
  // input 입력 후 초기화
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }
    setTodo("");
    setList((currentArray) => [todo, ...list]);
  };
  console.log(list);

  // 컴포넌트
  function TodoList() {
    return (
      <ul>
        {list.map((element, index) => (
          <li key={index}>
            {index} : {element}
          </li>
        ))}
      </ul>
    );
  }

  return (
    // html작성
    <div className="App">
      {/* input창에서 onChange 썼기에 모너터링 가능 */}
      <p>input창 감지 : {todo}</p>
      <p> list배열 = {list}</p>
      <TodoList></TodoList>
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
