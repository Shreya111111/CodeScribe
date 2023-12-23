import React, { useState } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/python/python";
import "codemirror/theme/material.css";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../Footer";
import Sk from "skulpt";
import "skulpt/dist/skulpt.min.js";
import "skulpt/dist/skulpt-stdlib.js";
import "bootstrap/dist/css/bootstrap.min.css";

function PythonEditor() {
  const initialCode = `# Welcome to Python Editor\n\nprint("Hello, World!")`;

  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState("");

  const runPythonCode = () => {
    Sk.configure({
      output: (text) => {
        setOutput((prevOutput) => prevOutput + text);
      },
      read: (filename) => {
        if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][filename] === undefined) {
          throw `File not found: '${filename}'`;
        }
        return Sk.builtinFiles["files"][filename];
      },
    });

    Sk.misceval.asyncToPromise(() => {
      return Sk.importMainWithBody("<stdin>", false, code, true);
    }).then(
      () => {
        // Code executed successfully
      },
      (err) => {
        console.error("Error running Python code:", err);
      }
    );
  };

  return (
    <div>
      <Container fluid>
        <Row
          style={{
            justifyContent: "center",
            padding: "25px",
          }}
        >
          <Col md={6} className="text-center">
            <h3 className="text-center">Python Editor</h3>
            <CodeMirror
              value={code}
              options={{
                mode: "python",
                lineNumbers: true,
                theme: "material",
              }}
              onBeforeChange={(editor, data, value) => setCode(value)}
            />
            <button onClick={runPythonCode}>Run Python Code</button>
          </Col>
          <Col md={6} style={{ paddingTop: "35px" }}>
            <h3 className="text-center">Python Output</h3>
            <div style={{ padding: "15px", background: "#f3f3f3" }}>{output}</div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default PythonEditor;
