import React, { useState } from "react";
import { Route } from 'react-router-dom';


import "./App.css";
import AddMovie from "./Component/AddMovie";
import MovieList from "./Component/MovieList";
import movies from "./movieData";
import Filter from "./Component/Filter";
import Description from './Description';

function App() {
  const [movieList, setMovieList] = useState(movies);
  const [searchInput, setSearchInput] = useState({
    searchInput: "",
    searchRate: 0,
  });
  const getInputData = (data) => {
    setMovieList([...movieList, data]);
  };
  const getSearchData = (SearchData) => {
    setSearchInput(SearchData);
  };

  return (
    <div className="App">
      <header>
        <Filter rate={searchInput.searchRate} getSearchData={getSearchData} />
        <AddMovie getInputData={getInputData} />
        <MovieList
          movies={movieList.filter(
            (elm) =>
              elm.title
                .toLowerCase()
                .trim()
                .includes(searchInput.searchInput.toLowerCase().trim()) &&
              elm.rate > searchInput.searchRate
          )}
        />
      </header>
      <Route path='/description/:id' render={(props)=><Description {...props} movies={movieList} />}></Route>
    </div>
  );
}

export default App;
