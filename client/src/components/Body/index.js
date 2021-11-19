import React, { Component } from 'react'
import { Routes, Route } from 'react-router';

import Home from '../Pages/Home';
import About from '../Pages/About';
import Skills from '../Pages/Skills';
import Lemverify from '../Pages/Projects/Lemverify';
import Biz2click from '../Pages/Projects/Biz2click';

import CONFIG from '../../lib/config';

import './index.css';

class Body extends Component {
    render() {
        return (
            <div className='main-body'>
                <Routes>
                    <Route exact path={CONFIG.repo} element={<Home />} />
                    <Route path={CONFIG.repo + '/about'} element={<About />} />
                    <Route path={CONFIG.repo + '/skills'} element={<Skills />} />
                    <Route path={CONFIG.repo + '/projects/lemverify'} element={<Lemverify />} />
                    <Route path={CONFIG.repo + '/projects/biz2click'} element={<Biz2click />} />
                </Routes>
            </div>
        )
    }
}

export default Body;