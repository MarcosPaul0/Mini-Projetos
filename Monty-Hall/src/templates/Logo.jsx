import React from 'react'
import logo from '../assets/img/montyLogo.png'
import './Logo.css'

export default function() {
   return (
        <aside className="logo">
            <img src={logo} alt="Logo"/>
        </aside>
   ) 
}