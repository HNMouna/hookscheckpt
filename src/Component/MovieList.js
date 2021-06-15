import React, {useEffect, useState} from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movies,searchInput}) => {
    const [filteredList, setFilteredList] = useState(movies);
   
    useEffect(() => {
        setFilteredList(
            movies.filter(
            (movie) =>  
            movie.title.toLowerCase().includes(searchInput.searchInput) && 
            movie.rate >= searchInput.searchRate
            ) 
        )
    }, [searchInput]);
    return (
        <div className="App-header">
           {filteredList.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
            ))} 
        </div>
    )
}

export default MovieList
