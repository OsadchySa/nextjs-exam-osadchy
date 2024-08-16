import React from 'react';
import Link from 'next/link';
import {getMoviesByGenre} from '@/services/api.service';
import StarRatingComponent from "@/components/StarRatingComponent";


type Movie = {
    id: number;
    title: string;
    poster_path: string;
};

type GenreMoviesPageProps = {
    params: {
        id: string;
    };
    searchParams: {
        page?: string;
    };
};

const GenreMoviesPage = async({ params, searchParams }: GenreMoviesPageProps)=> {
    const currentPage = searchParams?.page ? parseInt(searchParams.page, 10) : 1;
    const genreId = parseInt(params.id, 10);
    const {results: movies, total_pages} = await getMoviesByGenre(genreId, currentPage);
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
                        <StarRatingComponent rating={movie.vote_average}/>
                        <p>{movie.title}</p>
                    </div>
                ))}
            </div>


            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px'}}>
                <Link href={`/genres/${genreId}?page=${currentPage - 1}`} passHref>
                    <button
                        disabled={currentPage === 1}
                        style={{marginRight: '10px', padding: '5px 10px'}}
                    >
                        Previous
                    </button>
                </Link>
                <div>
                    Page {currentPage}
                </div>
                <Link href={`/genres/${genreId}?page=${currentPage + 1}`} passHref>
                    <button
                        disabled={currentPage === movies.total_pages}
                        style={{marginLeft: '10px', padding: '5px 10px'}}
                    >
                        Next
                    </button>
                </Link>
            </div>
        </div>
    );
}


export default GenreMoviesPage