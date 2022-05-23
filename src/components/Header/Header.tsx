import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props: any)=> {
    return (
        <header className={s.header}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Logo%21_Logo.svg/1200px-Logo%21_Logo.svg.png"
                alt=""/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div> {props.login} <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;
