import { Button, Col, Container, Row, Image } from "react-bootstrap";

import "./index.css";

const Home = () => {
  return (
    <Container className="home-container">
      <Row>
        <Col className="centered">
          <div className="social-avatar-large">
            <Image
              src="/images/linkedin_image.jpg"
              alt="Profile"
              height="300px"
              roundedCircle
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="centered">
          <div style={{ textAlign: "center" }}>
            <h2>Jack White</h2>
            <h4>Senior Front End Developer - Web Enthusiast</h4>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="centered">
          <div>
            <div className="btn-container">
              <a
                href="/documents/JackWhiteCV_Nov2023.pdf"
                rel="noreferrer"
                target="_blank"
                download
              >
                <Button variant="outline-success">Download CV</Button>
              </a>
            </div>
            <div className="btn-container">
              <a
                href="mailto:white123jack@gmail.com"
                rel="noreferrer"
                target="_blank"
              >
                <Button variant="outline-success">Contact Me</Button>
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
