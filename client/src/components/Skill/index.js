import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';

import './index.css';

class Skill extends Component {
    render() {
        return (
            <div>
                <p className='skill-title'>{this.props.Title}</p>
                <ProgressBar variant="success" now={this.props.Value} style={{height: '5px'}} />
                <p className='skill-status'>{this.props.Status}</p>
            </div>
        )
    }
}

export default Skill;