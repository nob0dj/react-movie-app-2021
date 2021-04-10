import './App.css';
import React from 'react';
import axios from 'axios';
import Movie from './Movie.js';


export default class App extends React.Component {

  /**
   * 1. constructor는 async로 사용할 수 없다. 즉, constructor안에서 await도 사용불가
   * 2. fetch작업결과를 state에 저장&사용하려는 경우, fetch처리보다 render가 먼저 처리될수 있다.
   */
  constructor(props){
    console.log("constructor");
    super(props);
    /*
    fetch("https://yts-proxy.nomadcoders1.now.sh/list_movies.json")
      .then(response => response.json())
      .then(({data: {movies}}) => {
        //console.log(this.state); // {isLoading: true, renderTime: Date.now()}
        // this.setState({movies}); // Warning: Can't call setState on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the App component.
        this.state = {movies: movies}; // state객체를 대체함. 기존 state속성은 제거.
      }); 
    */
  }
  state = {
    isLoading: true,
    renderTime: Date.now()
  }

  render(){
    console.log("render");
    console.log(this.state);
    const {isLoading, movies} = this.state;
    return <section className="container">
      {isLoading ?
        <div className="loader">
          <span className="loader_text">Loading...</span>
        </div> :
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
      }
    </section>
  }

  async componentDidMount(){
    const {data: {data: {movies}}} = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
    this.setState({movies, isLoading: false});
    console.log(this.state);
  }

}
