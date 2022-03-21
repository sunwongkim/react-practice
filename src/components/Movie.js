import React from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

function Movie({ title, summary, poster, genres }) {
  return (
    <>
      <li>
        <h3>
          <Link to="/movie">{title}</Link>
        </h3>
        <p>{summary}</p>
        <img src={poster} alt={title} />
        {/* 장르 표시 */}
        <ul>
          {genres.map((genres) => (
            <li key={genres}>{genres}</li>
          ))}
        </ul>
      </li>
      {/* 컴포넌트화 시키기 전 코드
      <li key={movies.id}>
        <b>{movies.title}</b>
        <img src={movies.medium_cover_image} />
        <ul>
          {movies.genres.map((genres) => (
            <li key={genres}>{genres}</li>
          ))}
        </ul>
      </li> */}
    </>
  );
}

// Movie.PropTypes = {
//   title: PropTypes.string.isRequired,
//   medium_cover_image: PropTypes.string.isRequired,
//   genres: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

export default Movie;
