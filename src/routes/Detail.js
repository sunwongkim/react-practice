import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  console.log(id);

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.data.movie);
        console.log(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
      });
  }, [id]);
  console.log(movies);

  return (
    <>
      <h1>id: {id} </h1>
      <h1>{movies.title}</h1>
      <p>{movies.summary}</p>
      <img src={movies.medium_cover_image} alt={movies.title} />
      {/* fetch가 랜더링되기 전에 map함수가 실행된다.
        -> 배열이 없는 상태로 map함수가 실행되서 에러
        -> undefined가 아닐 때 map이 동작하도록 조작.*/}
      <ul>
        {movies.genres &&
          movies.genres.map((genres, index) => <li key={index}>{genres}</li>)}
      </ul>
      <button>
        <Link to="/">Home</Link>
      </button>
      <div>
        <a href={"https://yts.mx/api/v2/movie_details.json?movie_id=" + id}>
          https://yts.mx/api/v2/movie_details.json?movie_id={id}
        </a>
      </div>
    </>
  );
}

export default Detail;
