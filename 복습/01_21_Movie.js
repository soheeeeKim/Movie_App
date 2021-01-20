import React from 'react';

const Movie = ({movie})=>{
    return (
        <div className = "movie">
            <div className = "move-title">{movie.title}</div>
            <div className = "move-year">{movie.year}</div>

        </div>
    );
};
export default Movie