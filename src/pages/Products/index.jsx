import React, { useEffect } from 'react'
import './Products.css'
import useTitle from '../../hooks/useTitle'
import { SearchBox } from '../../components/SearchBox'

export const Products = () => {
  useTitle('Dashboard / Products', [])
  return (
    <div className='products-page'>
      <p className='products-title'>
      <span style={{color: 'rgb(249, 161, 9)', fontWeight: '500', fontSize: "1.6rem"}}>Shoppingify</span> allows you take your shopping list wherever you go
      </p>
      <SearchBox/>
    </div>
  )
}
