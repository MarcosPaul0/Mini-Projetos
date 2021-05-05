import React from 'react'
import {HashRouter} from 'react-router-dom'
import './App.css'

import Logo from '../templates/Logo'
import Header from '../templates/Header'
import Nav from '../templates/Nav'
import Routes from './Routes'

export default props => 
    <HashRouter>
        <div className="app">
            <Logo/>
            <Header/>
            <Nav/>
            <Routes/>
        </div>
    </HashRouter>