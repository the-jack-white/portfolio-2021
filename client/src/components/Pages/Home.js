import React, { Component } from 'react';
import { Button, Col, Container, Row, Image, Spinner } from 'react-bootstrap';

import './index.css';

class Home extends Component {

    state = {
        componentMounted: false
    }

    componentDidMount = () => {
        setTimeout(() => this.setState({componentMounted: true}), 300)
    }

    componentWillUnmount = () => {
        this.setState({componentMounted: false})
    }

    render() {

        const { componentMounted } = this.state;
        let avatarImage;

        if ( componentMounted ) {
            avatarImage = <Image src="/images/linkedin_image.jpg" alt="Profile" height="300px"  roundedCircle />
        } else {
            avatarImage = <Spinner animation="border" />
        }

        return (
            <Container className='home-container'>
                <Row>
                    <Col className='centered'>
                        <div className='social-avatar-large'>
                            { avatarImage }
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className='centered'>
                        <div style={{textAlign:'center'}}>
                            <h2>Jack White</h2>
                            <h4>Software Engineer</h4>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className='centered'>
                        <div>
                            <div className='btn-container'>
                                <Button variant='outline-success'>Portfolio - 2019</Button>
                            </div>
                            <div className='btn-container'>
                                <Button variant='outline-success'>Portfolio - 2018</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home;