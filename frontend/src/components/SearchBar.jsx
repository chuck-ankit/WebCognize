import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) onSearch(query);
  };

  return (
    <div className="flex items-center justify-center p-4">
      <input
        type="text"
        className="border rounded-lg p-2 w-2/3"
        placeholder="Enter your search query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className="bg-chetwode-blue-500 text-white rounded-lg px-4 py-2 ml-4"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;