import React from 'react'
import { Link } from 'react-router-dom'
import './SignUp.css'

export const SignUp = () => {
  return (
    <div className='sign-up-container'>
      <h1 className='app-brand'>Shoppingify</h1>
        <label htmlFor="">Email</label>
        <input className='sign-up-email' type="email" name="" id="" placeholder='Email'/>
        <label htmlFor="">Password</label>
        <input className='sign-up-password' type="password" placeholder='Password'/>
        <label htmlFor="">Confirm Password</label>
        <input className='sign-up-password' type="password" placeholder='Password'/>
        <button className='sign-up-btn'>Sign Up</button>
        <div className='sign-up-alternatives'>
        <span className='sign-up-span'>Already have an account?</span>
        <Link className='sign-up-sign-in-link' to="/">Login</Link>
        </div>
    </div>
  )
}
