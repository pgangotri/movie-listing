import React, { useState, useEffect } from 'react';
import '../styles/search-movie.css';

const SearchMovies = ({ searchTerm, onKeywordChange }) => {
  const [value, setValue] = useState(searchTerm);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onKeywordChange(value);
    }, 300); // Adjust debounce delay as needed

    return () => clearTimeout(timeout);
  }, [value, onKeywordChange]);

  return (
    <div className="row mt-2 mb-2">
      <div className="col-12">
        <input
          className="form-control"
          type="text"
          value={value}
          placeholder="Search Movies, TV Shows, Web Series..."
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchMovies;
