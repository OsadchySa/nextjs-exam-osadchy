import React from 'react';
import Link from 'next/link';
import {getMoviesByGenre} from '@/services/api.service';
import StarRatingComponent from "@/components/StarRatingComponent";


type Movie = {
    id: number;
    title: string;
    poster_path: string,
    vote_average: number
}

type GenreMoviesPageProps = {
    params: {
        id: string
    }
    searchParams: {
        page?: string
    }
}

const GenreMoviesPage = async({ params, searchParams }: GenreMoviesPageProps)=> {
    const currentPage = searchParams?.page ? parseInt(searchParams.page, 10) : 1
    const genreId = parseInt(params.id, 10);
    const {results: movies, total_pages} = await getMoviesByGenre(genreId, currentPage)
    console.log(movies)
    return (
        <div>
            <h2>Movies in this Genre</h2>
            <div className="moviesPage">
                {movies.map((movie: Movie) => (
                    <div className="littleCardMovie" key={movie.id}>
                        <Link href={{
                            pathname:'/movies/'+movie.title,
                            query:{data:JSON.stringify(movie)}
                        }}>
                            <img
                                className="allOfImg"
                                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                alt={movie.title}
                            />
                        </Link>
                        <Link className={'genresMenu'}href={{
                            pathname:'/movies/'+movie.title,
                            query:{data:JSON.stringify(movie)}
                        }}>
                            <p>{movie.title}</p>
                        </Link>
                        <StarRatingComponent rating={movie.vote_average}/>
                    </div>
                ))}
            </div>


            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px'}}>
                <Link href={`/genres/${genreId}?page=${currentPage - 1}`} passHref>
                    <button className={'pagBut'}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                </Link>
                <div>
                    Page {currentPage}
                </div>
                <Link href={`/genres/${genreId}?page=${currentPage + 1}`} passHref>
                    <button className={'pagBut'}
                        disabled={currentPage === movies.total_pages}
                    >
                        Next
                    </button>
                </Link>
            </div>
        </div>
    );
}


export default GenreMoviesPage