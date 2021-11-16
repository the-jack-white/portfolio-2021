import React, { Component } from 'react'
import { Routes, Route } from 'react-router';

import Home from '../Pages/Home';
import About from '../Pages/About';
import Skills from '../Pages/Skills';

import './index.css';

class Body extends Component {
    render() {
        return (
            <div className='main-body'>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/skills' element={<Skills />} />
                </Routes>
            </div>
        )
    }
}

export default Body;