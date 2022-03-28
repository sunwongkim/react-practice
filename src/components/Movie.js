import React from "react";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";
// import PropTypes from "prop-types";

function Movie({ id, title, year, summary, poster, genres }) {
  return (
    <div className={styles.movie}>
      <img src={poster} alt={title} className={styles.movie__img} />
      <h2 className={styles.movie__title}>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <h3 className={styles.movie__year}>{year}</h3>
      <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
      {/* 장르 표시 */}
      <ul className={styles.movie__genres}>
        {genres.map((genres) => (
          <li key={genres}>{genres}</li>
        ))}
      </ul>
    </div>
  );
}

//     // props사용
// function Movie(movies) {
//   return (
//     <li key={movies.id}>
//       <h3>
//         <Link to="/movie">{movies.title}</Link>
//       </h3>
//       <p>{movies.summary}</p>
//       <img src={movies.poster} />
//       {/* 장르 표시 */}
//       <ul>
//         {movies.genres.map((genres) => (
//           <li key={genres}>{genres}</li>
//         ))}
//       </ul>
//     </li>
//   );
// }

// Movie.PropTypes = {
//   id: PropTypes.number.isRequired,
//   poster: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   summary: PropTypes.string.isRequired,
//   genres: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

export default Movie;
