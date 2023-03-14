import React, { useEffect, useLayoutEffect, useState } from 'react'
import './ShopListMaker.css'
import { ReactComponent as Bottle } from '../../assets/bottle.svg'
import useToggle from '../../hooks/useToggle'
import { useDispatch, useSelector } from 'react-redux'
import onInput from '../../helpers/onInput'
import { setCurrentList } from '../../redux/slices/currentListSlice'
import { useGetWaitingListQuery, useSetListMutation, useUpdateWaitingListMutation } from '../../redux/api/shopListApi'
import { setbought, setListStatus, updateList } from '../../redux/slices/updatedListSlice'
import extraDataService from '../../service/extraDataService'
import { useNavigate } from 'react-router-dom'

export const ShopListMaker = () => {
    const [cancelVerify, setCancelVerify] = useState(false)
    const [completeVerify, setCompleteVerify] = useState(false)
    const [completeClicks, setComplteClicks] = useState(0)
    const [cancelClicks, setCancelClicks] = useState(0)
    const { toggleAdder, toggleList } = useToggle()
    const navigate = useNavigate()
    const products = useSelector(state => state.currentListReducer?.products)
    const listState = useSelector(state => state.currentListReducer)
    const savedNonUpdtaedList = useSelector(state => state.updateListReducer.data)
    
    const boughtItems = useSelector(state => state.updateListReducer?.data?.products)
    const dispatch = useDispatch()
    const [list, setLocalList] = useState({})
    const { listName } = list
    const [setList] = useSetListMutation()
    const { data } = useGetWaitingListQuery()
    const [ updateWaitingList ] = useUpdateWaitingListMutation()
   
  
    useLayoutEffect(()=>{
       const loadAndCacheWaitingList = async ()=>{
        

       const newdata = await extraDataService.getWaitingList()
       await dispatch(updateList(newdata))
        console.log('The store ', savedNonUpdtaedList)
            }
            loadAndCacheWaitingList()
    }, [])


    


    if(completeClicks===2 || cancelClicks===2){ toggleList(); navigate('history'); setCancelClicks(0); setComplteClicks(0)}


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

                            <div key={product?.product._id} className="product-waitied must-buy-product">


                                <input onChange={()=>{dispatch(setbought({id: product?.product._id, status: !boughtItems.filter(item => item._id === product._id)[0].bought}))}} className="waited-check" type="checkbox" name="" />
                                <span style={ boughtItems.filter(item => item._id === product._id)[0].bought ? {textDecoration: "line-through"}: null} className="product-waited-name ">
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
                        dispatch(setCurrentList({ ...listState, listName, status: 'waiting' })); await setList(sendData); dispatch(setCurrentList({
                            listName: '',
                            products: [],
                            status: ''
                        }))
                        const newdata = await extraDataService.getWaitingList(); dispatch(updateList(newdata))
                    }} className='list-save-button'>Save</button>
                </div>
            ) : Boolean(savedNonUpdtaedList?.products?.length) && (<div className='save-list-as'>
                <button  onClick={ async ()=>{  dispatch(setListStatus('canceled')); setCancelVerify(true); console.log('canc:', savedNonUpdtaedList); setCancelClicks(prev => prev + 1); await updateWaitingList(savedNonUpdtaedList) }} className="cancel">{cancelVerify ? 'Ok' : 'Cancel'}</button>
                <button  onClick={async ()=>{ dispatch(setListStatus('completed')); setCompleteVerify(true); console.log('comp:', savedNonUpdtaedList); setComplteClicks(prev => prev +1 ); await updateWaitingList(savedNonUpdtaedList) }} className="complete">{completeVerify ? 'Ok': 'Complete'}</button>
            </div>)
            }
        </div>
    )
}
