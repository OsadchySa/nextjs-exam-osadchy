import React from 'react';

const MoviePage = ({searchParams}:any) => {
    let movie = JSON.parse(searchParams.data)
    //console.log(movie)
    return (
        <div className={'oneMovie'}>
            <img
                className="allOfImg"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
            />
            {movie.title}
        </div>
    );
};

export default MoviePage;