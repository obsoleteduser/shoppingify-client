import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../service/auth'
import './Confirmation.css'

export const Confirmation = () => {

  const [code, setCode] = useState({})
  const navigate = useNavigate()

  const inputHandler = event => {
  
    setCode({verifyCode: Number(event.target.value)})
    
  }

  const confirm = async ()=>{
    
    try{
      const { token } = await auth.confirm()
    localStorage.setItem('token', token)
    location.reload()
    }catch(err){
      console.log(err)
    }

  }


  return (
    <div className='confirmation-container'>
        <h1 className='app-brand'>Shoppingify</h1>
        <p className='confirmation-description'>Please checkout your email address and enter the confirmation code</p>
        <input onChange={inputHandler} className='confirmation-number' autoFocus type="number" placeholder='Enter the validation number'/>
        <button onClick={confirm} className="btn-confirm">Confirm</button>
    </div>
  )
}
