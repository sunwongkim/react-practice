import React, { useState } from "react";
// import Title from "./components/Title";
// import Btn from "./components/Btn";
import { Title, Btn } from "./components/example";

function App() {
  // js작성
  const [value, setValue] = useState("내용 바꾸기");
  const [state, setState] = useState(false);
  const onClick = () => setState(!state);
  console.log(state);
  const btnClick = state == true ? <h3>ON</h3> : <h3>OFF</h3>;

  return (
    // html작성
    <div className="App">
      <Title title="제목" subTitle="부제목"></Title>
      {/* onClick 이벤트는 컴포넌트 가서 직접 추가 필요 */}
      <Btn onClick={() => setValue("내용 바뀜")} text={value} fontSize={30} />
      <Btn onClick={onClick} text="ON/OFF" fontSize={50} />
      {btnClick}
    </div>
  );
}

// 컴포넌트 코드
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
