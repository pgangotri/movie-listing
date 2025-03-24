import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/movie-detail.css';
import ImdbService from '../services/ImdbService';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const data = await ImdbService.getMovieDetails(movieId);
      setDetails(data);
    };
    fetchMovieDetails();
  }, [movieId]);

  const { Title, Rated, Writer, Released, Actors, Genre, Plot, Poster, imdbRating, Runtime } = details;

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-4 card card-body">
          <img src={Poster || 'placeholder.jpg'} className="img-fluid" alt={Title || 'Movie Poster'} />
        </div>
        <div className="col-md-8">
          <h1>{Title || 'N/A'}</h1>
          <ul className="list-group">
            <li className="list-group-item"><strong>Genre: </strong><span>{Genre || 'N/A'}</span></li>
            <li className="list-group-item"><strong>Runtime: </strong><span>{Runtime || 'N/A'}</span></li>
            <li className="list-group-item"><strong>Released: </strong><span>{Released || 'N/A'}</span></li>
            <li className="list-group-item"><strong>Rated: </strong><span>{Rated || 'N/A'}</span></li>
            <li className="list-group-item"><strong>IMDB: </strong><span>{imdbRating || 'N/A'}</span></li>
            <li className="list-group-item"><strong>Writer: </strong><span>{Writer || 'N/A'}</span></li>
            <li className="list-group-item"><strong>Actors: </strong><span>{Actors || 'N/A'}</span></li>
          </ul>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-md-12 movie-plot">
          <strong>About: </strong><span>{Plot || 'No description available.'}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
