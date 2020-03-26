import * as React from 'react'
// import { Container } from '@styles/styled'
import { SubscriptionCont, SubText, PurchaseSubBtn } from './style'
// import { Paths } from '@logic'
import { RouteComponentProps, withRouter } from 'react-router'

interface Props extends RouteComponentProps<any>{
}

class Subscription extends React.Component<Props> {
  render() {
    const { history } = this.props
    return (
      <div onClick={() => history.push('')}>
        <SubscriptionCont>
          <SubText>Purchase a subscription now!</SubText>
          <PurchaseSubBtn>Purchase a subscription</PurchaseSubBtn>
        </SubscriptionCont>
      </div>
    )
  }
}

export default withRouter(Subscription)
