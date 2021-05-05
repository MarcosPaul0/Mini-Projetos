import React from 'react'
import './Navigation.css'

import NavIcon from './NavIcon'

export default function() {
    return (
        <nav className="navigation">
            <NavIcon link="/" icon="fa-home" label="Início"/>
            <NavIcon link="/play" icon="fa-gamepad" label="Jogar"/>
        </nav>
    )
} 