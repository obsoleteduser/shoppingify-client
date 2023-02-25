import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

export const SignIn = () => {
  return (
    <div className='sign-in-container'>
        <h2>Sign In</h2>
        <label htmlFor="">Email</label>
        <input type="email" name="" id="" placeholder='Email'/>
        <label htmlFor="">Password</label>
        <input type="password" placeholder='Password'/>
        <button>Sign In</button>
        <div className='alternatives'>
        <span>Not registered yet?</span>
        <Link className='signup-link' to="/signup">Sign Up</Link>
        </div>
    </div>
  )
}
