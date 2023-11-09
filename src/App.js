import AddItem from './AddItem';
import './App.css';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import React, { useState } from 'react'
import SearchItem from './SearchItem';

function App() {
  const[items,setItems]=useState(JSON.parse(localStorage.getItem('todo_list'))
   )
const[newItem,setNewItem]=useState('')
const[search,setSearch]=useState('')
const addItems=(item)=>{
  const id=items.length ? items[items.length-1].id +1:1;
  const addNewItem={id,checked:false,item}
  const listItems=[...items,addNewItem]
  setItems(listItems)
  localStorage.setItem('todo_list',JSON.stringify(listItems))

}
const handledCheck=(id)=>{
  const listItems=items.map((item)=>
  item.id===id ? {...item,checked:!item.checked}:item)
  setItems(listItems)
  localStorage.setItem('todo_list',JSON.stringify(listItems))
}
  
const handledDeleted=(id)=>{
  const listItems=items.filter((item)=>item.id!==id)
  setItems(listItems)
  localStorage.setItem('todo_list',JSON.stringify(listItems))
}
const handledSubmit=(e)=>{
    e.preventDefault()
    if(!newItem) return;
  console.log(newItem);
  addItems(newItem)
  setNewItem('')
}
  return (
    <div className='App'>
      <Header title={'Do to List Clone'}/>
      <AddItem
      newItem={newItem}
      setNewItem={setNewItem}
      handledSubmit={handledSubmit}
      />
      <SearchItem
      search={search}
      setSearch={setSearch}
      />
      <Content
      items={items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
      handledCheck={handledCheck}
      handledDeleted={handledDeleted}
      />
      <Footer length={items.length}/>
     </div> 
  );
}

export default App;
