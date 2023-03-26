import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useGetListMutation } from '../../redux/api/shopListApi'
import { setListDetail } from '../../redux/slices/listDetailSlice'
import './ShopListItem.css'

export const ShopListItem = ({name, status, date, id}) => {

  const [ getList ] = useGetListMutation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  

  return (
    <div onClick={()=>{getList(id).then(data => dispatch(setListDetail(data))); navigate('/dashboard/listdetails') }} className='ShopListItem'>
      <span className='list-item-name'>{name}</span>
      <span className='list-item-date'>{date}</span>
      <span className={status === 'completed' ? 'list-completed' : 'list-canceled'}>{status}</span>
    </div>
  )
}
