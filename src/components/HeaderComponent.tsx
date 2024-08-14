import React from 'react';
import Link from "next/link";

const HeaderComponent = () => {
    return (
        <div className={'headerMain'}>
            <div className={'headerMinDiv'}>
                The Movie DB
            </div>
            <div className={'headerMinDiv'}>
                <Link href={'/movies'}>MOVIES</Link>
            </div>
            <div className={'headerMinDiv'}>
                <Link href={'/genres'}>Genres</Link>
            </div>
            <div className={'headerMinDiv'}>
                Search
            </div>
            <div className={'headerMinDiv'}>
                Theme
            </div>
        </div>
    );
};

export default HeaderComponent;