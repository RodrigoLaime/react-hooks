import React from 'react'

const Search = ({ search, searchInput, handleSearch }) => {
  return (
    <div className='search'>
      <label htmlFor="input">Search</label>
      <input className='' type="text" value={search} ref={searchInput} onChange={handleSearch} id='input' />
    </div>
  )
}

export default Search;