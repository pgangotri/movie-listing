import React, { useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

import '../styles/movie-display.css';
import movieIcon from '../assets/no-poster-available.jpg';

const DisplayMovies = ({ movies, defaultMessage, handlePagination }) => {
  
  // Scroll event handler
  const handleScroll = useCallback(() => {
    const element = document.documentElement;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      handlePagination();
    }
  }, [handlePagination]);

  // Attach event listener on mount and cleanup on unmount
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Fallback image handler
  const addDefaultSrc = (e) => {
    e.target.onerror = null;
    e.target.src = movieIcon;
  };

  // Render movie cards
  const renderMovieList = () => {
    return movies.map((movie, i) => (
      <div className="col-md-2 mb-3" key={i}>
        <Link to={`/${movie.imdbID}`} style={{ textDecoration: "none", color: "black" }}>
          <div className="card card-body text-center h-100">
            <img
              className="w-100 mb-2 img-responsive"
              src={movie.Poster}
              onError={addDefaultSrc}
              alt="No Poster"
            />
            <div className="card-title">
              {`${movie.Title.length > 25 ? movie.Title.slice(0, 25) + "..." : movie.Title} - ${movie.Year}`}
            </div>
          </div>
        </Link>
      </div>
    ));
  };

  return movies.length ? (
    <div className="row">{renderMovieList()}</div>
  ) : (
    <div className="default-display">{defaultMessage}</div>
  );
};

export default DisplayMovies;
