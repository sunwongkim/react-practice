import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home() {
  // js작성
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  console.log(loading);

  // API fetch 버전
  useEffect(() => {
    fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year"
    )
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.data.movies);
        // loading을 false로 바꿈
        setLoading(false);
      });
  }, []);
  console.log(movies);

  // API async 버전
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

  return (
    // html작성
    <>
      <Header />
      <div className={styles.container}>
        {loading ? <span className={styles.loader}>loading...</span> : null}
        {/* AND 연산자 사용. 하나라도 false -> null
        {loading && <h1>loading...</h1>} */}

        {/* 영화 리스트 */}
        <div className={styles.movies}>
          {movies.map((movies) => (
            <Movie
              key={movies.id}
              id={movies.id}
              title={movies.title}
              year={movies.year}
              summary={movies.summary}
              poster={movies.medium_cover_image}
              genres={movies.genres}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
