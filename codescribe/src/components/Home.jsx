import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import sh1 from "../Assets/web-development_2282272.png";
import sh2 from "../Assets/coding_1045981.png";
import sh3 from "../Assets/html_6443507.png";
import sh6 from "../Assets/web-development_2282272.png";
import homeImg from "../Assets/971.jpg";
import { Link } from "react-router-dom";
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

  const shape1 = {
    left: 0,
    right: 0,
    margin: "auto",
    top: "90px",
    position: "absolute",
  };

  const shape2 = {
    right: "380px",
    top: "280px",
    position: "absolute",
  };

  const shape3 = {
    right: "88px",
    top: "230px",
    position: "absolute",
  };

  const shape6 = {
    right: "272px",
    bottom: "0px",
    position: "absolute",
  };

  const btnStyle = {
    backgroundColor: "#5c4389",
    border: 0,
  };

  return (
    <div
      style={{ backgroundColor: "#2a283e", minHeight: "100vh", height: "auto" }}
    >
      <Container style={wrapper}>
        <img src={sh1} alt="fig1" style={shape1} className="shape" />
        <img src={sh2} alt="fig2" style={shape2} className="shape" />
        <img src={sh3} alt="fig3" style={shape3} className="shape" />
        <img src={sh6} alt="fig6" style={shape6} className="shape" />
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
            <h2 style={{ color: "#f0c19e" }}>Coding Oasis</h2>
            <h5
              style={{
                textAlign: "justify",
                color: "rgb(154 179 205)",
                paddingTop: "10px",
              }}
            >
             Revolutionize your coding experience with our online editor! Edit HTML, CSS, and JavaScript seamlessly while enjoying an instant live preview of your site. Elevate your coding game effortlessly!
            </h5>
            <Button variant="primary" style={btnStyle} as={Link} to="/web">
              Frontend Editor
            </Button>

            <h2 style={{ color: "#f0c19e", paddingTop: "70px" }}>
            README Rapid: Craft Your Project's Story in Seconds!
            </h2>
            <h5
              style={{
                textAlign: "justify",
                color: "rgb(154 179 205)",
                paddingTop: "10px",
              }}
            >
              Introducing an online markdown editor designed to make crafting your README a breeze! Our platform boasts a user-friendly interface and a customizable toolbar, empowering you to effortlessly create stunning documentation. Say goodbye to markdown headaches and hello to a seamless writing experience. Your README just got an upgrade!
            </h5>
            <Button variant="primary" style={btnStyle} as={Link} to="/markdown">
              README Generator
            </Button>
            <h2 style={{ color: "#f0c19e", paddingTop: "70px" }}>
            PyCode !
            </h2>
            <h5
              style={{
                textAlign: "justify",
                color: "rgb(154 179 205)",
                paddingTop: "10px",
              }}
            >
              "PyCode Hub: Your Swift Python Playground! Write, run, and experiment with Python snippets instantly in our interactive and user-friendly PyCode compiler. Unleash your coding creativity on the fly!"
            </h5>
            <Button variant="primary" style={btnStyle} as={Link} to="/python">
             Run Python
            </Button>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Home;