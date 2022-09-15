import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom"


const Navbar = () => {

    return (
        <nav className={s.nav}>
                <NavLink to ="/" className={s.item}>Profile</NavLink>
                <NavLink to ="/massage" className={s.item}>Massage</NavLink>
                <NavLink to ="/news" className={s.item}>News</NavLink>
                <NavLink to ="/music" className={s.item}>Music</NavLink>
                <NavLink to ="/settening" className={s.item}>Settenings</NavLink>
        </nav>
    );
}
export default Navbar;