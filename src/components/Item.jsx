import React from 'react'
import ItemCount from './ItemCount'

const Item = ({title, stock, price, image}) => {
  return (
    <div>

        <div>{title}</div>
        <div>   
           <img src={image.url} alt="" />
        </div>
        <div>
            <strong>$ {price}</strong>
        </div>
        <div>
            <strong>{stock} unid. </strong>
        </div>
        <div><strong>Details</strong></div>

        <ItemCount stock="5" initial="0"/>
    </div>
  )
}

export default Item