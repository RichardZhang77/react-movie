import React from 'react'
import { useState } from 'react';




const Search = ({ searchTerm, setSearchTerm }) => {
  const [placeholder, setPlaceholder] = useState('Search through thousands of movies');

  return (
    <div className="search">
      <div>
        <img src="search.svg" alt="search" />
        <input 
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onFocus={() => setPlaceholder('')}
          onBlur={() => setPlaceholder('Search through thousands of movies')}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  )
}

export default Search