import React from 'react'
import './Confirmation.css'

export const Confirmation = () => {
  return (
    <div className='confirmation-container'>
        <h1 className='app-brand'>Shoppingify</h1>
        <p className='confirmation-description'>Please checkout your email address and enter the confirmation code</p>
        <input className='confirmation-number' autoFocus type="number" placeholder='Enter the validation number'/>
        <button className="btn-confirm">Confirm</button>
    </div>
  )
}
