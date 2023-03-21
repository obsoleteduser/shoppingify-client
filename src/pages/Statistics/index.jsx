import React from 'react'
import './Statistics.css'
import useTitle from '../../hooks/useTitle'
import { Charts } from '../../components/Charts'

export const Statistics = () => {
  useTitle('Dashboard / Statistics', [])
  return (
    <div className='statistics-page'>
      <h2 className='stats-title'>Statistics</h2>
      <h4 className='stats-title' style={{color: "red", fontWeight: 500}}>Sorry, statistics are currently unavailable</h4>
      <div className="charts">
        <Charts/>
      </div>
    </div>
  )
}
