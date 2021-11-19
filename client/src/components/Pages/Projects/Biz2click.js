import React, { Component } from 'react';

import projects from '../../../lib/project-list';
import Grids from '../../Grids';
import Text from '../../Text';

import '../index.css';

class Biz2click extends Component {

    state = {
        projects: []
    }

    componentDidMount = () => {
        this.setState({projects: projects.biz2click})
    }

    render() {

        const { projects } = this.state;

        return (
            <div>
                <Text
                    Size='30px'
                    Align='center'
                    Weight='100'
                    Custom='biz2click-header'
                >
                    2017 - 2019
                </Text>
                <div style={{ display: 'flex', justifyContent: 'center'}}>
                    <Grids 
                        GridItems={ projects }
                        GridColumns="auto auto auto"
                        Width='60%'
                    />
                </div>
            </div>
        )
    }
}

export default Biz2click;