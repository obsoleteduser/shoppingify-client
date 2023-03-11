import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProduct } from '../../redux/slices/currentListSlice'
import './Item.css'

const Item = ({name, id}) => {

  const dispatch = useDispatch()
  const [active, setActive] = useState(false)
  

  return (
    <div className='item'>
        <span>{name}</span>
        <button style={active ? {backgroundColor: "orange", color: 'white'} : null} onClick={()=>{dispatch( setProduct({name, id, quantity: 1, bought: false})); setActive(true)}} className='item-add'>+</button>
    </div>
  )
}


export default Item