import React from "react";
import Home from "./components/webdev/Home";
import WebEditor from "./components/webdev/webdev";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/web" component={WebEditor} />
       
      </Switch>
    </Router>
  );
}

export default App;