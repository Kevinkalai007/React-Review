import React from 'react'

const TernaryOperator = () => {

    let course_person = "kalai"

    let result = course_person === "kalai" ? <h1>Valid person</h1> : <h1>Invalid person</h1>

  return (


    <div>{result}</div>


  )
}

export default TernaryOperator