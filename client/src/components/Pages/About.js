import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import Text from '../Text';

import './index.css';

class About extends Component {
    render() {
        return (
            <Container className='about-container'>
                <Row>
                    <Col className='centered'>
                        <div className='text-container'>
                            <Text
                                Size='23px'
                                Align='center'
                                Weight='100'
                            >
                                Eye-poppingly prolific, full stack developer with a passion for metrics 
                                and information. I have an arsenal of tools and languages under the belt to find 
                                solutions to all kinds of different problems. I strive to keep learning on a daily 
                                basis, in the shortest amount of time, with the most effective results.
                            </Text>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default About;