import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import "./App.css";

function App() {
  // js작성
  return (
    // html작성
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movie/:id" component={Detail} />
      </Switch>
    </Router>
  );
}

export default App;
