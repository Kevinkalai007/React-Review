import React from 'react'

const IfCondition2 = () => {

    let product_name = "Dell Laptop"

    let result = null

    if (product_name === "HP Laptop") {

        result = <h1>Selected product is a HP Laptop</h1>
}

    else if (product_name === "Dell Laptop")

    {
        result = <><h1>Selected product is a Dell Laptop</h1>
        <h2>Best seller</h2>
        </>
    }

    else {

       result = <h1>Unknow product selected</h1>
    }

    return (

        <>
        {result}
        </>
    )

}

export default IfCondition2