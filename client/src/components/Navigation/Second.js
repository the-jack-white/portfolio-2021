import React, { Component } from 'react';
import { Image, OverlayTrigger, Tooltip } from 'react-bootstrap';

import './index.css'

class Second extends Component {

    renderTooltip = (props, name) => (
        <Tooltip className="button-tooltip" {...props}>
            <p>
                { name }
            </p>
        </Tooltip>
      );

    render() {
        return (
            <div className='second-nav'>
                <div className='second-nav-item'>
                    <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={(props) => this.renderTooltip(props, 'LinkedIn')}
                    >
                        <a href='https://www.linkedin.com/in/the-jack-white' rel="noreferrer" target="_blank" >
                            <Image src="/images/linkedin.png" width='35px' thumbnail />
                        </a>
                    </OverlayTrigger>
                </div>
                <div className='second-nav-item'>
                    <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={(props) => this.renderTooltip(props, 'Github')}
                    >
                        <a href='https://github.com/the-jack-white' rel="noreferrer" target="_blank" >
                            <Image src="/images/github-logo.svg" width='35px' thumbnail />
                        </a>
                    </OverlayTrigger>
                </div>
                <div className='second-nav-item'>
                    <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={(props) => this.renderTooltip(props, 'Download CV')}
                    >
                        <a href='/documents/JackWhiteCV_Nov2021.pdf' rel="noreferrer" target="_blank" download >
                            <Image src="/images/download.png" width='35px' thumbnail />
                        </a>
                    </OverlayTrigger>
                </div>
            </div>
        )
    }
}

export default Second