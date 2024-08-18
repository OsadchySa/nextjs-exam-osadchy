import React from 'react';
import {getGenres} from "@/services/api.service";
import Link from 'next/link';


 const GenresPage = async () => {
    const genres = await getGenres();

    return (
        <div className={'genreDiv'}>
            {genres.map((genre) => (
                <div key={genre.id} style={{ marginLeft: '10px', padding: '5px 10px', color: "white" }}>
                    <Link className={'genresMenu'} href={`/genres/${genre.id}`}>{genre.name}</Link>
                </div>
            ))}
        </div>
    );
}

export default GenresPage