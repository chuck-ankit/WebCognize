import React, { useState } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Results from '../components/Results';

const Home = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (query) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`http://localhost:5000/search`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setResults(data.results);
    } catch (err) {
      setError('An error occurred while fetching results. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-chetwode-blue-100">
      <Header />
      <SearchBar onSearch={handleSearch} loading={loading} />
      {error && <p className="text-red-500 text-center">{error}</p>}
      <Results results={results} loading={loading} />
    </div>
  );
};

export default Home;
