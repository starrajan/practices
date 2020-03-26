import * as React from 'react'
import { Container, ChartContainer, ShareHolderChartBlock } from './style'

const ShareHolderChart = (props: any) => {
  const { colorsList, shareholders } = props
  const renderChart = () => {
    if (shareholders && shareholders.length > 0) {
      return shareholders.map((v: any, k: any) => {
        return <ShareHolderChartBlock key={k} color={colorsList[k]} width={`${shareholders[k].fullyDiluted}%`} />
      })
    }
  }
  return (
    <Container>
      <ChartContainer>
        <div className="chart">{renderChart()}</div>
      </ChartContainer>
    </Container>
  )
}

export default ShareHolderChart
