import axios from 'axios';
import _ from 'lodash';

const API_KEY = 'b90a6e75';

const IMDB_INSTANCE = axios.create({
  baseURL: 'http://www.omdbapi.com'
});

export default {
  getMovieListByKeyword: async (keyword, pageNo) => {
    const response = await IMDB_INSTANCE.get(`/?s=${keyword}&page=${pageNo}&apiKey=${API_KEY}`);
    return _.get(response,'data', {});
  },

  getMovieDetails: async (movieId) => {
    const response = await IMDB_INSTANCE.get(`/?i=${movieId}&plot=full&apiKey=${API_KEY}`);
    return _.get(response,'data', {});
  },
};