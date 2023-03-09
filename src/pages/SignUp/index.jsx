import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../service/auth'
import './SignUp.css'

export const SignUp = () => {
  
  const [credentials, setCredentials] = useState({})
  const navigate = useNavigate()


  const inputHandler = event =>{

    setCredentials(prev => (
      {
        ...prev,
        [event.target.name]: event.target.value
      }
    ))

  }


  const signUp = async ()=>{

    const { email, password, confirm } = credentials
    if(password===confirm){

     try{
      const response = await auth.signUp({email, password})
     navigate('/confirm')
     }catch(err){
      console.log(err.message)
     }

    }else{
      alert("Fail")
    }

  }


  return (
    <>
      <div className='sign-up-container'>
        <h1 className='app-brand'>Shoppingify</h1>
        <input onChange={inputHandler} className='sign-up-email' type="email" name="email" id="" placeholder='Email' />
        <input onChange={inputHandler} className='sign-up-password' type="password" name='password' placeholder='Password' />
        <input onChange={inputHandler} className='sign-up-password' type="password" name='confirm' placeholder='Password' />
        <button onClick={signUp} className='sign-up-btn'>Sign Up</button>
        <div className='sign-up-alternatives'>
          <span className='sign-up-span'>Already have an account?</span>
          <Link className='sign-up-sign-in-link' to="/">Login</Link>
        </div>
      </div>
      <h4>© 2023, Designed by Tahir Dibirov II</h4>
    </>
  )
}
