import React, { useState, useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  // js작성
  const [loading, setLoading] = useState(true);
  const [coin, setCoin] = useState([]);
  console.log(loading);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      // fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setCoin(json);
        // loading을 false로 바꿈
        setLoading(false);
        console.log(coin);
      });
  }, []);

  return (
    // html작성
    <div className="App">
      {/* 로딩중이라면 출력x(=""), 끝나면 배열 길이 출력 */}
      <h1>The coin!!{loading ? "" : coin.length}</h1>

      {/* 로딩중(=true) 이라면 (loading... 메시지),
      끝나면 셀렉트 출력  */}
      {loading ? (
        <b>loading...</b>
      ) : (
        <select>
          {coin.map((coin, index) => (
            <option key={index}>{coin.name}</option>
          ))}
        </select>
      )}
      {/* <ul>
            {coin.map((coin) => (
              <li>
                {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
              </li>
            ))}
          </ul> */}
    </div>
  );
}

export default App;
