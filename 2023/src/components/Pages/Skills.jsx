import { Col, Container, Row, ListGroup } from "react-bootstrap";

import skillList from "../../lib/skills-list";
import Text from "../Text";
import Skill from "../Skill";

import "./index.css";

const Skills = () => {
  return (
    <Container
      style={{ height: "100%", display: "flex", justifyContent: "center" }}
    >
      <Row style={{ height: "100%", width: "80%" }}>
        <Col className="skill-col">
          <Text Size="25px" Align="center" Weight="100" Custom="skills-header">
            Soft Skills
          </Text>
          <ListGroup variant="flush">
            {skillList.soft.map((skill, index) => (
              <ListGroup.Item
                key={index}
                style={{ backgroundColor: "rgba(255, 255, 255, 0)" }}
              >
                <Skill
                  Title={skill.name}
                  Value={skill.value}
                  Status={skill.status}
                />
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col className="skill-col">
          <Text Size="25px" Align="center" Weight="100" Custom="skills-header">
            Hard Skills
          </Text>
          <ListGroup variant="flush">
            {skillList.hard.map((skill, index) => (
              <ListGroup.Item
                key={index}
                style={{ backgroundColor: "rgba(255, 255, 255, 0)" }}
              >
                <Skill
                  Title={skill.name}
                  Value={skill.value}
                  Status={skill.status}
                />
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
