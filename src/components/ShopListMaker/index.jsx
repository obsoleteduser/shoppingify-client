import React, { useEffect, useState } from 'react'
import './ShopListMaker.css'
import { ReactComponent as Bottle } from '../../assets/bottle.svg'
import useToggle from '../../hooks/useToggle'
import { useDispatch, useSelector } from 'react-redux'
import onInput from '../../helpers/onInput'
import { setCurrentList } from '../../redux/slices/currentListSlice'
import { useGetWaitingListQuery, useSetListMutation } from '../../redux/api/shopListApi'

export const ShopListMaker = () => {

    const { toggleAdder, toggleList } = useToggle()
    const products = useSelector(state => state.currentListReducer.products)
    const listState = useSelector(state => state.currentListReducer)
    const dispatch = useDispatch()
    const [list, setLocalList] = useState({})
    const { listName } = list
    const [ setList ] = useSetListMutation()
    const { data } = useGetWaitingListQuery()
   
    console.log('This is waiting list: ', data?.products)


    const productsId = listState.products.map(productName => ({product: productName.id, quantity: productName.quantity, bought: productName.bought}))

    const sendData = {
        name: listName,
        products: productsId,
        status: 'waiting'
    }

    return (
        <div className='ItemAdder'>
            <div className="list-container">
                <div className="add-item-bottle-wrapper">
                    <div className="add-item-bottle">

                    <Bottle className='bottle-logo'></Bottle>

                       <div className="text-n-bottle">
                        <p>
                            Didn’t find what you need?
                        </p>
                        <button onClick={() => {
                            toggleAdder()

                        }} className='add-item-btn'>Add Item</button>
                       </div>



                      
                    </div>
                </div>

                <div className="must-buy-products">
                    <h2>The Shoplist you deserved</h2>
                    {
                        Boolean(products.length) ? products.map(product => (
                            <div key={product.id} className="must-buy-product">
                                <span className='product-name'>{product.name}</span>
                                <span className='product-quantity'>{products.filter(item => item.id === product.id)[0].quantity} pcs</span>
                            </div>
                        )): Boolean(data?.products?.length) && data?.products?.map(product => (
                            
                            <div key={product.product.name} className="product-waitied must-buy-product">
    
                                <input className="waited-check" type="checkbox" name="" id="" />
                                <span className="product-waited-name">
                                {product.product.name}
                                </span>
                                <span className='product-quantity'>{data.products.filter(item => item.product.id === product.product.id)[0].quantity} pcs</span>
                            </div>
                        ))
                    }
                </div>

            </div>



            <div className="list-name">
                <input onChange={onInput(setLocalList)} type="text" name="listName" placeholder='Enter a name' />
                <button onClick={()=>{dispatch(setCurrentList({...listState, listName, status: 'waiting'})); setList(sendData)}} className='list-save-button'>Save</button>
            </div>
        </div>
    )
}
