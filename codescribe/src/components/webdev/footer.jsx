import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div>
      <Container fluid className="footer">
        <p className="footer-text">
          &copy; {year} | Made with <i className="far fa-heart"></i> by Shreya Nalawade
        </p>
      </Container>
    </div>
  );
}

export default Footer;
