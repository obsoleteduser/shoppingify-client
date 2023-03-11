import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../service/auth'
import * as Yup from 'yup'
import './SignUp.css'
import { useFormik } from 'formik'
import onEnter from '../../helpers/onEnter'

export const SignUp = () => {
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });


  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      signUp(values)
    },
  });
  

  


  const signUp = async (values) => {

    const { email, password } = values

    try {
      setLoading(true)
      const response = await auth.signUp({ email, password })
      setLoading(false)
      navigate('/confirm')
    } catch (err) {
        setError('User already existed')
        setLoading(false)
    }



  }


  return (
    <>
      <div onKeyDown={onEnter(formik.handleSubmit)} className='sign-up-container'>
        <h1 className='app-brand'>Shoppingify</h1>
        <input value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur} className='sign-up-email' type="email" name="email" id="" placeholder='Email' />
        {formik.touched.email && formik.errors.email ? (
          <div className='validation-error'>{formik.errors.email}</div>
        ) : null}
        <input value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur} className='sign-up-password' type="password" name='password' placeholder='Password' />
        {formik.touched.password && formik.errors.password ? (
          <div className='validation-error'>{formik.errors.password}</div>
        ) : null}
        <input value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur} className='sign-up-password' type="password" name='confirmPassword' placeholder='Confirm password' />
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <div className='validation-error'>{formik.errors.confirmPassword}</div>
        ) : null}
        {error && (<div className='validation-error'>{error}</div>)}
        <button type="button" onClick={formik.handleSubmit} disabled={loading} style={loading ? {opacity: .5} : {}} className='sign-up-btn'>{loading ? 'Signing Up...'  : 'Sign Up'}</button>
        
        <div className='sign-up-alternatives'>
          <span className='sign-up-span'>Already have an account?</span>
          <Link className='sign-up-sign-in-link' to="/">Login</Link>
        </div>
      </div>
      <h4>© 2023, Designed by Tahir Dibirov II</h4>
    </>
  )
}
