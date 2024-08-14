const baseUrl = 'https://api.themoviedb.org/3';
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NjFkOTYzMGRlNTczNjg2YmJkYzQzNDNkNzllZjVjZCIsIm5iZiI6MTcyMzM4NTQyNC40MzIyNDEsInN1YiI6IjY2YjhjMjUwMjM0ZjU0ZjY0N2JmYzE2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jCT-xIZsN4wU2-ZXOsjSSjCtjyrM5TZkB_HRgkN068A';

export const getMoviesByNumOfPage = async (page: number = 1) => {
    const response = await fetch(`${baseUrl}/discover/movie?page=${page}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        }
    })
    const data = await response.json()
    console.log(data.page)
    return data
}

export const getGenres = async () => {
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

export const getMoviesByGenre = async (genreId: number, page: number = 1) => {
    const response = await fetch(`${baseUrl}/discover/movie?with_genres=${genreId}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        }
    })
    const data = await response.json()
    return {
        results: data.results,
        totalPages: data.total_pages
    }
}