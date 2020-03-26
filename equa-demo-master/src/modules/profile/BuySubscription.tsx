import * as React from 'react'
import { useState } from 'react'
import { inputStyleFilled} from '../../shared/styles/theme'
import history from '../../modules/app/components/history'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import {
  Container,
  ProfileCard,
  SubscriptionWrapper,
  Row,
  Column,
  SubscriptionMainSection,
  SubscriptionLightFont,
  ProfileCardTitle,
  SubscriptionInfo,
  SubscriptionInfoHead,
  SubscriptionInfoText,
  SubscriptionButtonFull,
  PaymentHistory,
  PaymentHistoryHead,
  err,
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
  SubscriptionLightSmall,
  InputLabel
} from './style'
import Dropdown from '../../shared/components/Dropdown'


const BuySubscription = (props: any) => {
  const [selectedOption, setSelectedOption] = useState('Startup')
  const [save, setSave] = useState()
  const [selectedBilling, setSelectedBilling] = useState('2Years')
  const [selectedState, setSelectedState] = useState('')
  const [selectedCountry, setSelectedCountry] = useState('')
  const paymentIcon = {
    height: '26px',
    margin: '0 5px',
  }
  const stateData = [
    { label: 'Delaware', value: 'Delaware' },
    { label: 'Florida', value: 'Florida' },
    { label: 'Texas', value: 'Texas' },
  ]

  const countryData = [
    { label: 'United States of America (USA)', value: 'usa' },
    { label: 'India', value: 'India' },
    { label: 'Australia', value: 'Australia' },
  ]

  const stateSelectHandler = (event: any) => {
    const state = event.target.value
    setSelectedState(state)
  }
  const countrySelectHandler = (event: any) => {
    const country = event.target.value
    setSelectedCountry(country)
  }

  const handleChange = (event: any) => {
    console.log('handleChange -> event', event.target.value)
    setSelectedOption(event.target.value)
  }

  const handleSave = (event: any) => {
    console.log('handleChange -> event', event.target.value)
    setSave(event.target.value)
  }

  const purchase =() => {
    history.push('/purchase')
  }
  const submitValues = async (values: any) => {
    console.log('TCL: submitValues -> values', values)
  }

  const physicalAddress = Yup.object().shape({
    country: Yup.string().required('Country is Required'),
    street: Yup.string().required('Street is required'),
    state: Yup.string().required('State is required'),
    city: Yup.string().required('City Number is required'),
    postalCode: Yup.string().required('Postal Code is required'),
  })

  const cardDetails = Yup.object().shape({
    name: Yup.string().required('Required'),
    cardNumber: Yup.string().required('Required'),
    month: Yup.string().required('Required'),
    year: Yup.string().required('Required'),
    code: Yup.string().required('Required'),
  })


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
            <Formik
            initialValues={{
              country: '',
              street: '',
              city: '',
              state: '',
              postalCode: '',
            }}
            validationSchema={physicalAddress}
            onSubmit={(values, { setSubmitting }) => {
              submitValues(values)
              setSubmitting(false)
            }}
          >
            {({ isSubmitting }) => (
              <Form noValidate>
                <Row>
                  <Column>
                    <InputLabel>Country </InputLabel>
                    {/* <Field style={inputStyleFilled} type="text" name="country" /> */}
                    <Dropdown
                      dropDownStyle={'basic'}
                      dropData={countryData}
                      selectedValue={selectedCountry}
                      onValueSelect={countrySelectHandler}
                    />
                    <ErrorMessage component={err} name="country" />
                  </Column>
                </Row>
                <Row>
                  <Column>
                    <InputLabel>Street Address </InputLabel>
                    <Field style={inputStyleFilled} type="text" name="street" />
                    <ErrorMessage component={err} name="street" />
                  </Column>
                </Row>
                <Row>
                  <Column>
                    <InputLabel>State</InputLabel>
                    {/* <Field style={inputStyleFilled} type="text" name="state" /> */}

                    <Dropdown
                      dropDownStyle={'basic'}
                      dropData={stateData}
                      selectedValue={selectedState}
                      onValueSelect={stateSelectHandler}
                    />

                    <ErrorMessage component={err} name="state" />
                  </Column>

                  <Column>
                    <InputLabel>City</InputLabel>
                    <Field style={inputStyleFilled} type="text" name="city" />
                    <ErrorMessage component={err} name="city" />
                  </Column>
                </Row>
                <Row>
                  <Column>
                    <InputLabel>Postal Code </InputLabel>
                    <Field style={inputStyleFilled} type="text" name="postalCode" />
                    <ErrorMessage component={err} name="postalCode" />
                  </Column>
                </Row>
              </Form>
            )}
          </Formik>
          </BillingWrapper>

          <BillingWrapper>
            <ProfileCardTitle>Card Details</ProfileCardTitle>
            <Formik
            initialValues={{
                name: '',
                cardNumber: '',
                month: '',
                year: '',
                code: '',
            }}

            validationSchema={cardDetails}
            onSubmit={(values, { setSubmitting }) => {
              submitValues(values)
              setSubmitting(false)
            }}
          >
            {({ isSubmitting }) => (
              <Form noValidate>
                <Row>
                  <Column>
                    <InputLabel>Name On Card </InputLabel>
                    <Field style={inputStyleFilled} type="text" name="name" />
                    <ErrorMessage component={err} name="name" />
                  </Column>
                </Row>
                <Row>
                  <Column>
                    <InputLabel>Card Number </InputLabel>
                    <Field style={inputStyleFilled} type="text" name="cardNumber" />
                    <ErrorMessage component={err} name="cardNumber" />
                  </Column>
                </Row>
                <Row>
                  <Column>
                    <InputLabel>Expiration Month</InputLabel>
                    <Field style={inputStyleFilled} type="text" name="month" />
                    <ErrorMessage component={err} name="month" />
                  </Column>

                  <Column>
                    <InputLabel>Expiration Year</InputLabel>
                    <Field style={inputStyleFilled} type="text" name="year" />
                    <ErrorMessage component={err} name="year" />
                  </Column>
                </Row>
                <Row>
                  <Column>
                    <InputLabel>Security Code </InputLabel>
                    <Field style={inputStyleFilled} type="text" name="code" />
                    <ErrorMessage component={err} name="code" />
                  </Column>
                </Row>
              </Form>
            )}
          </Formik>
          <div style={{display:'flex',margin:'10px'}}>
          <input style={{marginTop:'3px'}} onChange={handleSave} checked={save === 'save'} type="radio" value="save" name="card" />
          <SubscriptionRadioText>Save this card on file for future purchases </SubscriptionRadioText>
          </div>

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

export default BuySubscription
