import React from 'react'
import './ItemAdder.css'

export const ItemAdd = () => {



    return (
        <div className="AddItem">
            <h3>Add new product</h3>
            <label htmlFor="">Name</label>
            <input type="text" placeholder='Enter a name' />
            <label htmlFor="">Note (optional)</label>
            <input type="text" placeholder='Enter a note' />
            <label htmlFor="">Image (optional)</label>
            <input type="text" placeholder='Enter a url' />
            <label htmlFor="">Category</label>
            <input type="text" placeholder='Enter a category or choose one below' />

            <div className="select-category">
                <div className='data-option'>Data 1</div>
                <div className='data-option'>Data 2</div>
                <div className='data-option'>Data 3</div>
                <div className='data-option'>Data 4</div>
            </div>
            <div className="add-controller">
            <button className='add-cancel'>Cancel</button>
            <button className='add-save'>Save</button>
            </div>
        </div>
    )
}
