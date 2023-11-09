import React from 'react'

const SearchItem = ({search,setSearch}) => {
  return (
    <form className='searchForm' onSubmit={(e)=>e}>
        <label htmlFor='search'>Search</label>
        <input
        id='search'
        type='text'
        role='searchbox'
        placeholder='Search Item'
        value={search}
        onChange={(val)=>setSearch(val.target.value)}
        />
    </form>
  )
}

export default SearchItem