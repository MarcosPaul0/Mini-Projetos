import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import {HashRouter} from 'react-router-dom'

import Routes from './Routes'

import Header from '../templates/Header'
import Logo from '../templates/Logo'
import Navigation from '../templates/Navigation'

export default function() {
    return (
        <HashRouter>
            <div className="app">
                <Logo/>
                <Header/>
                <Navigation/>
                <Routes/>
            </div>
        </HashRouter>
    )
}