import React from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

function Movie({ id, title, summary, poster, genres }) {
  return (
    <>
      <li>
        <h3>
          <Link to={`/movie/${id}`}>{title}</Link>
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
    </>
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
