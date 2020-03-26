import * as React from 'react'
import { useState } from 'react'
import { inputStyleFilled} from '../../shared/styles/theme'
import history from '../../modules/app/components/history'

import {
  Container,
  ProfileCard,
  SubscriptionWrapper,
  SubscriptionMainSection,
  SubscriptionLightFont,
  ProfileCardTitle,
  SubscriptionInfo,
  SubscriptionInfoHead,
  SubscriptionInfoText,
  SubscriptionButtonFull,
  PaymentHistory,
  PaymentHistoryHead,
  PaymentHistoryContent,
  SubscriptionHeadLight,
  SubscriptionInfoLight,
  GreenLink,
  SubscriptionRadioRow,
  SubscriptionRadioText,
  Grid,
  GridItem,
  CardsImages,
  BillingWrapper,
  SubscriptionLightSmall
} from './style'

const ChangeSubscription = (props: any) => {
  const [selectedOption, setSelectedOption] = useState('Startup')
  const [selectedBilling, setSelectedBilling] = useState('2Years')
  const paymentIcon = {
    height: '26px',
    margin: '0 5px',
  }

  const handleChange = (event: any) => {
    console.log('handleChange -> event', event.target.value)
    setSelectedOption(event.target.value)
    // let data = event.target.value.replace(/(\.\d{4})\d+/g, '$1')
  }
  const purchase =() => {
    history.push('/purchase')
  }

  return (
    <Container>
      <SubscriptionWrapper>
        <SubscriptionMainSection>
          <ProfileCardTitle>Plan</ProfileCardTitle>
          <div style={{ margin: '30px 0' }}>
            <SubscriptionRadioRow style={{ border: selectedOption === 'Startup' ? '2px solid #70CE45' : 'none' }}>
              <div>
                <input onChange={handleChange} checked={selectedOption === 'Startup'} type="radio" value="Startup" name="Startup" />{' '}
                <SubscriptionRadioText>Startup </SubscriptionRadioText>
              </div>
              <SubscriptionHeadLight>Up to 15 Members</SubscriptionHeadLight>
            </SubscriptionRadioRow>

            <SubscriptionRadioRow style={{ border: selectedOption === 'Entrepreneur' ? '2px solid #70CE45' : 'none' }}>
              <div>
                <input
                  onChange={handleChange}
                  checked={selectedOption === 'Entrepreneur'}
                  type="radio"
                  value="Entrepreneur"
                  name="Entrepreneur"
                />
                <SubscriptionRadioText>Entrepreneur</SubscriptionRadioText>
              </div>
              <SubscriptionHeadLight>Up to 15 Members</SubscriptionHeadLight>
            </SubscriptionRadioRow>

            <SubscriptionRadioRow style={{ border: selectedOption === 'Mogul' ? '2px solid #70CE45' : 'none' }}>
              <div>
                <input onChange={handleChange} checked={selectedOption === 'Mogul'} type="radio" value="Mogul" name="Mogul" />{' '}
                <SubscriptionRadioText>Mogul</SubscriptionRadioText>
              </div>
              <SubscriptionHeadLight>Up to 35 Members</SubscriptionHeadLight>
            </SubscriptionRadioRow>
          </div>

          <BillingWrapper>
            <ProfileCardTitle>Billing Frequency</ProfileCardTitle>
            <Grid>
              <GridItem style={{ border: selectedBilling === 'Monthly' ? '2px solid #70CE45' : 'none' }}>
                <SubscriptionHeadLight>Monthly</SubscriptionHeadLight>
              </GridItem>
              <GridItem style={{ border: selectedBilling === 'Yearly' ? '2px solid #70CE45' : 'none' }}>
                <SubscriptionHeadLight>Yearly</SubscriptionHeadLight>
                <GreenLink>Yearly 10% discount </GreenLink>
              </GridItem>
              <GridItem style={{ border: selectedBilling === '2Years' ? '2px solid #70CE45' : 'none' }}>
                <SubscriptionHeadLight>Every 2 Years</SubscriptionHeadLight>
                <GreenLink>20% discount</GreenLink>
              </GridItem>
            </Grid>
          </BillingWrapper>

          <BillingWrapper>
            <ProfileCardTitle>Apply Equa Cash Discount</ProfileCardTitle>
            <SubscriptionInfoText>Enter the amount of Equa Cash to use towards purchase</SubscriptionInfoText>
            <input style={inputStyleFilled} type="text" name="firstName" />
            <SubscriptionInfoText style={{ margin: '20px 0' }}>(Redeem in increments of 50)</SubscriptionInfoText>
            <SubscriptionInfoLight>Apply this discount to all future payments</SubscriptionInfoLight>
            <SubscriptionInfoText>
              Your Equa Cash balance will automatically be deducted to apply a discount to all future subscription payments.
            </SubscriptionInfoText>
          </BillingWrapper>

          <BillingWrapper>
            <ProfileCardTitle style={{ marginBottom: '30px' }}>Payment Method</ProfileCardTitle>
            <SubscriptionRadioRow style={{ border: selectedOption === 'Saved Wells' ? '2px solid #70CE45' : 'none' }}>
              <div>
                <input
                  onChange={handleChange}
                  checked={selectedOption === 'Saved Wells'}
                  type="radio"
                  value="Saved Wells"
                  name="Saved Wells"
                />{' '}
                <SubscriptionRadioText>Saved Wells Fargo BA </SubscriptionRadioText>
              </div>
            </SubscriptionRadioRow>

            <SubscriptionRadioRow style={{ border: selectedOption === 'Saved' ? '2px solid #70CE45' : 'none' }}>
              <div>
                <input onChange={handleChange} checked={selectedOption === 'Saved'} type="radio" value="Saved" name="Saved" />
                <SubscriptionRadioText>Saved Visa Card (ending in: 1121) </SubscriptionRadioText>
              </div>
            </SubscriptionRadioRow>

            <SubscriptionRadioRow style={{ border: selectedOption === 'Credit' ? '2px solid #70CE45' : 'none' }}>
              <div>
                <input onChange={handleChange} checked={selectedOption === 'Credit'} type="radio" value="Credit" name="Credit" />{' '}
                <SubscriptionRadioText>Credit Card</SubscriptionRadioText>
              </div>
              <CardsImages>
                <img style={paymentIcon} src={require('assets/image/payments/american-express.svg')} alt="" />
                <img style={paymentIcon} src={require('assets/image/payments/discover.png')} alt="" />
                <img style={paymentIcon} src={require('assets/image/payments/Group.svg')} alt="" />
                <img style={paymentIcon} src={require('assets/image/visa.png')} alt="" />
              </CardsImages>
            </SubscriptionRadioRow>

            <SubscriptionRadioRow style={{ border: selectedOption === 'ACH' ? '2px solid #70CE45' : 'none' }}>
              <div>
                <input onChange={handleChange} checked={selectedOption === 'ACH'} type="radio" value="ACH" name="ACH" />{' '}
                <SubscriptionRadioText>ACH</SubscriptionRadioText>
              </div>
              <CardsImages>
                <img style={paymentIcon} src={require('assets/image/bank-transfer.svg')} alt="" />
              </CardsImages>
            </SubscriptionRadioRow>
          </BillingWrapper>

          <BillingWrapper>
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
          </BillingWrapper>

          <BillingWrapper>
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
          </BillingWrapper>
        </SubscriptionMainSection>

        <SubscriptionMainSection>
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

          <SubscriptionButtonFull onClick={purchase}> Purchase Subscription</SubscriptionButtonFull>
          <SubscriptionLightSmall>
            Note: This subscription will automatically renew two (2) years after the date of purchase. At that time, your specified payment
            method will be automatically charged for the full amount of a two year subscription. You can apply more Equa Cash for a discount
            at or before the renew date to apply a discount to the resubscription. You can cancel your subscription at any time by going to:
          </SubscriptionLightSmall>
          <GreenLink>start.equa.global/cancelmysubscription </GreenLink>
        </SubscriptionMainSection>
      </SubscriptionWrapper>
    </Container>
  )
}

export default ChangeSubscription
