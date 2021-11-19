import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import './index.css';

class Grids extends Component {
    render() {
        const gridItems = this.props.GridItems;
        return (
            <div className="grid-container" style={{gridTemplateColumns: this.props.GridColumns, width: this.props.Width}}>
                { gridItems.map((item, index) => 
                    <div className="grid-item" key={index}>
                        <Card className='main-card'>
                            { item.image ?
                                !item.status ?
                                    <Card.Img variant="top" style={{ height: '80px', width: '100%'}} src={ item.image } />
                                    :
                                    <a href={ item.url } rel="noreferrer" target="_blank">
                                        <Card.Img variant="top" style={{ height: '70px', width: '100%'}} src={ item.image } />
                                    </a>
                            :
                            ''
                            }
                            <Card.Body className={ !item.status ? 'invalid-overlay' : ''} >
                                <Card.Title>{ item.name }</Card.Title>
                                { item.description ?
                                    <Card.Text>{ item.description }</Card.Text>
                                :
                                ''
                                } 
                            </Card.Body>
                        </Card>
                    </div>
                ) }
            </div>
        )
    }
}

export default Grids;