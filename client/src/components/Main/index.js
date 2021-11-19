import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Particles from 'react-tsparticles';

import Navigation from '../Navigation';
import Second from '../Navigation/Second';
import Body from '../Body';
import particlesParams from '../../lib/particles-params';

import './index.css';

class Main extends Component {
    render() {
        return (
            <Container>
                <div className="particle-container">
                    <Particles 
                        options={particlesParams}
                    />
                </div>
                <Row>
                    <Col className='col-items'>
                        <Navigation />
                    </Col>
                </Row>
                <Row >
                    <Col className='col-items main-body' xs={18} md={12}>
                        <Body />
                    </Col>
                    <Col>
                        <Second />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Main