import React from 'react'
import Item from './Item'

const ItemList = ( {items} ) => {
 
  return (
    
    <>
    <div className='container-fluid'>
      <div className='row'>
        {
            items.length > 0
            ? items.map(item => <Item key={item.id} title= {item.name} price= {item.price} image={item.image} stock= {item.stock}/> )
            : <p>Cargando...</p>
        }
      </div>
    </div>  
    </>
  ) 
}

export default ItemList;