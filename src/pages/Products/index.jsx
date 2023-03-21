import React, { useEffect, useRef, useState } from 'react'
import './Products.css'
import useTitle from '../../hooks/useTitle'
import { SearchBox } from '../../components/SearchBox'
import  Item  from '../../components/Item'
import { useGetProductcsQuery } from '../../redux/api/productApi'
import { PuffLoader } from 'react-spinners'


export const Products = () => {
  useTitle('Dashboard / Products', [])
  const [searchTerm, setSearchTerm] = useState({name: ''})
  const { data = [], error, isLoading} = useGetProductcsQuery()


  if(isLoading){

     return <div className='spinner'><PuffLoader color="orange" size={100}/></div>
  }

  const filteredData = data.filter(product => product.name.toUpperCase().includes(searchTerm.name.toUpperCase()))

  return (
    <div className='products-page'>
     <div className="products-header">
     <p className='products-title'>
      <span className='shoppingify-orange' style={{color: 'rgb(249, 161, 9)', fontWeight: '500', fontSize: "1.3rem"}}>Shoppingify</span> allows you take your shopping list wherever you go
      </p>
      <SearchBox search={setSearchTerm}/>
     </div >
   
   <div className="products-container">
   {
     Boolean(filteredData) && filteredData.map(product => (
        <Item key={product._id} name={product.name} id={product._id}/>
      ))
     }
   </div>
   
    </div>
  )
}
