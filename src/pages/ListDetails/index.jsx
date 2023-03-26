import React from 'react'
import { useSelector } from 'react-redux'
import Item from '../../components/Item'
import './ListDetails.css'

export const ListDetails = () => {

 const list = useSelector(state => state.listDetailReducer)
  console.log(list?.data?.products)

  return (
    <div className='list-details'>
      <h2 className='list-details-title'>List Details</h2>
      <h3 className="list-details-name">{list?.data?.name}</h3>
      <div style={list?.data?.status === 'completed' ? {color: 'skyblue', border: '1px solid skyblue'}: {color: 'red', border: '1px solid red'}} className="list-details-status">{list?.data?.status}</div>
      <h3>Products</h3>
      <div className="list-details-items">
       {
         Boolean(list?.data?.products) && list?.data?.products.map(product => (
          <Item name={product?.product?.name} id={product?.product?._id} note={product?.product?.note} category={product?.product?.category} image={product?.product?.image} bought={product?.bought}/>
         ))
       }
      </div>
    </div>
  )
}
