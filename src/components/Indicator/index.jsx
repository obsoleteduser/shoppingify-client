import React from 'react'
import './Indicator.css'

export const Indicator = ({productName, percentage}) => {
  return (
    <div className="indicator-container">
        <div className="info-display">
            <span className="product-name">{productName}</span>
            <span className="percentage">{percentage}%</span>
        </div>
        <div className='indicator'>
        <div style={{ width: `${percentage}%`}} className='indicator-item'/>
    </div>
    </div>
  )

}
