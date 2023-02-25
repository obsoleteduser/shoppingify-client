import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

export const SignUp = () => {
  return (
    <div className='sign-up-container'>
        <h2>Sign Up</h2>
        <label htmlFor="">Email</label>
        <input type="email" name="" id="" placeholder='Email'/>
        <label htmlFor="">Password</label>
        <input type="password" placeholder='Password'/>
        <label htmlFor="">Confirm Password</label>
        <input type="password" placeholder='Password'/>
        <button>Sign Up</button>
        <div className='alternatives'>
        <span>Already have an account?</span>
        <Link className='login-link' to="/login">Login</Link>
        </div>
    </div>
  )
}
