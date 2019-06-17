import React from 'react';
import '../styles/search-movie.css';

class SearchMovies extends React.Component {
  state = { value: '' };

  timout = null;

  doSearch = (event) => {
    this.setState( { value: event.target.value });
    clearTimeout(this.timout);

    this.timout = setTimeout(() => { this.props.onKeywordChange(this.state.value) }, 50);
  };

  render() {
    return (
      <div className="row mt-2 mb-2">
        <div className="col-12">
          <input
            className="form-control"
            type="text"
            value={this.props.searchTerm}
            placeholder="Search Movies, TV Shows, Web Series..."
            onChange={ this.doSearch }
          />
        </div>
      </div>
    );
  }
}

export default SearchMovies;