import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./index.css";

const Navigation = () => {
  return (
    <Navbar className="main-navigation" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          Jack White
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Nav>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/skills">
              Skills
            </Nav.Link>
            <NavDropdown title="Projects" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/projects/applydigital">
                Apply Digital
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/projects/lemverify">
                LEM Verify
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/projects/biz2click">
                Biz2Click
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
