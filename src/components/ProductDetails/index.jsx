import React from 'react'
import { useSelector } from 'react-redux'
import './ProductDetails.css'

export const ProductDetails = () => {


  const {name, image, category, note} = useSelector(state => state.currentProductReducer)


  return (
    <div className='product-details'>

      { Boolean(image) && <img src={image} alt=""/> }

      <div className="text-details">
      { Boolean(name) &&  <div className="product-name"><span className='product-key'>name</span><span className='product-value'>{name}</span></div> }
    {   Boolean(category) && <div className="product-category"><span className='product-key'>category</span><span className='product-value'>{category}</span></div> }
     {  Boolean(note) && <div className="product-note"><span className='product-key'>note</span><span className='product-value'>{note}</span></div> }

      </div>

    </div>
  )
}
