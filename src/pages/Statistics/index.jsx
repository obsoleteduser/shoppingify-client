import React from 'react'
import './Statistics.css'
import useTitle from '../../hooks/useTitle'
import { Charts } from '../../components/Charts'

export const Statistics = () => {
  useTitle('Dashboard / Statistics', [])
  return (
    <div className='statistics-page'>
      <h1>Statistics</h1>
      <div className="charts">
        <Charts/>
      </div>
    </div>
  )
}
