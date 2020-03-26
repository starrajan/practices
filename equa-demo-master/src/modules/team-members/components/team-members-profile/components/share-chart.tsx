import * as React from 'react'
import { useState, useEffect } from 'react'
import ReactMinimalPieChart from 'react-minimal-pie-chart'
import { StyledGraph, GraphInfoCont, GraphInfo, CircleDot } from '../style'

interface Props {
  outstandingShares: any
}

interface State {
  data: Array<any>
}

type data = Array<any>

const ShareChart = (props: Props) => {
  const [data, setData] = useState<data>([])
  const { outstandingShares } = props

  useEffect(() => {
    if (props.outstandingShares) {
      const shares = outstandingShares.map((v: any, k: any) => {
        return {
          title: k,
          value: v.shares,
          color: v.type === 'Common Stock' ? ' #4DD0E1' : '#FFCA28',
          type: v.type,
        }
      })
      setData(shares)
    }
  }, [!props.outstandingShares])

  const renderInfoAboutChart = () => {
    if (data.length) {
      return (
        <GraphInfoCont>
          {data.map((v, k) => (
            <GraphInfo key={k}>
              {`${v.type} ( ${v.value.toLocaleString()} shares )`}
              <CircleDot backgroundColor={v.type === 'Common Stock' ? ' #4DD0E1' : '#FFCA28'} />
            </GraphInfo>
          ))}
        </GraphInfoCont>
      )
    }

    return null
  }

  return (
    <StyledGraph>
      {renderInfoAboutChart()}
      <ReactMinimalPieChart data={data} lineWidth={25} />
    </StyledGraph>
  )
}

export default ShareChart
