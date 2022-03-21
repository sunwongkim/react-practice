import React, { useState, useEffect } from "react";
// import Movie from "./components/Movie";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  // js작성

  return (
    // html작성
    <Router>
      <Switch>
        <Route path="/movie">
          <Detail />
        </Route>

        <Route path="/">
          <a href="http://localhost:3000/movie">
            <h1>Go To Detail Page</h1>
          </a>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
