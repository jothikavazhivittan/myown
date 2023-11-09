import ItemsList from "./ItemsList";

const Content = ({items,handledCheck,handledDeleted}) => {

 return (
<main>
  {(items.length)?(
    <ItemsList
    items={items}
    handledCheck={handledCheck}
    handledDeleted={handledDeleted}
    />
  ):(
    <p style={ {marginTop:2}}>Your list is empty</p>
  )
}
</main>
  
  )
}

export default Content