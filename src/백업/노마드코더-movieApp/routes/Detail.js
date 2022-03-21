import React from "react";
import { Link } from "react-router-dom";

function Detail() {
  return (
    <>
      <h1>Detail</h1>
      <button>
        <a href="http://localhost:3000">a태그</a>
      </button>
      <button>
        <Link to="http://localhost:3000/movie">Link태그</Link>
      </button>
    </>
  );
}

export default Detail;
