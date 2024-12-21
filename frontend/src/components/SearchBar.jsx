import React, { useState } from 'react';

const SearchBar = ({ onSearch, loading }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) onSearch(query);
  };

  return (
    <div className="flex items-center justify-center p-4">
      <input
        type="text"
        className="border rounded-lg p-2 w-2/3 lg:w-1/2 focus:outline-none focus:ring-2 focus:ring-chetwode-blue-500"
        placeholder="Enter your search query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Search query"
      />
      <button
        className={`bg-chetwode-blue-500 text-white rounded-lg px-4 py-2 ml-4 transition duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-chetwode-blue-600'}`}
        onClick={handleSearch}
        disabled={loading}
        aria-label="Search button"
      >
        {loading ? 'Searching...' : 'Search'}
      </button>
    </div>
  );
};

export default SearchBar;
