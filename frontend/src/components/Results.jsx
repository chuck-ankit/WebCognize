import React from 'react';

const Results = ({ results, loading }) => {
  return (
    <div className="p-4">
      {loading ? (
        <p className="text-center text-chetwode-blue-700">Loading results...</p>
      ) : results.length > 0 ? (
        <ul className="space-y-4">
          {results.map((result, index) => (
            <li key={index} className="border p-4 rounded-lg bg-chetwode-blue-50 shadow hover:shadow-lg transition-shadow">
              {result.text}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-chetwode-blue-700">No results found. Try a different query.</p>
      )}
    </div>
  );
};

export default Results;
