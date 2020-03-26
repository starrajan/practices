import React, { useEffect } from 'react'
import { ChartContainer,AbsoulteText,AbsoulteText1,AbsoulteText2 } from '../style'
import Chart from 'chart.js'
import { colors, screenSizes } from '../../../shared/styles/theme'


Chart.defaults.global.defaultFontFamily = "'PT Sans', sans-serif"

const ShareChart = (props: any) => {
  let chartRef: React.RefObject<any> = React.createRef()
  
  useEffect(() => {
    const myChartRef = chartRef.current.getContext('2d')
    const { data,labels } = props
    new Chart(myChartRef, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [70, 20, 10],
          backgroundColor: [
            colors.chartColor1,
              colors.chartColor2,
            colors.chartColor3,
          ],
          borderWidth: [0,0,0],
      }],
      labels: ['Common Shares', 'A class', 'B class']
    
      },
      options: {
        //Customize chart options
        responsive: true,
        aspectRatio: 1.5 ,
        cutoutPercentage: 80,
        legend: {
          display: false,
          position: "bottom",
          labels: {
            fontColor: "#333",
            fontSize: 16
          }
        }
      },
    })
  })

  return (
    <ChartContainer>
      <canvas id="myChart" ref={chartRef} />
      <AbsoulteText>
        <AbsoulteText1>22.1K</AbsoulteText1>
        <AbsoulteText2>Total Shares</AbsoulteText2>
        </AbsoulteText>
    </ChartContainer>
  )
}

export default ShareChart
