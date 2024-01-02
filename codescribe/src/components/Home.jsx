import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import homeImg from "../Assets/971.jpg";
import { Link } from "react-router-dom";
import Header from "./navbar/Header";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
function Home() {
  const wrapper = {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    overflow: "hidden",
    position: "relative",
  };

  

  const btnStyle = {
    backgroundColor: "#5c4389",
    border: 0,
  };

  return (
    <div
      style={{ backgroundColor: "#f8f8f8", minHeight: "100vh", height: "auto" }}
    >
      <Header/>
      <Container style={wrapper}>
        <Row
          className="text-center"
          style={{
            alignItems: "center",
            paddingTop: "100px",
            paddingBottom: "50px",
          }}
        >
          <Col md={6}>
            <img
              src={homeImg}
              className="img-fluid"
              alt="main img"
              style={{ justifyContent: "center", padding: "30px" }}
            />
          </Col>
          <Col md={6}>
            <h2 style={{ color: "#9d7b54" }}>Coding Oasis</h2>
            <h5
              style={{
                textAlign: "justify",
                color: "RGB(94, 114, 143)",
                paddingTop: "10px",
              }}
            >
             Revolutionize your coding experience with our online editor! Edit HTML, CSS, and JavaScript seamlessly while enjoying an instant live preview of your site. Elevate your coding game effortlessly!
            </h5>
            <Button variant="primary" style={btnStyle} as={Link} to="/web">
              Frontend Editor
            </Button>

            <h2 style={{ color: "#9d7b54", paddingTop: "70px" }}>
            README Rapid: Craft Your Project's Story in Seconds!
            </h2>
            <h5
              style={{
                textAlign: "justify",
                color: "RGB(94, 114, 143)",
                paddingTop: "10px",
              }}
            >
              Introducing an online markdown editor designed to make crafting your README a breeze! Our platform boasts a user-friendly interface and a customizable toolbar, empowering you to effortlessly create stunning documentation. Say goodbye to markdown headaches and hello to a seamless writing experience. Your README just got an upgrade!
            </h5>
            <Button variant="primary" style={btnStyle} as={Link} to="/markdown">
              README Generator
            </Button>
            <h2 style={{ color: "#9d7b54", paddingTop: "70px" }}>
            PyCode !
            </h2>
            <h5
              style={{
                textAlign: "justify",
                color: "RGB(94, 114, 143)",
                paddingTop: "10px",
              }}
            >
              PyCode Hub: Your Swift Python Playground! Write, run, and experiment with Python snippets instantly in our interactive and user-friendly PyCode compiler. Unleash your coding creativity on the fly!
            </h5>
            <Button variant="primary" style={btnStyle} as={Link} to="/python">
             Run Python
            </Button>
            <h2 style={{ color: "#9d7b54", paddingTop: "70px" }}>
            JavaPilot!
            </h2>
            <h5
              style={{
                textAlign: "justify",
                color: "RGB(94, 114, 143)",
                paddingTop: "10px",
              }}
            >
             Power up your Java programming with our sleek code editor—where innovation meets efficiency. Write, compile, and run your code effortlessly, turning your ideas into reality with every keystroke.
            </h5>
            <Button variant="primary" style={btnStyle} as={Link} to="/java">
            Java Execute
            </Button>
            <h2 style={{ color: "#9d7b54", paddingTop: "70px" }}>
            NebulaC
            </h2>
            <h5
              style={{
                textAlign: "justify",
                color: "RGB(94, 114, 143)",
                paddingTop: "10px",
              }}
            >
             Nebula C is a revolutionary C compiler that transcends traditional boundaries, propelling code into a cosmic realm of innovation and efficiency. With its stellar capabilities, Nebula C transforms complexities into elegant solutions, offering developers a celestial experience in software development.
            </h5>
            <Button variant="primary" style={btnStyle} as={Link} to="/c">
            Code C
            </Button>
            <h2 style={{ color: "#9d7b54", paddingTop: "70px" }}>
            CodeCraft-C++
            </h2>
            <h5
              style={{
                textAlign: "justify",
                color: "RGB(94, 114, 143)",
                paddingTop: "10px",
              }}
            >
             "CodeCraftC++ is not just a compiler, it's a masterful compiler sculptor, chiseling your code into a masterpiece of efficiency and elegance. With its artful blend of precision and innovation, every compilation becomes a journey through the realm where code transcends into craftsmanship."
            </h5>
            <Button variant="primary" style={btnStyle} as={Link} to="/cpp">
            Execute cpp
            </Button>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Home;