import React from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItem = ({newItem,setNewItem,handledSubmit}) => {
  return (
    <form className='addForm' onSubmit={handledSubmit}>
        <label htmlFor='addItem'>add items</label>
        <input
        autoFocus
        id='addItem'
        placeholder='Add Item'
        type='text'
        required
        value={newItem}
        onChange={(e)=>setNewItem(e.target.value)}/>
        <button type='submit'
        aria-label='Add Item'
        ><FaPlus/></button>
    </form>
  )
}

export default AddItem