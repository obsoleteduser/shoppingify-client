import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { setAuth } from '../../redux/slices/authSlice'
import { auth } from '../../service/auth'
import './SignIn.css'

export const SignIn = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [credentials, setCredentials] = useState({
    email: "dibirovtahir@gmail.com",
    password: "12345"
  })

 
  const signIn = async () =>{
    try{
      const {token} = await auth.signIn(credentials)
    
    localStorage.setItem('token', token)
    dispatch(setAuth(token))
    navigate('/dashboard')
    }
    catch(error){
      console.log(error)
    }
  }

  const inputHandler  = event => {
      setCredentials(prev => ({...prev,
        [event.target.name]: event.target.value 
      }))
  }



  return (
    <>
      <div className='sign-in-container'>
        <h1 className='app-brand'>Shoppingify</h1>
        <input value={credentials.email} onChange={inputHandler} className='sign-in-email' type="email" name="email" id="" placeholder='Email' />
        <input value={credentials.password} onChange={inputHandler} className='sign-in-password' type="password" name="password" placeholder='Password' />
        <button onClick={()=>signIn()} className='sign-in-btn'>Sign In</button>
        <div className='sign-in-alternatives'>
          <span className='sign-in-span'>Not registered yet?</span>
          <Link className='sign-in-sign-up-link' to="/signup">Sign Up</Link>
        </div>
      </div>
      <h4>© 2023, Designed by Tahir Dibirov II</h4>
    </>
  )
}
