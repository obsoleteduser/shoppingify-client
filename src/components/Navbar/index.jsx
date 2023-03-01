import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className="links">
                <NavLink to="/dashboard">Products</NavLink>
                <NavLink to="/dashboard/history">History</NavLink>
                <NavLink to="/dashboard/statistics">Statistics</NavLink>
            </div>
        </div>
    )
}
