import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function Food(props) {
  return (
    <h1>
      asd : {props.asd}, {props.ss}
    </h1>
  );
}
const days = [23, 754654, 324234, 5765];
// const days2 =
//   { qq: "qwfwdq" ,
//    qq: "qvvvq" ,
//    qq: "asaaaa" ,
//    qq: "rrr" },

const days2 = [
  { qq: "qwfwdq", ww: "1212" },
  { qq: "qvvvq", ww: "1212" },
  { qq: "asaaaa", ww: "1212" },
  { qq: "rrr", ww: "1212" },
];

const print = function (item) {
  return item + "!!!!!";
};

function LaLa() {
  console.log(days2.qq);
  return (
    <h3>
      {days}
      <br />
      {days.map(print)}
    </h3>
  );
}

function App() {
  // js작성
  // const [counter, setCounter] = useState();
  // let count = 0;

  return (
    // html작성
    <div className="App">
      {/* <button>버튼</button>
      {count} */}
      <Food asd="asdasd" ss="ㅔㅔㅔ" />
      <Food asd="tykdgjgj" />
      <Food asd="35634tw3" />
      <LaLa />
    </div>
  );
}

export default App;
