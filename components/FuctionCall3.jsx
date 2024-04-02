import React from 'react'
import SecondComponent from './SecondComponent'

const FuctionCall3 = () => {

    const DataT = (a, b) => {
        console.log("lOgging Data");
        console.log(a)
        console.log(b)

    }

  return (
    <div>

    <SecondComponent keyname={DataT}>A child value</SecondComponent>

    </div>
  )
}

export default FuctionCall3