import React from "react";
import Home from "./components/Home";
import WebEditor from "./components/Frontend";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PythonEditor from "./components/Pythoneditor";
import MarkdownEditor from "./components/MarkdownEditor.jsx";
import "./App.css";
import Loginuser from "./components/Loginuser.jsx";
import JavaEditor from "./components/JavaEditor.jsx";
import CppCodeEditor from "./components/Cpluseditor.jsx";
import CcodeEditor from "./components/Ceditor.jsx";
import GocodeEditor from "./components/GoEditor.jsx";
import RustcodeEditor from "./components/RustEditor.jsx";
import BashcodeEditor from "./components/Basheditor.jsx";
import CsharpcodeEditor from "./components/CsharpEditor.jsx";
import PHPcodeEditor from "./components/PHPEditor.jsx";
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
        <Route path="/c" component={CcodeEditor} />
        <Route path="/cpp" component={CppCodeEditor} />
        <Route path="/go" component={GocodeEditor} />
        <Route path="/rust" component={RustcodeEditor} />
        <Route path="/csharp" component={CsharpcodeEditor} />
        <Route path="/bash" component={BashcodeEditor} />
        <Route path="/php" component={PHPcodeEditor} />
       
      </Switch>
    </Router>
  );
}

export default App;