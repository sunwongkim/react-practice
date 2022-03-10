// import React, { useState, useEffect } from "react";
import React from "react";
// import Title from "./components/Title";
// import Btn from "./components/Btn";
import { Title, Btn } from "./components/example";

function App() {
  // js작성
  return (
    // html작성
    <div className="App">
      <Title title="제목" subTitle="부제목"></Title>
      <Btn text="Btn1" fontSize={100} />
      <Btn text="Btn2" fontSize={50} />
    </div>
  );
}
// function Title(props) {
//   return (
//     <>
//       <h1>{props.title}</h1>
//       <h3>{props.subTitle}~</h3>
//     </>
//   );
// }

// function Btn({ text, fontSize }) {
//   return (
//     <button style={{ margin: " 20px", fontSize: fontSize }}>{text}</button>
//   );
// }

export default App;
