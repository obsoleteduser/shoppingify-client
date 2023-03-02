import React from 'react'
import './History.css'
import useTitle from '../../hooks/useTitle'

export const History = () => {
  useTitle('Dashboard / History', [])
  return (
    <div className='history-page'>History</div>
  )
}
