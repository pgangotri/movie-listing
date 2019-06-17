import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import '../styles/movie-display.css';

import movieIcon from '../assets/no-poster-available.jpg';

class DisplayMovies extends React.Component {

  componentDidMount() {
    window.addEventListener('scroll', (e) => this.handleScroll(e));
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll = (e) => {
    const element = e.target.scrollingElement;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      this.props.handlePagination();
    }
  };

  addDefaultSrc = (e) => {
    e.target.onerror = null;
    e.target.src = movieIcon;
  };

  renderMovieList = () => {
    return this.props.movies.map((movie, i) => {
      return (
        <div className="col-md-2 mb-3" key={i} >
          <Link to={`/${movie.imdbID}`} style={{"textDecoration": "none", "color": "black"}}>
            <div className="card card-body text-center h-100">
              <img
                className="w-100 mb-2 img-responsive"
                src={movie.Poster}
                onError={ this.addDefaultSrc }
                alt="No Poster"
              />
              <div className="card-title">
                {`${_.truncate(movie.Title, "25")} - ${movie.Year}`}
              </div>
            </div>
          </Link>
        </div>
      )
    })
  };

  render() {
    if(!this.props.movies.length) {
      return <div className="default-display">{this.props.defaultMessage}</div>;
    }
    return (
      <div className="row">
        {this.renderMovieList()}
      </div>
    )
  }
}

export default DisplayMovies;