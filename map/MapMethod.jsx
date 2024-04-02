import React from 'react'

const MapMethod = () => {

    const dataset = [

        {
            id: 1,
            lang:"Tamil",
            Mark: 95,
            stage: true
        },

        {
            id:  2,
            lang: "English",
            Mark: 96,
            stage: true
        },

        {
            id: 3,
            lang: "Maths",
            Mark: 100,
            stage: true
        },

        {
            id: 4,
            lang: "Science",
            Mark: 99,
            stage: true
        }
    ]

    let result = dataset.map((assignee, index) => {
        return (
            <tr key={assignee.id}>
            {/* <tr key={index}> */}
                <td>{assignee.lang}</td>
                <td>{assignee.Mark}</td>
                <td>{assignee.stage ? "Pass" : "Fail"}</td>
            </tr>
        )
    })

  return (
    <>
        <table>
            <thead>
                <tr>
                    <th>Language</th>
                    <th>Mark</th>
                    <th>Result</th>
                </tr>
            </thead>
            <tbody>
                {result}
            </tbody>
        </table>    
    </>
  )
}

export default MapMethod