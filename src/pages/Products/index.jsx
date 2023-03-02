import React, { useEffect } from 'react'
import './Products.css'
import useTitle from '../../hooks/useTitle'

export const Products = () => {
  useTitle('Dashboard / Products', [])
  return (
    <div className='products-page'>Products</div>
  )
}
