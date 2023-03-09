import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { setAuth } from '../../redux/slices/authSlice'
import { auth } from '../../service/auth'
import * as Yup from 'yup'
import { useFormik } from 'formik';
import './SignIn.css'

export const SignIn = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [error, setError] = useState()

  const schema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Required'),
  });


  const formik = useFormik({
    initialValues: {email: '', password: ''},
    validationSchema: schema,
    onSubmit: values => {
      signIn(values)
    },
  });

  console.log(formik.touched.email)
  console.log(formik.touched.password)
 
  const signIn = async (values) =>{
    try{
      const {token} = await auth.signIn(values)
    
    localStorage.setItem('token', token)
    dispatch(setAuth(token))
    navigate('/dashboard')
    }
    catch(error){
      setError(error.response.data.message)
    }
  }


  return (
    <>
      <div className='sign-in-container'>
        <h1 className='app-brand'>Shoppingify</h1>
        <input  value={formik.values.email} onChange={formik.handleChange} className='sign-in-email' type="email" name="email" id="" placeholder='Email' />
        {formik.touched.email && formik.errors.email ? (
        <div className='validation-error'>{formik.errors.email}</div>
      ) : null}
        <input value={formik.values.password} onChange={formik.handleChange} className='sign-in-password' type="password" name="password" placeholder='Password' />
        {formik.touched.password && formik.errors.password ? (
        <div className='validation-error'>{formik.errors.password}</div>
      ) : null}
       {error && (<div className='validation-error'>{error}</div>)}
        <button type='button' onClick={formik.handleSubmit} className='sign-in-btn'>Sign In</button>
        <div className='sign-in-alternatives'>
          <span className='sign-in-span'>Not registered yet?</span>
          <Link className='sign-in-sign-up-link' to="/signup">Sign Up</Link>
        </div>
      </div>
      <h4>© 2023, Designed by Tahir Dibirov II</h4>
    </>
  )
}
