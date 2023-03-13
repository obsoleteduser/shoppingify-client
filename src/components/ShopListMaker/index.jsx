import React, { useEffect, useState } from 'react'
import './ShopListMaker.css'
import { ReactComponent as Bottle } from '../../assets/bottle.svg'
import useToggle from '../../hooks/useToggle'
import { useDispatch, useSelector } from 'react-redux'
import onInput from '../../helpers/onInput'
import { setCurrentList } from '../../redux/slices/currentListSlice'
import { useGetWaitingListQuery, useSetListMutation } from '../../redux/api/shopListApi'
import { updateList } from '../../redux/slices/updatedListSlice'
import extraDataService from '../../service/extraDataService'

export const ShopListMaker = () => {

    const { toggleAdder, toggleList } = useToggle()
    const products = useSelector(state => state.currentListReducer.products)
    const listState = useSelector(state => state.currentListReducer)
    const savedNonUpdtaedList = useSelector(state => state.updateListReducer)
    const dispatch = useDispatch()
    const [list, setLocalList] = useState({})
    const { listName } = list
    const [setList] = useSetListMutation()
    const { data } = useGetWaitingListQuery()
    
    console.log('This is waiting list: ', data?.products)
  
    useEffect(()=>{
       const loadAndCacheWaitingList = async ()=>{
        

       const newdata = await extraDataService.getWaitingList()
       dispatch(updateList(newdata))
        console.log('The store ', savedNonUpdtaedList)
            }
            loadAndCacheWaitingList()
    }, [])


    const productsId = listState?.products?.map(productName => ({ product: productName.id, quantity: productName.quantity, bought: productName.bought }))

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
                        Boolean(products?.length) ? products.map(product => (
                            <div key={product.id} className="must-buy-product">
                                <span className='product-name'>{product.name}</span>
                                <span className='product-quantity'>{products.filter(item => item.id === product.id)[0].quantity} pcs</span>
                            </div>
                        )) : Boolean(savedNonUpdtaedList?.products?.length) && savedNonUpdtaedList?.products?.map(product => (

                            <div key={product?.product.name} className="product-waitied must-buy-product">


                                <input className="waited-check" type="checkbox" name="" />
                                <span style={product.product.bought ? {textDecoration: "line-through"}: null} className="product-waited-name ">
                                    {product.product.name}
                                </span>
                                <span className='product-quantity'>{savedNonUpdtaedList.products.filter(item => item.product.id === product.product.id)[0].quantity} pcs</span>
                            </div>
                        ))
                    }
                </div>

            </div>


            {Boolean(products.length) ? (
                <div className="list-name">
                    <input onChange={onInput(setLocalList)} type="text" name="listName" placeholder='Enter a name' />
                    <button onClick={async () => { 
                        dispatch(setCurrentList({ ...listState, listName, status: 'waiting' })); setList(sendData); dispatch(setCurrentList({
                            listName: '',
                            products: [],
                            status: ''
                        }))
                        const newdata = await extraDataService.getWaitingList(); dispatch(updateList(newdata))
                    }} className='list-save-button'>Save</button>
                </div>
            ) : Boolean(savedNonUpdtaedList?.products?.length) && (<div className='save-list-as'>
                <button className="cancel">Cancel</button>
                <button className="complete">Complete</button>
            </div>)
            }
        </div>
    )
}
