import React from 'react'
import './Item.css'

export const Item = ({name}) => {
  return (
    <div className='item'>
        <span>{name}</span>
        <button className='item-add'>+</button>
    </div>
  )
}
