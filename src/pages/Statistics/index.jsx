import React from 'react'
import './Statistics.css'
import useTitle from '../../hooks/useTitle'
import { Charts } from '../../components/Charts'
import { Indicator } from '../../components/Indicator'
import { PuffLoader } from 'react-spinners'
import { useGetTopProductsQuery } from '../../redux/api/shopListApi'
import { uid } from 'uid'

export const Statistics = () => {
  useTitle('Dashboard / Statistics', [])
  const {data, isLoading, error} = useGetTopProductsQuery()

  if(isLoading){
 
    return <div className='spinner'><PuffLoader color="orange" size={100}/></div>
 }



  return (
    <div className='statistics-page'>
      <h2 className='stats-title'>Statistics</h2>
      <div className="info">
      <h4 className='stats-title'>Top Products</h4> 
        {
          Boolean(data?.productPercentage.length) && data?.productPercentage.map(product => (
            <Indicator key={uid()} productName={product.product} percentage={product.percentage}/>
          ))
        }
      </div>
    </div>
  )
}
