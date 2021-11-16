import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

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
                <Row style={{height: '80vh'}}>
                    <Col className='col-items' xs={2} md={1}>
                        <Second />
                    </Col>
                    <Col className='col-items' xs={16} md={11}>
                        <Body />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Main