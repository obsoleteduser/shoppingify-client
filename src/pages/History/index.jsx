import React from 'react'
import './History.css'
import useTitle from '../../hooks/useTitle'
import { ShopListItem } from '../../components/ShopListItem'
import { useGetListsQuery } from '../../redux/api/shopListApi'

export const History = () => {
  useTitle('Dashboard / History', [])
  const { data = [], isLoading, error } = useGetListsQuery()
  console.log(data)
  return (
    <div className='history-page'>
      <h1 className='history-title'>Shopping history</h1>
      <div className="list-items">
       
       {
        Boolean(data?.lists?.length) && data?.lists?.map(list => (
          <ShopListItem key={list._id} name={list.name} date={list.createdAt} status={list.status}/>
        ))
       }
      
      </div>
    </div>
  )
}
