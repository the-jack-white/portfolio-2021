import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap';

import Text from '../Text';

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
                        >
                            Soft Skills
                        </Text>
                        <div>
                            <p>skill 1</p>
                            <p>skill 1</p>
                            <p>skill 1</p>
                        </div>
                    </Col>
                    <Col className='skill-col'>
                        <Text
                            Size='25px'
                            Align='center'
                            Weight='100'
                        >
                            Hard Skills
                        </Text>
                        <div>
                            <p>skill 1</p>
                            <p>skill 1</p>
                            <p>skill 1</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Skills;