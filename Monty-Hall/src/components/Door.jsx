import React from 'react'
import './Door.css'

export default props =>
    <div className="door-area">
        <div className="door" onClick={e => props.clickDoor(e)}>
            <div className="number">{props.number}</div>
            <div className="handle" onClick={e => props.clickHandle(e)}></div>
            {props.children}
        </div>
        <div className="bottom"></div>
    </div>