import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Logo%21_Logo.svg/1200px-Logo%21_Logo.svg.png"
                alt=""/>
        </header>
    )
}

export default Header;
