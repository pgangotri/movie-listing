import React, { useState, useEffect, useCallback } from 'react';
import _ from 'lodash';

import SearchMovies from './SearchMovies';
import DisplayMovies from './DisplayMovies';
import ImdbService from '../services/ImdbService';

const HomeScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [homeScreenMessage, setHomeScreenMessage] = useState('Search your choice');

  // Fetch Movies when searchTerm or pageNo changes
  useEffect(() => {
    if (searchTerm) {
      fetchMovies(searchTerm, pageNo);
    }
  }, [searchTerm, pageNo]);

  // Function to fetch movies
  const fetchMovies = async (term, page) => {
    try {
      const data = await ImdbService.getMovieListByKeyword(term, page);
      setMovies((prevMovies) =>
        page > 1 ? [...prevMovies, ..._.get(data, 'Search', [])] : _.get(data, 'Search', [])
      );
      setHomeScreenMessage(_.get(data, 'Error', ''));
      setTotalCount(data.totalResults);
    } catch (error) {
      setHomeScreenMessage('Failed to fetch movies');
    }
  };

  // Function to handle search input
  const searchMovies = useCallback((term) => {
    if (term !== searchTerm) {
      setSearchTerm(term);
      setPageNo(1);
      setMovies([]); // Reset movie list on new search
    }
  }, [searchTerm]);

  // Handle infinite scroll pagination
  const handlePaginationOnScroll = () => {
    if (searchTerm && pageNo < Math.ceil(totalCount / 10)) {
      setPageNo((prevPageNo) => prevPageNo + 1);
    }
  };

  return (
    <div className="container">
      <SearchMovies onKeywordChange={searchMovies} searchTerm={searchTerm} />
      <DisplayMovies
        movies={movies}
        defaultMessage={homeScreenMessage}
        handlePagination={handlePaginationOnScroll}
      />
    </div>
  );
};

export default HomeScreen;
