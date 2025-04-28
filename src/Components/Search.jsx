import React from 'react'

function Search({search,setSearch,onSearch}) {
  return (
    <div className='Search'>
         <input 
      type="text"
      placeholder='Enter city'
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      />
    <button onClick={onSearch}>Button</button>
    </div>
    
  )
}

export default Search