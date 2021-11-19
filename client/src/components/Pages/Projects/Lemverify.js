import React, { Component } from 'react';

import projects from '../../../lib/project-list';
import Grids from '../../Grids';
import Text from '../../Text';

class Lemverify extends Component {

    state = {
        projects: []
    }

    componentDidMount = () => {
        this.setState({projects: projects.lemverify})
    }

    render() {

        const { projects } = this.state;

        return (
            <div>
                <Text
                    Size='30px'
                    Align='center'
                    Weight='100'
                    Custom='skills-header'
                >
                    2020 - Present
                </Text>
                <div style={{ display: 'flex', justifyContent: 'center'}}>
                    <Grids 
                        GridItems={ projects }
                        GridColumns="auto auto auto auto"
                        Width='100%'
                    />
                </div>
            </div>
        )
    }
}

export default Lemverify;