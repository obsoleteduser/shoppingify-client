import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

import { ReactComponent as Logo } from '../../assets/logo.svg'
import { ReactComponent as Cart } from '../../assets/cart.svg'
import { ReactComponent as Menu } from '../../assets/menu.svg'
import { ReactComponent as History } from '../../assets/history.svg'
import { ReactComponent as Statistics } from '../../assets/statistics.svg'
import { useDispatch, useSelector } from 'react-redux'
import { update } from '../../redux/slices/componentSlice'
import useToggle from '../../hooks/useToggle'
import useLogOut from '../../hooks/useLogOut'


export const Navbar = () => {

    const logOut = useLogOut()
   const { toggleList, toggleMenu } = useToggle()
   const menu = useSelector(state => state.componentReducer.menu)


    return (
        <div className='Navbar'>
            <Logo onClick={toggleMenu} className="logo"></Logo>
          {menu &&   <div className="settings">
                <p>Menu</p>
                <span onClick={()=>{logOut()}} className='log-out'>Log Out</span>
            </div> }
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
            <div onClick={toggleList} className="cart-container">
           <span style={{margin: '.4rem'}}> <Cart className="cart"></Cart></span>
            <span className='products-number'> {5}</span>
            </div>
        </div>
    )
}
