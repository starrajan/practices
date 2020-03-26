import * as React from 'react'
import { connect } from 'react-redux'
import { withRouter, RouteComponentProps } from 'react-router'
import { useState, useEffect } from 'react'
import {
  RecentActionCont,
  TeamMemberTables,
  SwitchDotsCont,
  SwitchDots,
  ShareAndRecentTitle,
  RecentAction,
  RecentActionDate,
} from '../style'
// import { getRecentActions, GetRecentActionsDispatch } from '@logic'

interface Props extends RouteComponentProps<any> {
  // idList: any
  match: any
}

interface Action {
  action: string
  date: string
}

interface ActionList {
  actions?: Array<Action>
}

interface State {
  startIndex: number
  endIndex: number
  dots: Array<any>
}

interface StateProps {
  // recentActionsList: any
  // getRecentActions: GetRecentActionsDispatch
}
const RecentActions = (props: Props & StateProps) => {
  // const [actions, setActions] = useState<any>([])

  const [state, setState] = useState<State>({
    startIndex: 0,
    endIndex: 6,
    dots: [],
  })
  const { startIndex, endIndex, dots } = state
const actions =[
  {
    action:'Uploaded 3 documents to Data Room 2',
    date:'8/15/2019'
  },
  {
    action:'Uploaded 1 document to Data Room 3',
    date:'18/15/2019'
  },
  {
    action:'Updated Profile Information',
    date:'9/15/2019'
  },
  {
    action:'Exercised 100,000 Shares - Employee Option-2',
    date:'4/15/2019'
  },
]
  // useEffect(() => {
  //   props.getRecentActions(props.match.params.orgId)
  //   if (props.recentActionsList) {
  //     setActions(props.recentActionsList.actions)
  //     handleState(props.recentActionsList)
  //   }
  // }, [!props.recentActionsList])

  // const handleState = (actions: any) => {
  //   let numberOfDots = Math.floor(actions.length / 7)
  //   if (actions.length !== 0 && actions.length / 7 > 1) {
  //     if (actions.length % 7 !== 0) {
  //       numberOfDots++
  //     }
  //   }
  //   let dots = []

  //   for (let i = 1; i <= numberOfDots; i++) {
  //     dots.push({ number: i, active: false })
  //   }

  //   if (dots.length > 1) {
  //     dots[0].active = true
  //   }

  //   setState({ ...state, dots: dots })
  // }

  const renderActionsTable = () => {
    if (actions.length) {
      return (
        <TeamMemberTables>
          <tbody>
            {actions.map((v: any, k: any) => {
              if (k >= startIndex && k <= endIndex) {
                return (
                  <tr key={k}>
                    <RecentAction> {v.action}</RecentAction>
                    <RecentActionDate> {v.date} </RecentActionDate>
                  </tr>
                )
              }
            })}
          </tbody>
        </TeamMemberTables>
      )
    }
  }

  const switchTabs = (k: number) => {
    for (let i = 0; i < dots.length; i++) {
      dots[i].active = false
    }

    dots[k].active = true

    setState({
      startIndex: k * 7,
      endIndex: (k + 1) * 7 - 1,
      dots: dots,
    })
  }

  const renderDots = () => {
    if (dots.length > 1) {
      return (
        <SwitchDotsCont>
          {dots.map((v, k) => (
            <SwitchDots key={k} active={v.active} onClick={() => switchTabs(k)} />
          ))}
        </SwitchDotsCont>
      )
    } else {
      return null
    }
  }

  return (
    <div>
      <ShareAndRecentTitle>Recent Actions</ShareAndRecentTitle>
      {actions.length ? (
        <RecentActionCont>
          {renderActionsTable()}
          {renderDots()}
        </RecentActionCont>
      ) : (
        <div>No recent actions were taken</div>
      )}
    </div>
  )
}
// const mapStateToProps = (state: any) => ({
//   recentActionsList: state.teamMember.recentActionsList,
// })

export default withRouter(
  connect(
    // mapStateToProps,
    // { getRecentActions }
  )(RecentActions)
)
