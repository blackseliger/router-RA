import React from 'react'
import { NavLink } from 'react-router-dom'

function Menu() {
    return (
        <nav className="menu">
            <NavLink end to={'/'} className="menu__item" >Главная</NavLink>
            <NavLink end to={'drift'} className="menu__item" >Дрифт-такси</NavLink>
            <NavLink end to={'timeattack'} className="menu__item">Time Attack</NavLink>
            <NavLink end to={'forza'} className="menu__item" >Forza Karting</NavLink>
        </nav>
    )

}

export default Menu