import React from 'react'
import './ShopListItem.css'

export const ShopListItem = ({name, status, date}) => {
  return (
    <div className='ShopListItem'>
      <span className='list-item-name'>{name}</span>
      <span className='list-item-date'>{date}</span>
      <span className={status === 'completed' ? 'list-completed' : 'list-canceled'}>{status}</span>
    </div>
  )
}
