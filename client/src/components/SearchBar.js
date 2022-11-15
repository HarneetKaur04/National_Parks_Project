import React from 'react'

const SearchBar = () => {
  return (
        <div className="ui massive icon input">
            <input type="text" placeholder="Search Contact..." onChange={searchHandler}/>
            <i className="search icon"></i>
        </div>
  )
}

export default SearchBar