import React from 'react'
import './History.css'
import useTitle from '../../hooks/useTitle'
import { ShopListItem } from '../../components/ShopListItem'

export const History = () => {
  useTitle('Dashboard / History', [])
  return (
    <div className='history-page'>
      <h1 className='history-title'>Shopping history</h1>
      <div className="list-items">
        <ShopListItem/>
        <ShopListItem/>
        <ShopListItem/>
        <ShopListItem/>
        <ShopListItem/>
        <ShopListItem/>
        <ShopListItem/>
        <ShopListItem/>
        <ShopListItem/>
        <ShopListItem/>
        <ShopListItem/>
        <ShopListItem/>
        <ShopListItem/>
        <ShopListItem/>
        <ShopListItem/>
        <ShopListItem/>
        <ShopListItem/>
        <ShopListItem/>
        <ShopListItem/>
        <ShopListItem/>
        <ShopListItem/>
        <ShopListItem/>
        <ShopListItem/>
        <ShopListItem/>
        <ShopListItem/>
        <ShopListItem/>
        <ShopListItem/>
        <ShopListItem/>
        <ShopListItem/>
        <ShopListItem/>
      </div>
    </div>
  )
}
