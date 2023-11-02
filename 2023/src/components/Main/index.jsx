import { useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

import Navigation from "../Navigation";
import Second from "../Navigation/Second";
import Body from "../Body";
import particlesParams from "../../lib/particles-params";

import "./index.css";

const Main = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  return (
    <Container>
      <div className="particle-container">
        <Particles init={particlesInit} options={particlesParams} />
      </div>
      <Row>
        <Col className="col-items">
          <Navigation />
        </Col>
      </Row>
      <Row>
        <Col className="col-items main-body" xs={18} md={12}>
          <Body />
        </Col>
        <Col>
          <Second />
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
