const baseUrl = 'https://api.themoviedb.org/3';
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NjFkOTYzMGRlNTczNjg2YmJkYzQzNDNkNzllZjVjZCIsIm5iZiI6MTcyMzM4NTQyNC40MzIyNDEsInN1YiI6IjY2YjhjMjUwMjM0ZjU0ZjY0N2JmYzE2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jCT-xIZsN4wU2-ZXOsjSSjCtjyrM5TZkB_HRgkN068A';

interface Movie {
    id: number,
    title: string,
    overview: string,
    release_date: string,
    poster_path: string
}

interface PaginatedMoviesResponse {
    page: number,
    results: Movie[],
    total_pages: number,
    total_results: number
}


export const getMoviesByNumOfPage = async (page: number = 1):Promise<PaginatedMoviesResponse> => {
    const response = await fetch(`${baseUrl}/discover/movie?page=${page}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        }
    })
    const data = await response.json()
    return data
}

interface Genre {
    id: number,
    name:string
}

interface GenresResponse {
    genres: Genre[]
}

export const getGenres = async (): Promise<Genre[]> => {
    const response = await fetch(`${baseUrl}/genre/movie/list`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        }
    })
    const data = await response.json()
    return data.genres
}



export const getMoviesByGenre = async (genreId: number, page: number) => {
    const response = await fetch(`${baseUrl}/discover/movie?with_genres=${genreId}&page=${page}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        }
    })
    const data = await response.json()
    return {
        results: data.results,
        total_pages: data.total_pages
    }

}
export const getMoviesBySearch = async (query: string): Promise<Movie[]> => {
    const encodedQuery = encodeURIComponent(query);
    const response = await fetch(`${baseUrl}/search/movie?query=${encodedQuery}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        }
    })
    const data = await response.json()
    return data.results
}