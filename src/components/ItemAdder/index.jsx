import React, { useState } from 'react'
import onInput from '../../helpers/onInput'
import { useSetProductMutation } from '../../redux/api/productApi'
import './ItemAdder.css'

export const ItemAdd = () => {

    const [productState, setProductState] = useState({})

    const [ setProduct ] = useSetProductMutation()

    return (
        <div className="AddItem">
            <h3>Add new product</h3>
            <label htmlFor="">Name</label>
            <input value={productState.name} name="name" onChange={onInput(setProductState)} type="text" placeholder='Enter a name' />
            <label htmlFor="">Note (optional)</label>
            <input value={productState.note} name="note" onChange={onInput(setProductState)} type="text" placeholder='Enter a note' />
            <label htmlFor="">Image (optional)</label>
            <input value={productState.image} name="image" onChange={onInput(setProductState)} type="text" placeholder='Enter a url' />
            <label htmlFor="">Category</label>
            <input value={productState.category} name="category" onChange={onInput(setProductState)} type="text" placeholder='Enter a category or choose one below' />

            {/* <div className="select-category">
                <div className='data-option'>Data 1</div>
                <div className='data-option'>Data 2</div>
                <div className='data-option'>Data 3</div>
                <div className='data-option'>Data 4</div>
            </div> */}
            <div className="add-controller">
            <button className='add-cancel'>Cancel</button>
            <button onClick={()=>{setProduct(productState).then(()=>setProductState({}))}} className='add-save'>Save</button>
            </div>
        </div>
    )
}
