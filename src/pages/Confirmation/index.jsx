import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../service/auth'
import * as Yup from 'yup'
import './Confirmation.css'
import { useFormik } from 'formik'

export const Confirmation = () => {


  const confirmSchema = Yup.object().shape({
    code: Yup.number("The confirmation code must be a number").required("Enter a confirmation code")
  })

  const formik = useFormik({
    initialValues: {code: ''},
    validationSchema: confirmSchema,
    onSubmit: code => {
      confirm(code)
    },
  });
 

  const confirm = async (code)=>{
    
    try{
      const { token } = await auth.confirm({verifyCode: code})
    localStorage.setItem('token', token)
    location.reload()
    }catch(err){
      console.log(err.response)
    }

  }


  return (
    <div className='confirmation-container'>
        <h1 className='app-brand'>Shoppingify</h1>
        <p className='confirmation-description'>Please checkout your email address and enter the confirmation code</p>
        <input name="code" value={formik.values.code}  onChange={formik.handleChange} className='confirmation-number' autoFocus type="number" placeholder='Enter the validation number'/>
        <button type='button' onClick={formik.handleSubmit} className="btn-confirm">Confirm</button>
    </div>
  )
}
