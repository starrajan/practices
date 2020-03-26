import * as React from 'react'
import {
  ProfileCardWrapperPurchase,
  ProfileCardTitle,
  ProfileCard,
  PaymentHistory,
  SubscriptionInfo,
  SubscriptionInfoHead,
  PaymentHistoryHead,
  PaymentHistoryContent,
  SubscriptionHeadLight,
  SubscriptionInfoText,
  SubscriptionButtonFull,
  PSubs
} from './style'
import history from '../app/components/history'

const CompletePurchase = (props: any) => {
  const arrow = {
    marginTop: '8px',
    marginRight: '18px',
    height: '15px',
    cursor: 'pointer',
  }
  const backToProfile = () => {
    history.push('/user-profile')
  }

  return (
    <div>
      <PSubs>
        <ProfileCardTitle>Thank You For Your Purchase!</ProfileCardTitle>
      </PSubs>

      <ProfileCardWrapperPurchase>
        <ProfileCard>
          <ProfileCardTitle>Cart Summary</ProfileCardTitle>
          <PaymentHistory>
            <PaymentHistoryHead>
              <SubscriptionInfo>
                <div>
                  <SubscriptionInfoHead>Mogul Subscription</SubscriptionInfoHead>
                  <SubscriptionInfoText>Up to 35 Members</SubscriptionInfoText>
                </div>
                <div>
                  <SubscriptionInfoHead>$9,700.00</SubscriptionInfoHead>
                  <SubscriptionInfoText>$5,250/year</SubscriptionInfoText>
                </div>
              </SubscriptionInfo>
            </PaymentHistoryHead>

            <PaymentHistoryContent>
              <SubscriptionInfo>
                <SubscriptionHeadLight>2 Year Billing Discount</SubscriptionHeadLight>
                <SubscriptionHeadLight>-$4,500.00</SubscriptionHeadLight>
              </SubscriptionInfo>
              <SubscriptionInfo>
                <SubscriptionHeadLight>Equa Cash Discount ( 800) </SubscriptionHeadLight>
                <SubscriptionHeadLight>-$800.00</SubscriptionHeadLight>
              </SubscriptionInfo>
              <SubscriptionInfo>
                <SubscriptionHeadLight>Total (Billed Every 2 Years):</SubscriptionHeadLight>
                <SubscriptionHeadLight>$9,700.00</SubscriptionHeadLight>
              </SubscriptionInfo>
            </PaymentHistoryContent>
          </PaymentHistory>
        </ProfileCard>

        <SubscriptionButtonFull onClick={backToProfile}>Back to Profile</SubscriptionButtonFull>
      </ProfileCardWrapperPurchase>
    </div>
  )
}

export default CompletePurchase
