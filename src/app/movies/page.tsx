import  {getMoviesByNumOfPage} from '@/services/api.service';
import Link from 'next/link';

interface MoviesPageProps {
    searchParams: { page?: string }
}

const MoviesPage = async ({ searchParams }: MoviesPageProps) => {

    const currentPage = searchParams?.page ? parseInt(searchParams.page, 10) : 1
    const movies = await getMoviesByNumOfPage(currentPage)
    return (
        <div>
            <div className="moviesPage">

                {movies.results.map((movie) => (
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
                        <h3>{movie.title}</h3>
                    </div>
                ))}
            </div>


            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
                <Link href={`?page=${currentPage - 1}`}>
                    <button
                        disabled={currentPage === 1}
                        style={{ marginRight: '10px', padding: '5px 10px' }}
                    >
                        Previous
                    </button>
                </Link>
                <div>
                    Page {currentPage} of {movies.total_pages}
                </div>
                <Link href={`?page=${currentPage + 1}`}>
                    <button
                        disabled={currentPage === movies.total_pages}
                        style={{ marginLeft: '10px', padding: '5px 10px' }}
                    >
                        Next
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default MoviesPage;