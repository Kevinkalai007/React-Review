import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const NewForm = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const Submithandler = event => {
        event.preventDefault()

        const database = {

            username: username,
            password: password
        }

        console.log(database);
        
    }

    // useEffect (()=>console.log(username))

  return (

    <div>
        <h1>Login Form</h1>        

        <form>

        <label>User Name</label>
        <input type="text" value={username} onChange={event => setUsername(event.target.value)}></input>

        <label>Password</label>
        <input type="password" value={password} onChange={event => setPassword(event.target.value)}></input>

        <input type="submit" onClick={(event) => Submithandler(event)} />

        </form>


    </div>

  )
}

export default NewForm