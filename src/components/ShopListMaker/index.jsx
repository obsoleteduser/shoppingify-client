import React, { useEffect, useState } from 'react'
import './ShopListMaker.css'
import { ReactComponent as Bottle } from '../../assets/bottle.svg'
import useToggle from '../../hooks/useToggle'
import { useDispatch, useSelector } from 'react-redux'
import onInput from '../../helpers/onInput'
import { setCurrentList } from '../../redux/slices/currentListSlice'
import { useSetListMutation } from '../../redux/api/shopListApi'

export const ShopListMaker = () => {

    const { toggleAdder, toggleList } = useToggle()
    const products = useSelector(state => state.currentListReducer.products)
    const listState = useSelector(state => state.currentListReducer)
    const dispatch = useDispatch()
    const [list, setLocalList] = useState({})
    const { listName } = list
    const [ setList ] = useSetListMutation()
   

    return (
        <div className='ItemAdder'>
            <div className="list-container">
                <div className="add-item-bottle-wrapper">
                    <div className="add-item-bottle">

                       <div className="text-n-bottle">
                       <Bottle className='bottle-logo'></Bottle>
                        <p>
                            Didn’t find what you need?
                        </p>
                       </div>



                        <button onClick={() => {
                            toggleAdder()

                        }} className='add-item-btn'>Add Item</button>
                    </div>
                </div>

                <div className="must-buy-products">
                    {
                        products && products.map(product => (
                            <div key={product.id} className="must-buy-product">
                                <span className='product-name'>{product.name}</span>
                                <span className='product-quantity'>{products.filter(item => item.id === product.id)[0].quantity} pcs</span>
                            </div>
                        ))
                    }
                </div>

            </div>



            <div className="list-name">
                <input onChange={onInput(setLocalList)} type="text" name="listName" placeholder='Enter a name' />
                <button onClick={()=>{dispatch(setCurrentList({...listState, listName, status: 'waiting'})); setList(listState)}} className='list-save-button'>Save</button>
            </div>
        </div>
    )
}
