import React, { useState } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/go/go"; // Use the 'go' mode for Go
import "codemirror/theme/material.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import Footer from "../Footer";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function GoEditor() {
  const initialCode = `// Welcome to Go Editor\n\npackage main\n\nimport "fmt"\n\nfunc main() {\n\tfmt.Println("Hello, World!")\n}`;
  
  const [code, setCode] = useState(initialCode);
  const [customInput, setCustomInput] = useState("");
  const [processing, setProcessing] = useState(false);
  const [output, setOutput] = useState("");

  const handleCompile = () => {
    setProcessing(true);

    const formData = {
      language_id: 60, // Go language ID for Judge0 API
      source_code: btoa(code),
      stdin: btoa(customInput),
    };

    const options = {
      method: "POST",
      url: "https://judge0-ce.p.rapidapi.com/submissions",
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "Content-Type": "application/json",
        "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
        "X-RapidAPI-Key": "0c63117868msh5a2f12f252b5985p1ff156jsn28a528f984ba", // Replace with your actual RapidAPI key
      },
      data: formData,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log("Compile Response Data:", response.data);
        const token = response.data.token;
        checkStatus(token);
      })
      .catch((err) => {
        let error = err.response ? err.response.data : err;
        setProcessing(false);
        console.error("Compile Error:", error);
      });
  };

  const checkStatus = (token) => {
    axios
      .get(`https://judge0-ce.p.rapidapi.com/submissions/${token}`, {
        headers: {
          "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
          "X-RapidAPI-Key": "0c63117868msh5a2f12f252b5985p1ff156jsn28a528f984ba", // Replace with your actual RapidAPI key
        },
      })
      .then((response) => {
        console.log("Status Check Response Data:", response.data);
        const statusId = response.data.status ? response.data.status.id : null;

        if (statusId === 3) {
          setProcessing(false);
          setOutput(response.data.stdout || response.data.stderr);
        } else if (statusId === 6) {
          setProcessing(false);
          setOutput(response.data.stderr);
        } else if (statusId >= 1 && statusId <= 5) {
          setTimeout(() => checkStatus(token), 1000);
        } else {
          console.error("Unexpected status:", statusId);
          setProcessing(false);
        }
      })
      .catch((error) => {
        console.error("Error checking status:", error);
        setProcessing(false);
      });
  };

  return (
    <div>
      <Container fluid>
        <Row style={{ justifyContent: "center", padding: "25px" }}>
          <Col md={6} className="text-center">
            <h3 className="text-center">Go Editor</h3>
            <CodeMirror
              value={code}
              options={{
                mode: "text/x-go",
                lineNumbers: true,
                theme: "material",
              }}
              onBeforeChange={(editor, data, value) => setCode(value)}
            />
            <textarea
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              placeholder="Custom Input (optional)"
            />
            <Button onClick={handleCompile} disabled={processing}>
              {processing ? "Compiling..." : "Compile and Run Go Code"}
            </Button>
          </Col>
          <Col md={6} style={{ paddingTop: "35px" }}>
            <h3 className="text-center">Go Output</h3>
            <div style={{ padding: "15px", background: "#f3f3f3" }}>{output}</div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default GoEditor;
