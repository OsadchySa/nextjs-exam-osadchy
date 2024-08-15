import React from 'react';
import Link from "next/link";

const HeaderComponent = () => {
    return (
        <div className={'headerMain'}>
            <h1 className={'headerMinDiv'}>
                <Link href={'https://www.themoviedb.org/'}>The Movie DB</Link>
            </h1>

            <h1 className={'headerMinDiv'}>
                <Link href={'/movies'}>MOVIES</Link>
            </h1>
            <h1 className={'headerMinDiv'}>
                <Link href={'/genres'}>Genres</Link>
            </h1>
            <h1 className={'headerMinDiv'}>
                <Link href={'/search'}>Search</Link>
            </h1>
            <h1 className={'headerMinDiv'}>
                Theme
            </h1>
        </div>
    );
};

export default HeaderComponent;