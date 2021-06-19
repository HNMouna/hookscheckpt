import React, { useState } from 'react'

const Description = ({movies,match}) => {
    const [movie,setMovie]=useState(movies.find(el=>el.id===match.params.id))
    return (
        <div>
            <h1>{movie.description}</h1>
        </div>
    )
}

export default Description
