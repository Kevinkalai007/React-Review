import React from 'react'
import FuctionCall3 from './FuctionCall3'

const SecondComponent = ({course, name, Days, style, children, keyname}) => {
    return (
        <div>
            <h1>SecondComponent</h1>
            <p>React second component</p>
            <p>{course}</p>
            {/* <p>{name}</p> */}
            <p>{Days}</p>
            <p>{style}</p>
            <p>{children}</p>

            <button onClick={() => keyname(10, 20)}>Button3</button>
            
        </div>
    )
}

export default SecondComponent