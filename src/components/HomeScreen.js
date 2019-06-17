import React from 'react';
import _ from 'lodash';

import SearchMovies from './SearchMovies';
import DisplayMovies from './DisplayMovies';
import ImdbService from '../services/ImdbService';

class HomeScreen extends React.Component {
  state = {
    searchTerm: '',
    movies: [],
    pageNo: 1,
    totalCount: 0,
    homeScreenMessage: 'Search your choice',
  };

  searchMovies = (searchTerm) => {
    if(searchTerm !== this.state.searchTerm) {
      this.setState({
        searchTerm,
        pageNo: 1
      });
      this.getMovies(this.state.searchTerm, this.state.pageNo);
    }
  };

  getMovies = (searchTerm, pageNo) => {
    ImdbService.getMovieListByKeyword(searchTerm,pageNo).then(data =>{
      this.setState({
        movies: this.state.pageNo > 1 ? [...this.state.movies, ..._.get(data,'Search', [])] : _.get(data,'Search', []),
        homeScreenMessage: _.get(data,'Error', ''),
        totalCount: data.totalResults,
      });
    });
  };

  handlePaginationOnScroll = () => {
    if(this.state.searchTerm && this.state.pageNo <= (this.state.totalCount/10 + 1)) {
      this.setState({ pageNo: this.state.pageNo +1 });
    }
    this.getMovies(this.state.searchTerm, this.state.pageNo);
  };

  render() {
    return(
      <div className="container">
        <SearchMovies onKeywordChange={ this.searchMovies } searchTerm={this.state.searchTerm}/>
        <DisplayMovies
          movies={ this.state.movies }
          defaultMessage={ this.state.homeScreenMessage }
          handlePagination={ this.handlePaginationOnScroll }
        />
      </div>
    )
  }
}

export default HomeScreen;