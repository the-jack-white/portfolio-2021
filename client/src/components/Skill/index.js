import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';

import './index.css';

class Skill extends Component {

    state = {
        currentValue: 0
    }

    startProgress = () => {
        for ( let i = 0; i <= this.props.Value; i ++ ) {
            this.setState({currentValue: i})
        }
    }

    componentDidMount = () => {
        setTimeout(this.startProgress, 70)
    }

    render() {

        const { currentValue } = this.state;

        return (
            <div>
                <p className='skill-title'>{this.props.Title}</p>
                <ProgressBar variant="success" now={currentValue} style={{height: '4px'}} />
                <p className='skill-status'>{this.props.Status}</p>
            </div>
        )
    }
}

export default Skill;