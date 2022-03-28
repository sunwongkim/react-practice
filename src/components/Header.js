import React from "react";
import { Link } from "react-router-dom";

const styles = {
  all: {
    padding: "15px",
    backgroundColor: "black",
    color: "white",
    display: "flex",
    justifyContent: "space-around",
  },
  btn: {
    color: "black",
    fontSize: "16px",
    padding: "0px 10px",
  },
};

function Header() {
  return (
    <div style={styles.all}>
      <h1>Movie App</h1>
      <button style={styles.btn}>
        <Link to="/" style={{ color: "black" }}>
          Home
        </Link>
      </button>
    </div>
  );
}

export default Header;
