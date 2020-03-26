import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router'
import { useState, useEffect } from 'react'
import { DashboardTable, NoAvailableData, PlaceholderText, PlaceholderButton } from '../../style'
import ArrowRight from '../../../../assets/image/arrow-right.png'
import { Paths } from '../../../app/components/routes/types'

interface Props extends RouteComponentProps<any> {

}

const OrganizationCapTable = (props: Props) => {
const capTabledata=[
  {
    fullName:'Mike Johnson',
    fullyDiluted:20
  },
  {
    fullName:'Darcy Prince',
    fullyDiluted:20
  },
  {
    fullName:'Dario Shea',
    fullyDiluted:10
  },
  {
    fullName:'Reef Sharpe',
    fullyDiluted:5
  },
  {
    fullName:'Blankenship',
    fullyDiluted:10
  },
  {
    fullName:'Elsie Blankenship',
    fullyDiluted:10
  },
  {
    fullName:'Aalia Romero',
    fullyDiluted:10
  },
  {
    fullName:'Mike Harry',
    fullyDiluted:10
  },
]


  // const { capTabledata } = props
  const [dilutedPercentage, setDilutedPercentage] = useState(0)

  useEffect(() => {
    if (!!capTabledata) {
      let sum = 0
      capTabledata.sort(function(a: any, b: any) {
        return b.fullyDiluted - a.fullyDiluted
      })
      if (capTabledata.length >= 5) {
        for (let i = 0; i <= 5; i++) {
          sum = sum + capTabledata[i].fullyDiluted
        }
      }

      setDilutedPercentage(sum)
    }
  }, [capTabledata])

  const toCapTable = () => {
    props.history.push(`${Paths.capTable}`)
  }
  return (
    <>
      <DashboardTable>
        <thead>
          <tr>
            <td>Cap Table Summary</td>
            <td>
              <img onClick={toCapTable} src={ArrowRight} />
            </td>
          </tr>
        </thead>
        {capTabledata && (
          <tbody>
            {capTabledata.map((v: any, k: any) => {
              if (k >= 0 && k <= 5) {
                return (
                  <tr key={k}>
                    <td>{v.fullName}</td>
                    <td>{v.fullyDiluted}%</td>
                  </tr>
                )
              }
            })}
            {capTabledata.length > 6 && (
              <tr>
                <td>{`+ ${capTabledata.length - 6} more`}</td>
                <td>{`${100 - dilutedPercentage}%`}</td>
              </tr>
            )}
            {capTabledata.length === 0 && (
              <tr>
                <td>
                  <div className="no-data">No Data Available</div>
                </td>
              </tr>
            )}
          </tbody>
        )}
      </DashboardTable>
      {!capTabledata && (
        <NoAvailableData>
          <div style={{textAlign:'center'}}>
            <img src={require('assets/image/dashplace.png')} alt="" />
            <PlaceholderText>Yout haven’t set up your cap table yet. Send an invite to your shareholders and members.</PlaceholderText>
            <PlaceholderButton>INVITE MEMBERS </PlaceholderButton>
          </div>
        </NoAvailableData>
      )}
    </>
  )
}
export default withRouter(OrganizationCapTable)
