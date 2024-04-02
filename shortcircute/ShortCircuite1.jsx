import React from 'react'

const ShortCircuite1 = () => {

    let student_name = "Harish"

    let result = student_name === "Harish" && <h1>Best student</h1>

  return (

    <div>{result}</div>

  )
}

export default ShortCircuite1