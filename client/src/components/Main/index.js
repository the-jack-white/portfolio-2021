import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Navigation from '../Navigation';
import Second from '../Navigation/Second';
import Body from '../Body';

import './index.css';

class Main extends Component {
    render() {
        return (
            <Container>
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