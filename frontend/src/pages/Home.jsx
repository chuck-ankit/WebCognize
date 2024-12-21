import React, { useState } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Results from '../components/Results';

const Home = () => {
  const [results, setResults] = useState([]);

  const handleSearch = async (query) => {
    const response = await fetch(`http://localhost:5000/search`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });
    const data = await response.json();
    setResults(data.results);
  };

  return (
    <div>
      <Header />
      <SearchBar onSearch={handleSearch} />
      <Results results={results} />
    </div>
  );
};

export default Home;