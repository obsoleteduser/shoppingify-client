import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { update } from '../../redux/slices/componentSlice'
import { setProduct } from '../../redux/slices/currentListSlice'
import { setCurrentProduct } from '../../redux/slices/currentProductSlice'
import './Item.css'

const Item = ({name, id, note, category, image}) => {

  const dispatch = useDispatch()
  const [active, setActive] = useState(false)
  


  return (
    <div onClick={()=>{dispatch(setCurrentProduct({name, note, category, image})); dispatch(update({productDetails: true})) }} className='item'>
        <span>{name}</span>
        <button style={active ? {backgroundColor: "orange", color: 'white'} : null} onClick={()=>{dispatch( setProduct({name, id, quantity: 1, bought: false})); setActive(true)}} className='item-add'>+</button>
    </div>
  )
}


export default Item