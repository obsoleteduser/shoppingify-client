import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

import { ReactComponent as Logo } from '../../assets/logo.svg'
import { ReactComponent as Cart } from '../../assets/cart.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Navbar = () => {
    return (
        <div className='Navbar'>
            <Logo></Logo>
            <div className="links">
            <FontAwesomeIcon icon={["fal", "coffee"]} />
        
                <NavLink className='link' to="/dashboard/">Products</NavLink>
                <NavLink className='link' to="/dashboard/history">History</NavLink>
                <NavLink className='link' to="/dashboard/statistics">Statistics</NavLink>
            </div>
            <Cart className="cart"></Cart>
        </div>
    )
}
