import React, { Component } from 'react'

class Text extends Component {
    render() {
        const { Size, Align, Weight, children } = this.props;

        return (
            <p style={{ fontSize: Size, textAlign: Align, fontWeight: Weight }}>{ children }</p>
        )
    }
}

export default Text;