import React from "react";
import Home from "./components/Home";
import WebEditor from "./components/Frontend";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PythonEditor from "./components/Pythoneditor";
import MarkdownEditor from "./components/MarkdownEditor.jsx";
import "./App.css";
import Loginuser from "./components/Loginuser.jsx";
import JavaEditor from "./components/JavaEditor.jsx";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/web" component={WebEditor} />
        <Route path="/markdown" component={MarkdownEditor} />
        <Route path="/python" component={PythonEditor} />
        <Route path="/login" component={Loginuser} />
        <Route path="/java" component={JavaEditor} />
       
      </Switch>
    </Router>
  );
}

export default App;