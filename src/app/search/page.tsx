import React from 'react';
import {getMoviesBySearch} from "@/services/api.service";
import Link from "next/link";

type SearchPageProps = {
    searchParams: { query?: string };
};

const SearchPage = async ({ searchParams }: SearchPageProps) => {
    const query = searchParams.query || '';
    const movies = query ? await getMoviesBySearch(query) : [];

    return (
        <div className={'searchDiv'}>

            <form action="/search" method="get">
                <input
                    className={'searchInput'}
                    type="text"
                    name="query"
                    defaultValue={query}
                    placeholder="Search for a movie..."
                    required
                />
                <button className={'searchBut'} type="submit">Search</button>
            </form>

            {movies.length > 0 && (
                <div>

                    {movies.map((movie) => (
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
                            <h3>{movie.title}</h3> <div>release date:{movie.release_date}</div>

                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchPage;