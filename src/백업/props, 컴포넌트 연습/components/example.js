// rfc숏컷 사용
// import React from 'react'

// export default function example() {
//   return (
//     <div>example</div>
//   )
// }

import React from "react";

export function Title(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <h3>{props.subTitle}</h3>
    </>
  );
}

// onclick 이벤트 생성하려면 onClick props 할당
export function Btn({ text, fontSize, onClick }) {
  return (
    <button onClick={onClick} style={{ margin: " 20px", fontSize: fontSize }}>
      {text}
    </button>
  );
}

// export { Title, Btn };
