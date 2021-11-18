import React, { Component } from 'react'

class Text extends Component {
    render() {
        const { Size, Align, Weight, children, Custom } = this.props;

        return (
            <p className={ Custom } style={{ fontSize: Size, textAlign: Align, fontWeight: Weight }}>{ children }</p>
        )
    }
}

export default Text;