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
                                My name is Jack White. I have a passion for metrics, information and technology, 
                                which is why I am following a career as a Software Engineer that is mainly focussed on the MERN Stack and building Microservices.<br /><br />
                                I have an arsenal of tools and languages under the belt to find and develop
                                solutions to all kinds of different problems. I strive to keep learning on a daily 
                                basis, in the shortest amount of time, with the most effective results.<br /><br />
                                If you have any questions, want to connect, or would like to discuss new ideas for upcoming projects, check out my socials.
                            </Text>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default About;