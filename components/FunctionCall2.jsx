import React from 'react'

const FunctionCall2 = () => {

    const Logdata = (a, b) => {

        console.log(a)
        console.log(b)

    }

  return (
    <div>

    <button onClick={() => Logdata(10, 20)}>Button2</button>

    </div>
  )
}

export default FunctionCall2