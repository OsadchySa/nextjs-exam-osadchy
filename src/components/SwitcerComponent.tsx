'use client';
import React, { useEffect, useState } from 'react';

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState('light')
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme')
        if (storedTheme) {
            setTheme(storedTheme)
            document.documentElement.setAttribute('data-theme', storedTheme)
        }
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
        document.documentElement.setAttribute('data-theme', newTheme)
        localStorage.setItem('theme', newTheme)
    };
    return (
        <button className={'switchBut'} onClick={toggleTheme}>
            {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        </button>
    )
}

export default ThemeSwitcher