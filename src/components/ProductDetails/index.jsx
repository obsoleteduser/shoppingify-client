import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { update } from '../../redux/slices/componentSlice'
import './ProductDetails.css'

export const ProductDetails = () => {


  const {name, image, category, note} = useSelector(state => state.currentProductReducer)
  const dispatch = useDispatch()


  return (
    <div className='product-details'>
     <div style={{width: '100%'}} className="back">
     <p onClick={()=>{ dispatch(update({productDetails: false})) }} className='back-button'>←back</p>
     </div>
      { Boolean(image) && <img src={image} alt=""/> }

      <div className="text-details">
      { Boolean(name) &&  <div className="product-name"><span className='product-key'>name</span><span className='product-value'>{name}</span></div> }
    {   Boolean(category) && <div className="product-category"><span className='product-key'>category</span><span className='product-value'>{category}</span></div> }
     {  Boolean(note) && <div className="product-note"><span className='product-key'>note</span><span className='product-value'>{note}</span></div> }

      </div>

    </div>
  )
}
