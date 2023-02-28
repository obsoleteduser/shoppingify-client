import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className="links">
                <NavLink><FontAwesomeIcon icon="fa-solid fa-bars" /></NavLink>
                <NavLink><FontAwesomeIcon icon="fa-solid fa-clock-rotate-left" /></NavLink>
                <NavLink><FontAwesomeIcon icon="fa-solid fa-chart-mixed" /></NavLink>
            </div>
        </div>
    )
}
