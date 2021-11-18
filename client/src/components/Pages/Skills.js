import React, { Component } from 'react'
import { Col, Container, Row, ListGroup } from 'react-bootstrap';

import skillList from '../../lib/skills-list';
import Text from '../Text';
import Skill from '../Skill';

import './index.css';

class Skills extends Component {
    render() {
        return (
            <Container style={{height: '100%'}}>
                <Row style={{height: '100%'}}>
                    <Col className='skill-col' style={{borderRight: '1px solid #CED4DA'}}>
                        <Text
                            Size='25px'
                            Align='center'
                            Weight='100'
                            Custom='skills-header'
                        >
                            Soft Skills
                        </Text>
                        <ListGroup variant="flush">
                            { skillList.soft.map((skill, index) => 
                                <ListGroup.Item key={index}>
                                    <Skill 
                                        Title={skill.name}
                                        Value={skill.value}
                                        Status={skill.status}
                                    />
                                </ListGroup.Item>
                            ) }
                        </ListGroup>
                    </Col>
                    <Col className='skill-col' style={{borderRight: '1px solid #CED4DA'}}>
                        <Text
                            Size='25px'
                            Align='center'
                            Weight='100'
                            Custom='skills-header'
                        >
                            Hard Skills
                        </Text>
                        <ListGroup variant="flush">
                            { skillList.hard.map((skill, index) => 
                                <ListGroup.Item key={index}>
                                    <Skill 
                                        Title={skill.name}
                                        Value={skill.value}
                                        Status={skill.status}
                                    />
                                </ListGroup.Item>
                            ) }
                        </ListGroup>
                    </Col>
                    <Col className='skill-col'>
                        <Text
                            Size='25px'
                            Align='center'
                            Weight='100'
                            Custom='skills-header'
                        >
                            Other Skills
                        </Text>
                        <ListGroup variant="flush">
                            { skillList.other.map((skill, index) => 
                                <ListGroup.Item key={index}>
                                    <Text
                                        Size='20px'
                                        Align='center'
                                        Weight='200'
                                        Custom='other-skills-items'
                                    >
                                        { skill }
                                    </Text>
                                </ListGroup.Item>
                            ) }
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Skills;