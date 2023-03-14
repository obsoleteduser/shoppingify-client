import React from 'react'
import { VictoryBar, VictoryChart } from 'victory';
import './Charts.css'

export const Charts = () => {



  return (
    <div className='charts'>
      <VictoryChart>
       <VictoryBar
        x="quarter"
        y="earnings"
      />
      </VictoryChart>
    </div>
  )
}
