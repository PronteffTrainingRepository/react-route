import React from "react";
import "./App.css";
import Home from "./Views/Home";
import About from "./Views/About";
import Topics from "./Views/Topics";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        {" "}
        <h2>Welcome to React Router Tutorial</h2>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <ul className="nav_bar" type="none">
            <li>
              <Link to={"/"}> Home </Link>
            </li>
            <li>
              <Link to={"/topics"}>Topics</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/topics" component={Topics} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
