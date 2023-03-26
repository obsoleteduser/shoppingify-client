import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useToggle from '../../hooks/useToggle'
import { update } from '../../redux/slices/componentSlice'
import { setProduct } from '../../redux/slices/currentListSlice'
import { setCurrentProduct } from '../../redux/slices/currentProductSlice'
import './Item.css'

const Item = ({name, id, note, category, image, bought = null}) => {

  const dispatch = useDispatch()
  const [active, setActive] = useState(false)
  const { toggleAdder, toggleList } = useToggle()
  


  return (
    <div onClick={ event =>{ dispatch(setCurrentProduct({name, note, category, image, id})); dispatch(update({productDetails: true})); toggleAdder(false); toggleList(false) }} className='item'>
        <span style={bought ? {textDecoration: 'line-through'}: null}>{name}</span>
        <button style={active ? {backgroundColor: "orange", color: 'white'} : null} onClick={event=>{event.stopPropagation(); dispatch( setProduct({name, id, quantity: 1, bought: false})); setActive(true)}} className='item-add'>+</button>
    </div>
  )
}


export default Item