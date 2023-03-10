import React, { useEffect } from 'react'
import './Products.css'
import useTitle from '../../hooks/useTitle'
import { SearchBox } from '../../components/SearchBox'
import { Item } from '../../components/Item'
import { useGetProductcsQuery } from '../../redux/api/productApi'

export const Products = () => {
  useTitle('Dashboard / Products', [])
  const { data = [], error, isLoading} = useGetProductcsQuery()

  if(isLoading){
  
     return <h1>Loading...</h1>
  }

  return (
    <div className='products-page'>
     <div className="products-header">
     <p className='products-title'>
      <span className='shoppingify-orange' style={{color: 'rgb(249, 161, 9)', fontWeight: '500', fontSize: "1.6rem"}}>Shoppingify</span> allows you take your shopping list wherever you go
      </p>
      <SearchBox/>
     </div>
     {
     Boolean(data) && data.map(data => (
        <li>{data.name}</li>
      ))
     }
    </div>
  )
}
