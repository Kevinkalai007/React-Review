import React from 'react'
import { useState } from 'react'

const Usestate = () => {

    let [username, setUsername] = useState("Ragul")

  return (
    <div>
        {username} 

        <button onClick={() => setUsername("Goodboy") }>The</button>

    </div>
  )
}

export default Usestate