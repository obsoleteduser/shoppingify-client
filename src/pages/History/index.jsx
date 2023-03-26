import React from 'react'
import './History.css'
import useTitle from '../../hooks/useTitle'
import { ShopListItem } from '../../components/ShopListItem'
import { useGetListsQuery } from '../../redux/api/shopListApi'
import { PuffLoader } from 'react-spinners'

export const History = () => {
  useTitle('Dashboard / History', [])
  const { data = [], isLoading, error } = useGetListsQuery()
  console.log(data)

  if(isLoading){

    return <div className='spinner'><PuffLoader color="orange" size={100}/></div>
 }


  return (
    <div className='history-page'>
      <h2 className='history-title'>Shopping history</h2>
      <div className="list-items">
       
       {
        Boolean(data?.lists?.length) && data?.lists?.map(list => (
          <ShopListItem id={list._id} key={list._id} name={list.name} date={list.createdAt} status={list.status}/>
        ))
       }
      
      </div>
    </div>
  )
}
