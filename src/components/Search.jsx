import React, { useState } from 'react';
import './Search.css';

const Search = () => {
  const [query, setQuery] = useState('');
  const [items] = useState([
    
  ]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className='search-bar'>
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={handleChange}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    
    </div>
  );
};

export default Search;
