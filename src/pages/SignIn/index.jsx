import React from 'react'
import { Link } from 'react-router-dom'
import './SignIn.css'

export const SignIn = () => {
  return (
    <div className='sign-in-container'>
        <h1 className='app-brand'>Shoppingify</h1>
        <h2 className='sign-in-title'>Sign In</h2>
        <label htmlFor="">Email</label>
        <input className='sign-in-email' type="email" name="" id="" placeholder='Email'/>
        <label htmlFor="">Password</label>
        <input className='sign-in-password' type="password" placeholder='Password'/>
        <button className='sign-in-btn'>Sign In</button>
        <div className='sign-in-alternatives'>
        <span className='sign-in-span'>Not registered yet?</span>
        <Link className='sign-in-sign-up-link' to="/signup">Sign Up</Link>
        </div>
    </div>
  )
}
