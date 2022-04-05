import React from 'react'

const Item = (title, stock, price, image) => {
  return (
    <div>

        <div>{title}</div>
        <div>   
           {image}
        </div>
        <div>
            <strong>$ {price}</strong>
        </div>
        <div>
            <strong>{stock} unid. </strong>
        </div>
        <div><strong>Details</strong></div>


    </div>
  )
}

export default Item