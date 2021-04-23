import './Home.css';
import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie.js';


export default class Home extends React.Component {

  state = {
    isLoading: true,
    renderTime: Date.now()
  }

  render(){
    console.log("render");
    console.log(this.state);
    const {isLoading, movies} = this.state;
    return <section className="container">
      {isLoading ? (
        <div className="loader">
          <span className="loader_text">Loading...</span>
        </div>
      ) : (
        <div className="movies">
          {movies.map(movie =>
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              summary={movie.summary.length > 180 ? `${movie.summary.slice(0, 160)}...` : movie.summary}
              year={movie.year}
              poster={movie.medium_cover_image}
              genres={movie.genres}
            />
          )}
        </div>
      )}
    </section>
  }

  async componentDidMount(){
    const {data: {data: {movies}}} = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
    this.setState({movies, isLoading: false});
    console.log(this.state);
  }

}