import React from "react";
import {getMoviesByNumOfPage} from '@/services/api.service';
import Link from 'next/link';
import StarRatingComponent from "@/components/StarRatingComponent";


interface MoviesPageProps {
    searchParams: { page?: string }
}

interface Movie {
    id: number;
    title: string;
    poster_path: string;
    vote_average: number
}



const MoviesPage = async ({ searchParams }: MoviesPageProps) => {
    const currentPage = searchParams?.page ? parseInt(searchParams.page, 10) : 1;
    const movies: any = await getMoviesByNumOfPage(currentPage);

    return (
        <div>
            <div className="moviesPage">
                {movies.results.map((movie: Movie) => (
                    <div className="littleCardMovie" key={movie.id}>
                        <Link href={{
                            pathname: '/movies/' + movie.title,
                            query: { data: JSON.stringify(movie) }
                        }}>
                            <img
                                className="allOfImg"
                                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                alt={movie.title}
                            />
                        </Link>
                        <Link className={'genresMenu'} href={{
                            pathname: '/movies/' + movie.title,
                            query: { data: JSON.stringify(movie) }
                        }}>
                            <h3>{movie.title}</h3>
                        </Link>
                        <StarRatingComponent rating={movie.vote_average} />
                    </div>
                ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
                <Link href={`?page=${currentPage - 1}`}>
                    <button className={'pagBut'}
                            disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                </Link>
                <div>
                    Page {currentPage} of {movies.total_pages}
                </div>
                <Link href={`?page=${currentPage + 1}`}>
                    <button className={'pagBut'}
                            disabled={currentPage === movies.total_pages}
                    >
                        Next
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default MoviesPage