import React from 'react'
import { VictoryBar, VictoryChart } from 'victory';


export const Charts = () => {

  const data = [
    {quarter: 1, earnings: 13000},
    {quarter: 2, earnings: 16500},
    {quarter: 3, earnings: 14250},
    {quarter: 4, earnings: 19000}
  ];


  return (
    <div style={{width: '30rem', height: '30rem'}}>
      <VictoryChart>
       <VictoryBar
        data={data}
        // data accessor for x values
        x="quarter"
        // data accessor for y values
        y="earnings"
      />
      </VictoryChart>
    </div>
  )
}
