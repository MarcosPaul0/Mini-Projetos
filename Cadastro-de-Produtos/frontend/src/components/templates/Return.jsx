import React from 'react'
import {Link} from 'react-router-dom'

export default props => {
    const classText = `mt-4 ml-4 py-2 px-6 rounded-lg shadow-lg bg-${props.color}-300 hover:bg-${props.color}-400 border border-gray-400`

    return (
        <Link to={props.link} className={classText}>
            {props.text}
        </Link>
    )
}