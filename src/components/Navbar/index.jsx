import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

import { ReactComponent as Logo } from '../../assets/logo.svg'
import { ReactComponent as Cart } from '../../assets/cart.svg'
import { ReactComponent as Menu } from '../../assets/menu.svg'
import { ReactComponent as History } from '../../assets/history.svg'
import { ReactComponent as Statistics } from '../../assets/statistics.svg'

export const Navbar = () => {
    return (
        <div className='Navbar'>
            <Logo className="logo"></Logo>
            <div className="links">
                <NavLink className='link menu' to="/dashboard/">
                    <Menu className="link-icon"/>
                </NavLink>
                <NavLink className='link history' to="/dashboard/history">
                    <History className="link-icon"/>
                    </NavLink>
                <NavLink className='link statistics' to="/dashboard/statistics">
                    <Statistics className="link-icon"/>
                    </NavLink>
            </div>
            <div className="cart-container">
           <span style={{margin: '.4rem'}}> <Cart className="cart"></Cart></span>
            <span className='products-number'> {5}</span>
            </div>
        </div>
    )
}
