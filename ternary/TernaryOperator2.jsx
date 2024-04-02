import React from 'react'

const TernaryOperator2 = () => {

    let course_trainner = "Kishore"

    let result = course_trainner === "Kishore" ? <div>

        <h1>Best Trainner</h1> 

        </div>:

        <div>

        <h1>Not an experienced Trainner</h1>

        </div>

  return (

    <div>{result}</div>
  )
}

export default TernaryOperator2