import React from 'react'

const IfCondition = () => {

    let product_name = "Dell Laptop"

    if (product_name === "HP Laptop") {

  return (
    <>
        <h1>Selected product is a HP Laptop</h1>
    </>
  )
}

    else if (product_name === "Dell Laptop")

    return (
        <>
        <h1>Selected product is a Dell Laptop</h1>
        </>
    )

    else {

        return (
            <>
            <h1>Unknow product selected</h1>
            </>
        )
    }

}

export default IfCondition