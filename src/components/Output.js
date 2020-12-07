import React from 'react'
import OutputRow from './OutputRow'

const Output = (props) => {
    const { input, result } = props

    return (
        <div>
            <OutputRow value={result} textSize={{fontSize: '20px'}} />
            <OutputRow value={input}  />
        </div>
    )
}

export default Output
