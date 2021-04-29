 import React, {useState} from 'react';
import {moviesData} from './Components/moviesData';
import MovieList from './Components/MovieList';
import Search from './Components/SearchMovie/Search';
import AddMovie from './Components/AddMovie/AddMovie';
import './App.css';

function App() {
  const [movieList, setMovieList] = useState(moviesData);
const [nameSearch, setNameSearch] = useState('');
  const [ratingSearch, setRatingSearch] = useState(1);
  const addMovie = (e, newMovie) => {
    e.preventDefault();
    return setMovieList([...movieList, newMovie]);
  };
  return (
    <div className="App">
      <p>Movies</p>
      <Search
        setNameSearch={setNameSearch}
        setRatingSearch={setRatingSearch}
        ratingSearch={ratingSearch}/>
      <MovieList 
      movieList={movieList}
      nameSearch={nameSearch}
      ratingSearch={ratingSearch}/>
      <AddMovie addMovie={addMovie} />
    </div>
  );
}

export default App;
