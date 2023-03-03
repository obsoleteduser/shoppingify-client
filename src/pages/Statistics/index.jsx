import React from 'react'
import './Statistics.css'
import useTitle from '../../hooks/useTitle'

export const Statistics = () => {
  useTitle('Dashboard / Statistics', [])
  return (
    <div className='statistics-page'>
      <h1>Statistics</h1>
    </div>
  )
}
