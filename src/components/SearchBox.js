import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
      <input className="nav__search"        
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
  );
}

export default SearchBox;