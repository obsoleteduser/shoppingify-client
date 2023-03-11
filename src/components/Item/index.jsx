import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProduct } from '../../redux/slices/currentListSlice'
import './Item.css'

const Item = ({name, id}) => {

  const dispatch = useDispatch()
  const quantity = useSelector(state => state.currentListReducer)
  console.log(quantity)

  return (
    <div className='item'>
        <span>{name}</span>
        <button onClick={()=>dispatch( setProduct({name, id, quantity: 1, bought: false}))} className='item-add'>+</button>
    </div>
  )
}


export default Item