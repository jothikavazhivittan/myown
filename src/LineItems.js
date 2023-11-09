import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

const LineItems = ({item,handledCheck,handledDeleted}) => {
  return (
    <div>
        <li className='item'>
      <input
      onChange={()=>handledCheck(item.id)}
      type='checkbox'
      checked={item.checked}
      />
      <label 
      style={(item.checked)?{textDecoration:'line-through'}:null}
      onDoubleClick={()=>handledCheck(item.id)}
      >{item.item}</label>
      <FaTrashAlt
      onClick={()=>handledDeleted(item.id)}
      role='button'
      tabIndex='0'
      aria-label={`Delete ${item.item}`}
      />
    </li>
    </div>
  )
}

export default LineItems