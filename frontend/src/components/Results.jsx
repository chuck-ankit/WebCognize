
// Results.js
import React from 'react';

const Results = ({ results, loading }) => {
  if (loading) {
    return <p className="text-center text-chetwode-blue-700">Loading results...</p>;
  }

  if (results === null) {
    return null; // Show nothing initially
  }

  if (results.length === 0) {
    return <p className="text-center text-chetwode-blue-700">No results found. Try a different query.</p>;
  }

  return (
    <div className="p-4">
      <ul className="space-y-4">
        {results.map((result, index) => (
          <li key={index} className="border p-4 rounded-lg bg-chetwode-blue-50 shadow hover:shadow-lg transition-shadow">
            {result.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Results;
