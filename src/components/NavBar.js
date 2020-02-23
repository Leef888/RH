import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <div className="NavBar">
            <div className="div">
                <NavLink className="NavLink" to="/StLots">Пральні машини</NavLink>
            </div>
            <div className="div">
                <NavLink className="NavLink" to="/Contacts">Контакти</NavLink>
            </div>
        </div>
    )
}

export default NavBar;