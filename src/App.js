import React, {useState} from 'react'

import './App.css';
import AddMovie from './Component/AddMovie';
import MovieList from './Component/MovieList';
import movies from './movieData';
import Filter from './Component/Filter';

function App() {
const [movieList, setMovieList] = useState(movies);
const [searchInput, setSearchInput] = useState({searchInput:'', searchRate: 0});
const getInputData = (data) => {
  setMovieList([...movieList,data]);
};
const getSearchData = (SearchData) => {
  setSearchInput(SearchData);
}


  return (
    <div className="App">
      <header >
        <Filter getSearchData={getSearchData} />
        <AddMovie getInputData={getInputData}/>
        <MovieList searchInput={searchInput} movies={movieList} />
      </header>
    </div>
  );
}

export default App;
