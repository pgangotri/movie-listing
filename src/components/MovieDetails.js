import React from 'react';

import '../styles/movie-detail.css';
import ImdbService from '../services/ImdbService';

class MovieDetails extends React.Component {
  state = { details: {} };

  async componentDidMount() {
    const movieId = this.props.location.pathname.replace('/','');
    const details = await ImdbService.getMovieDetails(movieId);
    this.setState({ details })
  }

  render() {
    const { Title, Rated, Writer, Released, Actors, Genre, Plot, Poster, imdbRating, Runtime } = this.state.details;
    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-4 card card-body">
            <img src={Poster} className="" alt="Poster"/>
          </div>
          <div className="col-md-8">
            <h1>{Title}</h1>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Genre: </strong><span>{Genre}</span>
              </li>
              <li className="list-group-item">
                <strong>Runtime: </strong><span>{Runtime}</span>
              </li>
              <li className="list-group-item">
                <strong>Released: </strong><span>{Released}</span>
              </li>
              <li className="list-group-item">
                <strong>Rated: </strong><span>{Rated}</span>
              </li>
              <li className="list-group-item">
                <strong>IMDB: </strong><span>{imdbRating}</span>
              </li>
              <li className="list-group-item">
                <strong>Writer: </strong><span>{Writer}</span>
              </li>
              <li className="list-group-item">
                <strong>Actors: </strong><span>{Actors}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-12 movie-plot">
            <strong>About : </strong><span>{Plot}</span>
          </div>
        </div>
      </div>
    )
  }
};

export default MovieDetails;