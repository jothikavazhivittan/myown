import React from 'react'
import LineItems from './LineItems'

const ItemsList = ({items,handledCheck,handledDeleted}) => {
  return (
    <div>
        <ul>
  {items.map((item)=>(
    <LineItems
    item={item}
    key={item.id}
    handledCheck={handledCheck}
    handledDeleted={handledDeleted}
    />
  ))}
 </ul>
    </div>
  )
}

export default ItemsList