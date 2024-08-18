import React from 'react';
import StarRatingComponent from "@/components/StarRatingComponent";

const MoviePage = ({searchParams}:any) => {

    let movie = JSON.parse(searchParams.data)
    console.log(movie)
    return (
        <div className={'oneMovie'}>
            <img
                className="allOfImg"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
            />
            <StarRatingComponent rating={movie.vote_average}/>
            <p style={{color:'#e74420'}}>Title: </p>{movie.title}
            <p style={{color:'#e74420'}}>Release date: </p>{movie.release_date}
            <p style={{color:'#e74420'}}>Overview: </p>{movie.overview}
        </div>
    );
};

export default MoviePage;