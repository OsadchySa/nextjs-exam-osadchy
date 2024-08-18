import React from 'react';
import Link from "next/link";
import SwitcerComponent from "@/components/SwitcerComponent";

const HeaderComponent = () => {
    return (
        <div className={'headerMain'}>
            <h1 className={'headerMinDiv'}>
                <Link className={'linkHead'} href={'https://www.themoviedb.org/'}>The Movie DB</Link>
            </h1>

            <h1 className={'headerMinDiv'}>
                <Link className={'linkHead'} href={'/movies'}>MOVIES</Link>
            </h1>
            <h1 className={'headerMinDiv'}>
                <Link className={'linkHead'} href={'/genres'}>GENRES</Link>
            </h1>
            <h1 className={'headerMinDiv'}>
                <Link className={'linkHead'} href={'/search'}>search</Link>
            </h1>
            <SwitcerComponent/>
        </div>
    );
};

export default HeaderComponent;