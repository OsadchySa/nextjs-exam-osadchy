import React from 'react';
import {getGenres} from "@/services/api.service";
import Link from 'next/link';


 const GenresPage = async () => {
    const genres = await getGenres();

    return (
        <div >
            <h2>Movie Genres</h2>
            <ul>
                {genres.map((genre) => (
                    <li key={genre.id} style={{ marginLeft: '10px', padding: '5px 10px', color: "white" }}>
                        <Link href={`/genres/${genre.id}`}>{genre.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default GenresPage