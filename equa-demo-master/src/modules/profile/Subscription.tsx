import * as React from 'react'
import { useState } from 'react'
import ChangeSubscription from './ChangeSubscription'
import { colors, screenSizes } from '../../shared/styles/theme'

import {
  Container,
  ProfileCard,
  SubscriptionWrapper,
  SubscriptionMainSection,
  SubscriptionNumber,
  SubscriptionSideSection,
  SubscriptionSemiBold,
  SubscriptionLightFont,
  SubscriptionProfileCard,
  ProfileCardTitle,
  SubscriptionInfo,
  SubscriptionInfoHead,
  SubscriptionInfoText,
  SubscriptionInfoWrapper,
  ProfileCardText,
  ProfileCardSubTitle,
  SubscriptionContainer,
  SubscriptionContainerBasic,
  SubscriptionButtonFull,
  PaymentHistory,
  PaymentHistoryHead,
  PaymentHistoryContent,
  SubscriptionInfoGreen,
  BillingCard,
  BillingCardContent,
  BillingCardFooter,
  BillingCardFooterText,
  SubscriptionInfoLight,
  GreenLink,
  SubscriptionHeadLight,
  SubscriptionHeading,
} from './style'

const Subscription = (props: any) => {
  const [details, SetDetails] = useState(false)
  const [subscription, SetSubscription] = useState(true)

  const showDetails = () => {
    SetDetails(true)
  }
  const CloseDetails = () => {
    SetDetails(false)
  }

  const subscriptionChange = () => {
    SetSubscription(false)
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
      {subscription ? (
        <SubscriptionWrapper>
          <SubscriptionMainSection>
            <SubscriptionInfoWrapper>
              <SubscriptionContainer>
                <ProfileCardTitle>Active subscription</ProfileCardTitle>
                <SubscriptionInfo>
                  <div>
                    <SubscriptionInfoHead>Startup Subscription</SubscriptionInfoHead>
                    <SubscriptionInfoText>Billed Monthly</SubscriptionInfoText>
                  </div>
                  <div>
                    <SubscriptionInfoHead>$334.00</SubscriptionInfoHead>
                    <SubscriptionInfoText>$4,000/year</SubscriptionInfoText>
                  </div>
                </SubscriptionInfo>
              </SubscriptionContainer>
              <SubscriptionContainerBasic>
                <SubscriptionInfo>
                  <div>
                    <ProfileCardSubTitle> Start Date</ProfileCardSubTitle>
                    <ProfileCardText>Sept. 11, 2019</ProfileCardText>
                  </div>
                  <div>
                    <ProfileCardSubTitle> Renew Date</ProfileCardSubTitle>
                    <ProfileCardText>Sept. 11, 2021</ProfileCardText>
                  </div>
                </SubscriptionInfo>
                <SubscriptionButtonFull onClick={subscriptionChange}>Change Subscription</SubscriptionButtonFull>

                <SubscriptionLightFont>
                  You will be charged $9,700.00 on September 11, 2021. 800 will automatically be deducted from your account to cover your
                  selected discount. You can adjust the discount amount any time before your next billing date by clicking here.
                </SubscriptionLightFont>
              </SubscriptionContainerBasic>
            </SubscriptionInfoWrapper>

            <ProfileCard>
              <ProfileCardTitle>Payment History</ProfileCardTitle>
              <PaymentHistory>
                <PaymentHistoryHead>
                  <SubscriptionInfo>
                    <div>
                      <SubscriptionInfoHead>Mogul Subscription</SubscriptionInfoHead>
                      <SubscriptionInfoText>2019/09/24</SubscriptionInfoText>
                    </div>
                    <div>
                      <SubscriptionInfoHead>$9,700.00</SubscriptionInfoHead>
                      {details ? (
                        <div></div>
                      ) : (
                        <SubscriptionInfoText onClick={showDetails} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
                          show details
                        </SubscriptionInfoText>
                      )}
                    </div>
                  </SubscriptionInfo>
                </PaymentHistoryHead>

                {details ? (
                  <PaymentHistoryContent>
                    <SubscriptionInfo>
                      <div>
                        <SubscriptionInfoHead>Mogul Subscription</SubscriptionInfoHead>
                        <SubscriptionInfoText>2019/09/24</SubscriptionInfoText>
                      </div>
                      <div>
                        <SubscriptionInfoHead>$9,700.00</SubscriptionInfoHead>
                        <SubscriptionInfoText>$5,250/year</SubscriptionInfoText>
                      </div>
                    </SubscriptionInfo>
                    <SubscriptionInfo>
                      <SubscriptionHeadLight>2 Year Billing Discount</SubscriptionHeadLight>
                      <SubscriptionHeadLight>-$4,500.00</SubscriptionHeadLight>
                    </SubscriptionInfo>
                    <SubscriptionInfo>
                      <SubscriptionHeadLight>Equa Cash Discount ( 800) </SubscriptionHeadLight>
                      <SubscriptionHeadLight>-$800.00</SubscriptionHeadLight>
                    </SubscriptionInfo>
                    <SubscriptionInfo>
                      <SubscriptionInfoGreen>Total (Billed Every 2 Years): </SubscriptionInfoGreen>
                      <SubscriptionInfoGreen>$9,700.00</SubscriptionInfoGreen>
                    </SubscriptionInfo>
                    <SubscriptionInfoText
                      onClick={CloseDetails}
                      style={{ textDecoration: 'underline', cursor: 'pointer', textAlign: 'right' }}
                    >
                      hide details
                    </SubscriptionInfoText>
                  </PaymentHistoryContent>
                ) : (
                  <div></div>
                )}
              </PaymentHistory>
            </ProfileCard>

            <div>
              <ProfileCardTitle>My Billing Details</ProfileCardTitle>
              <BillingCard>
                <BillingCardContent>
                  <ProfileCardTitle>Saved Bank Account</ProfileCardTitle>
                  <div style={{ marginTop: '30px' }}>
                    <SubscriptionInfoText>Bank</SubscriptionInfoText>
                    <SubscriptionInfoLight>Wells Fargo</SubscriptionInfoLight>
                  </div>
                  <SubscriptionInfo>
                    <div>
                      <SubscriptionInfoText>Routing Number</SubscriptionInfoText>
                      <SubscriptionInfoLight>102000076</SubscriptionInfoLight>
                    </div>
                    <div>
                      <SubscriptionInfoText>Bank Account Number</SubscriptionInfoText>
                      <SubscriptionInfoLight>*****678</SubscriptionInfoLight>
                    </div>
                  </SubscriptionInfo>
                </BillingCardContent>
                <BillingCardFooter>
                  <BillingCardFooterText style={{ borderRight: '1px solid', borderColor: colors.grey }}>EDIT</BillingCardFooterText>
                  <BillingCardFooterText>DELETE</BillingCardFooterText>
                </BillingCardFooter>
              </BillingCard>
              <BillingCard>
                <BillingCardContent>
                  <ProfileCardTitle>Saved Card</ProfileCardTitle>
                  <div style={{ marginTop: '30px' }}>
                    <SubscriptionInfoText>Name on Card</SubscriptionInfoText>
                    <SubscriptionInfoLight>Justin W Ellis</SubscriptionInfoLight>
                  </div>
                  <div style={{ marginTop: '30px' }}>
                    <SubscriptionInfoText>Card Number</SubscriptionInfoText>
                    <SubscriptionInfoLight>**** **** **** 1121 (Visa)</SubscriptionInfoLight>
                  </div>
                  <SubscriptionInfo>
                    <div>
                      <SubscriptionInfoText>Expiration Date</SubscriptionInfoText>
                      <SubscriptionInfoLight>August, 2020</SubscriptionInfoLight>
                    </div>
                    <div>
                      <SubscriptionInfoText>Security Code</SubscriptionInfoText>
                      <SubscriptionInfoLight>***</SubscriptionInfoLight>
                    </div>
                  </SubscriptionInfo>
                </BillingCardContent>
                <BillingCardFooter>
                  <BillingCardFooterText style={{ borderRight: '1px solid', borderColor: colors.grey }}>EDIT</BillingCardFooterText>
                  <BillingCardFooterText>DELETE</BillingCardFooterText>
                </BillingCardFooter>
              </BillingCard>
            </div>
          </SubscriptionMainSection>

          <SubscriptionSideSection>
            <SubscriptionProfileCard>
              <SubscriptionSemiBold>My Equa cash balance</SubscriptionSemiBold>
              <div>
                <img style={{ marginTop: '-10px' }} src={require('assets/image/subscrptionD.png')} alt="" />
                <SubscriptionNumber>160</SubscriptionNumber>
              </div>
              <SubscriptionLightFont>
                You can use your Equa Cash towards the purchase of services and subscriptions on the Equa app!
              </SubscriptionLightFont>
              <GreenLink style={{ textDecoration: 'underline', cursor: 'pointer' }}>Learn How</GreenLink>
            </SubscriptionProfileCard>
          </SubscriptionSideSection>
        </SubscriptionWrapper>
      ) : (
        <div>
          <SubscriptionHeading>
            <div style={{display:'flex'}}>
              <img onClick={toMain} style={arrow} src={require('assets/image/arrow.png')} alt="" />
              <ProfileCardTitle>Change Your Subscription</ProfileCardTitle>
            </div>
            <div>
              <SubscriptionHeadLight>My Equa cash balance</SubscriptionHeadLight>
              <div>
                <img style={{ marginTop: '-10px' }} src={require('assets/image/subscrptionD.png')} alt="" />
                <SubscriptionNumber>160</SubscriptionNumber>
              </div>
            </div>
          </SubscriptionHeading>
          <ChangeSubscription />
        </div>
      )}
    </Container>
  )
}

export default Subscription
