import React from 'react'
import PropTypes from 'prop-types';
import "./Movie.css";

export default function Movie({id, title, summary, year, poster, genres}){
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie-data">
        <h3 className="movie-title">{title}</h3>
        <h5 className="movie-year">{year}</h5>
        <p className="movie-summary">{summary}</p>
        <ul className="movie-genres">
          {genres.map((genre, index) => (
            <li key={index} className="movie-genres-genre">{genre}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}