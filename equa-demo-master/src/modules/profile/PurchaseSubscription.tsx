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
  SubscriptionInfoLight,
  SubscriptionButtonFull,
  SubscriptionLightSmall,
  GreenLink,
  PSubs
} from './style'
import history from '../../modules/app/components/history'


const PurchaseSubscription = (props: any) => {
  const arrow = {
    marginTop: '8px',
    marginRight: '18px',
    height: '15px',
    cursor: 'pointer',
  }
  const backToProfile =() => {
    history.push('/user-profile')
  }
  const complete =() => {
    history.push('/cart-summary')
  }

  return (
    <div>
      <PSubs >
        <img onClick={backToProfile} style={arrow} src={require('assets/image/arrow.png')} alt="" />
        <ProfileCardTitle>Confirm Your Purchase</ProfileCardTitle>
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

        <ProfileCard>
          <ProfileCardTitle>Billing Address</ProfileCardTitle>
          <div style={{ marginTop: '30px' }}>
            <SubscriptionInfoText>Country</SubscriptionInfoText>
            <SubscriptionInfoLight>United States of America (USA)</SubscriptionInfoLight>
          </div>
          <div style={{ marginTop: '30px' }}>
            <SubscriptionInfoText>Street Address</SubscriptionInfoText>
            <SubscriptionInfoLight>1234 Address Place #123</SubscriptionInfoLight>
          </div>
          <SubscriptionInfo>
            <div>
              <SubscriptionInfoText>State</SubscriptionInfoText>
              <SubscriptionInfoLight>Delaware</SubscriptionInfoLight>
            </div>
            <div>
              <SubscriptionInfoText>City</SubscriptionInfoText>
              <SubscriptionInfoLight>New Reyjavik</SubscriptionInfoLight>
            </div>
          </SubscriptionInfo>
          <div style={{ marginTop: '30px' }}>
            <SubscriptionInfoText>Postal Code</SubscriptionInfoText>
            <SubscriptionInfoLight>09876</SubscriptionInfoLight>
          </div>
        </ProfileCard>

        <ProfileCard>
          <ProfileCardTitle>Bank Account Information</ProfileCardTitle>
          <div style={{ marginTop: '30px' }}>
            <SubscriptionInfoText>Bank</SubscriptionInfoText>
            <SubscriptionInfoLight>Wells Fargo</SubscriptionInfoLight>
          </div>

          <SubscriptionInfo>
            <div>
              <SubscriptionInfoText>Routing Number</SubscriptionInfoText>
              <SubscriptionInfoLight>Routing Number</SubscriptionInfoLight>
            </div>
            <div>
              <SubscriptionInfoText>Bank Account Number</SubscriptionInfoText>
              <SubscriptionInfoLight>*****678</SubscriptionInfoLight>
            </div>
          </SubscriptionInfo>
        </ProfileCard>

        <SubscriptionButtonFull onClick={complete}>Complete Purchase</SubscriptionButtonFull>
        <SubscriptionLightSmall>
          Note: This subscription will automatically renew two (2) years after the date of purchase. At that time, your specified payment
          method will be automatically charged for the full amount of a two year subscription. You can apply more Equa Cash for a discount
          at or before the renew date to apply a discount to the resubscription. You can cancel your subscription at any time by going to:
        </SubscriptionLightSmall>
        <GreenLink>start.equa.global/cancelmysubscription </GreenLink>
      </ProfileCardWrapperPurchase>
    </div>
  )
}

export default PurchaseSubscription
