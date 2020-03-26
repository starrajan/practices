import * as React from 'react'
import { useState } from 'react'
import BuySubscription from './BuySubscription'
import { colors, screenSizes } from '../../shared/styles/theme'

import {
  Container,
  SubscriptionNumber,
  ProfileCardTitle,
  SubscriptionHeadLight,
  SubscriptionHeadingCart,
} from './style'

const NewSubscription = (props: any) => {
  const [details, SetDetails] = useState(false)
  const [subscription, SetSubscription] = useState(true)

  const showDetails = () => {
    SetDetails(true)
  }
  const CloseDetails = () => {
    SetDetails(false)
  }

  const toMain = () => {
    SetSubscription(true)
  }

  const arrow = {
    marginTop: '8px',
    marginRight: '18px',
    height: '15px',
    cursor: 'pointer',
  }

  return (
    <Container>
        <div style={{padding:'20px'}}>
          <SubscriptionHeadingCart>
            <div style={{display:'flex'}}>
              {/* <img onClick={toMain} style={arrow} src={require('assets/image/arrow.png')} alt="" /> */}
              <ProfileCardTitle>Checkout</ProfileCardTitle>
            </div>
            <div>
              <SubscriptionHeadLight>My Equa cash balance</SubscriptionHeadLight>
              <div>
                <img style={{ marginTop: '-10px' }} src={require('assets/image/subscrptionD.png')} alt="" />
                <SubscriptionNumber>160</SubscriptionNumber>
              </div>
            </div>
          </SubscriptionHeadingCart>
          <BuySubscription />
        </div>
   
    </Container>
  )
}

export default NewSubscription
