import * as React from 'react'
import styled from 'styled-components'
import { Button } from '../../../../../shared/components/button'
import { colors } from '../../../../../shared/styles/theme'

const Wrapper = styled.div`
  padding: 0px 45px 45px 45px;
`
const Heading = styled.div`
  width: 430px;
  font-weight: normal;
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  color:${colors.titleColor}
  margin: 39px auto 0 auto;
  max-width: 100%;
  font-family:'Regular'
`

const Description = styled.div`
font-family:Regular;
  width: 464px;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color:${colors.titleColor}
  margin: 20px auto 0 auto;
  max-width: 100%;
`

const PurchaseBtnCont = styled.div`
  display: flex;
  justify-content: center;
  margin: 60px 0 40px 0;
`

const PurchaseBtn = styled(Button)`
  padding: 14px 28px;
  font-weight: 800;
  font-size: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
`
interface Props {
  goToPurchaseSubscription: () => void
}

class WaitListModal extends React.Component<Props> {
  render() {
    return (
      <Wrapper>
        <Heading>How can I move to the front of the waitlist?</Heading>
        <Description>
          By purchasing a subscription, you can move up to the front of the waitlist and begin using Equa Start sooner!
        </Description>

        <PurchaseBtnCont>
          <PurchaseBtn onClick={this.props.goToPurchaseSubscription}>Purchase A Subscription</PurchaseBtn>
        </PurchaseBtnCont>
      </Wrapper>
    )
  }
}

export default WaitListModal
