import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../service/auth'
import * as Yup from 'yup'
import './Confirmation.css'
import { useFormik } from 'formik'
import onEnter from '../../helpers/onEnter'

export const Confirmation = () => {

  const [error, setError] = useState()
  const [success, setSuccess] = useState()
  const [loading, setLoading] = useState(false)


  const confirmSchema = Yup.object().shape({
    code: Yup.number("The confirmation code must be a number").required("Enter a confirmation code")
  })

  const formik = useFormik({
    initialValues: {code: ''},
    validationSchema: confirmSchema,
    onSubmit: ({ code }) => {
      confirm(code)
    },
  });
 

  const confirm = async (code)=>{
    
    try{
      setLoading(true)
      const { token } = await auth.confirm({verifyCode: code})
      setLoading(false)
      setSuccess('Successfully confirmed')
    localStorage.setItem('token', token)
    location.reload()
    }catch(err){
      setError(err.response.data.message)
      setLoading(false)
    }

  }


  return (
    <div onKeyDown={onEnter(formik.handleSubmit)} className='confirmation-container'>
        <h1 className='app-brand'>Shoppingify</h1>
        <p className='confirmation-description'>Please checkout your email address and enter the confirmation code</p>
        <input name="code" value={formik.values.code}  onChange={formik.handleChange} className='confirmation-number' autoFocus type="number" placeholder='Enter the validation number'/>
        {formik.touched.code && formik.errors.code ? (
        <div className='validation-error'>{formik.errors.code}</div>
      ) : null}
      {error && (<div className='validation-error'>{error}</div>)}
      {success && (<div className='validation-success'>{success}</div>)}
        <button type='button' onClick={formik.handleSubmit} style={loading ? {opacity: .5} : {}} className="btn-confirm">{loading ? 'Confirming...' : 'Confirm'}</button>
    </div>
  )
}
