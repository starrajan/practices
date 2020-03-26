import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router'
import { DashboardTable, NoAvailableData, PlaceholderText, PlaceholderButton } from '../../style'
import ArrowRight from '../../../../assets/image/arrow-right.png'
import { Paths } from '../../../app/components/routes/types'

interface Props extends RouteComponentProps<any> {
  recentActions: any
}

const OrganizationRecentActions = (props: Props) => {
  const recentActions=[
    {action:'Issued Shares',actionTime:'Admin'},
    {action:'Share Transfer',actionTime:'Admin'},
    {action:'New share class created',actionTime:'Admin'},
    {action:'Document uploaded',actionTime:'Admin'},
  ]

  const toActions = () => {
    props.history.push(`${Paths.Actions}`)
  }
  return (
    <>
      <DashboardTable>
        <thead>
          <tr>
            <td>Recent Actions</td>
            <td>
              <img onClick={toActions} src={ArrowRight} />
            </td>
          </tr>
        </thead>

        <tbody>
          {recentActions.length > 0 &&
            recentActions.map((v: any, k: any) => {
              return (
                <tr key={k}>
                  <td>{v.action}</td>
                  <td>{v.actionTime}</td>
                </tr>
              )
            })}
        </tbody>
      </DashboardTable>
      {recentActions.length === 0 && (
        <NoAvailableData>
          <div style={{ textAlign: 'center' }}>
            <img src={require('assets/image/actionplace.png')} alt="" />
            <PlaceholderText>You don’t have any recent actions. Try to search actions.</PlaceholderText>
            <PlaceholderButton>SEARCH ACTIONS </PlaceholderButton>
          </div>
        </NoAvailableData>
      )}
    </>
  )
}
export default withRouter(OrganizationRecentActions)
