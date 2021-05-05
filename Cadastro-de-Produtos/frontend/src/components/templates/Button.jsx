import React from 'react'

export default props => {
    const classText = `mt-4 ml-4 py-2 px-6 rounded-lg shadow-lg bg-${props.color}-300 hover:bg-${props.color}-400 border border-gray-400`

    return (
        <button className={classText} onClick={e => props.click()}>
            {props.text}
        </button>
    )
}