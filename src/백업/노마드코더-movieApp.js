import React, { useState, useEffect } from "react";
// import logo from "./logo.svg";
import "./Movie";

function App() {
  // js작성
  const [loading, setLoading] = useState(true);
  // const [coin, setCoin] = useState([]);
  const [movies, setMovies] = useState([]);
  console.log(loading);

  // const getMovies = async () => {
  //   const response = await fetch(
  //     "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year"
  //   );
  //   const json = await response.json();
  //   setMovie(json.data.movies);
  //   setLoading(false);
  // };
  // useEffect(() => {
  //   getMovies();
  // }, []);

  useEffect(() => {
    fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year"
    )
      .then((response) => response.json())
      .then((json) => {
        setLoading(false);
        // loading을 false로 바꿈
        setMovies(json.data.movies);
        // console.log(json);
        // console.log(json.data.movies);
        console.log(movies);
      });
  }, []);
  console.log(movies);

  return (
    // html작성
    <div className="App">
      <h1>The movie!!</h1>
      {loading ? <h1>loading...</h1> : null}
      {/* medium_cover_image */}
      <ul>
        {movies.map((item) => (
          <li key={item.id}>
            <b>{item.title}</b>
            <img src={item.medium_cover_image} />
            <ul>
              {item.genres.map((genres, index) => (
                <li key={index}>{genres}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <select>
        {movies.map((movies, index) => (
          <option key={index}>{movies.id}</option>
        ))}
      </select>
      {/* <h1>The coin!!{loading ? "" : coin.length}</h1>
      {loading ? (
        <b>loading...</b>
      ) : (
        <select>
          {coin.map((coin, index) => (
            <option key={index}>{coin.name}</option>
          ))}
        </select>
      )} */}
    </div>
  );
}

export default App;

// function App() {
//   // js작성
//   const [loading, setLoading] = useState(true);
//   const [coin, setCoin] = useState([]);
//   const [movie, setMovie] = useState([]);
//   console.log(loading);

//   useEffect(() => {
//     fetch(
//       "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year"
//     )
//       .then((response) => response.json())
//       .then((json) => {
//         console.log(json);
//         setMovie(json);
//         // loading을 false로 바꿈
//         setLoading(false);
//         console.log(movie);
//       });
//   }, []);

//   // useEffect(() => {
//   //   fetch("https://jsonplaceholder.typicode.com/users")
//   //     .then((response) => response.json())
//   //     .then((json) => {
//   //       console.log(json);
//   //       setCoin(json);
//   //       // loading을 false로 바꿈
//   //       setLoading(false);
//   //       console.log(coin);
//   //     });
//   // }, []);

//   return (
//     // html작성
//     <div className="App">
//       <h1>The movie!!{loading ? "" : movie.length}</h1>
//       {/* {loading ? (
//         <b>loading...</b>
//       ) : (
//         <select>
//           {coin.map((coin, index) => (
//             <option key={index}>{coin.name}</option>
//           ))}
//         </select>
//       )} */}
//       {/* ----------------------------------- */}
//       {/* ----------------------------------- */}

//       {/* 로딩중이라면 출력x(=""), 끝나면 배열 길이 출력
//       <h1>The coin!!{loading ? "" : coin.length}</h1>

//       로딩중(=true) 이라면 (loading... 메시지),
//       끝나면 셀렉트 출력
//       {loading ? (
//         <b>loading...</b>
//       ) : (
//         <select>
//           {coin.map((coin, index) => (
//             <option key={index}>{coin.name}</option>
//           ))}
//         </select>
//       )} */}
//     </div>
//   );
// }

// export default App;
