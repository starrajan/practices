import React, { useEffect } from 'react'
import { ChartContainer } from '../style'
import Chart from 'chart.js'

Chart.defaults.global.defaultFontFamily = "'PT Sans', sans-serif"

const BalanceChart = (props: any) => {
  let chartRef: React.RefObject<any> = React.createRef()
  useEffect(() => {
    const myChartRef = chartRef.current.getContext('2d')
    const { data, labels } = props
    new Chart(myChartRef, {
      type: 'line',
      data: {
        //Bring in data
        // labels: labels,
        datasets: [
          {
            data: [70, 20, 10, 34, 56],
            fill: true,
            borderColor: '#3DC11F',
            backgroundColor: ['rgba(61, 193, 31,0.1)', 'rgba(63, 187, 33, 0.2)', 'rgba(68, 199, 39, 0.2)'],
          },
        ],
      },
      options: {
        //Customize chart options
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
      },
    })
  })

  return (
    <ChartContainer>
      <canvas id="myChart" ref={chartRef} />
    </ChartContainer>
  )
}

export default BalanceChart
