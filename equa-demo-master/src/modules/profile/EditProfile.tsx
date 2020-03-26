import * as React from 'react'
import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { inputStyleFilled, inputStyle, inputStylePayment } from '../../shared/styles/theme'
import { ModalContainerHeading, ModalContainerText } from '../../shared/custom-modal/style'
import CustomModal from '../../shared/custom-modal/CustomModal'
import CrossButtonHeader from '../../shared/custom-modal/components/crossBtnHeader'

import {
  ProfileCardTitle,
  ProfileCardSubTitle,
  ProfileCardText,
  EditContainer,
  AcceptButton,
  CancelButton,
  ProfileEdit,
  Row,
  Column,
  err,
  PaymentOpt,
  InputLabel,
  PaymentModalContainer,
  PaymentOptionWrapper,
  PaymentOptionRow,
  CardsImages,
  ButtonWrapper,
  RadioText,
  InputLabelPayment,
  ProfileCardWrapper,
} from './style'

import Dropdown from '../../shared/components/Dropdown'

function EditProfile() {
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

  const cryptoData = [
    { label: 'Bitcoin(BTC)', value: 'BTC' },
    { label: 'Ether', value: 'ETH' },
    { label: 'Litecoin', value: 'LTC' },
  ]

  const [selectedState, setSelectedState] = useState('')
  const [selectedCountry, setSelectedCountry] = useState('')
  const [selectedCrypto, setSelectedCrypto] = useState('')

  const stateSelectHandler = (event: any) => {
    const state = event.target.value
    setSelectedState(state)
  }
  const countrySelectHandler = (event: any) => {
    const country = event.target.value
    setSelectedCountry(country)
  }

  const cryptoSelectHandler = (event: any) => {
    const crypto = event.target.value
    setSelectedCrypto(crypto)
  }

  const [showModal, setShowModal] = useState(false)
  const [selectedOption, setSelectedOption] = useState('creditCard')
  const [selectedOptionModal, setSelectedOptionModal] = useState(false)

  const editProfileSchema = Yup.object().shape({
    email: Yup.string()
      .email('Please enter a valid email')
      .required('Please enter an email'),
    firstName: Yup.string()
      .min(3, 'Firstname must be 3 characters at minimum')
      .required('firstName is required'),
    lastName: Yup.string()
      .min(3, 'Lastname must be 3 characters at minimum')
      .required('lastName is required'),
    phone: Yup.string().required('Phone Number is required'),
  })

  const creditCardSchema = Yup.object().shape({
    cardNumber: Yup.string().required('Please enter an email'),
    exipirationDate: Yup.string().required('date is required'),
    name: Yup.string()
      .min(3, 'Name must be 3 characters at minimum')
      .required('lastName is required'),
    cvv: Yup.string()
      .min(3, 'CVV must be 3 characters at minimum')
      .required('Phone Number is required'),
  })

  const physicalAddress = Yup.object().shape({
    country: Yup.string().required('Country is Required'),
    street: Yup.string().required('Street is required'),
    state: Yup.string().required('State is required'),
    city: Yup.string().required('City Number is required'),
    postalCode: Yup.string().required('Postal Code is required'),
  })

  const BankTransfer = Yup.object().shape({
    BankName: Yup.string().required('BankName is Required'),
    AccountNumber: Yup.string().required('AccountNumber is required'),
    RoutingNumber: Yup.string().required('RoutingNumber is required'),
  })

  const CryptoCurrency = Yup.object().shape({
    Crypto: Yup.string().required('Crypto is Required'),
    Address: Yup.string().required('Address is required'),
  })

  const submitValues = async (values: any) => {
    console.log('TCL: submitValues -> values', values)
  }

  const submitCardValues = async (values: any) => {
    console.log('TCL: submitCardValues -> values', values)
  }

  const openPayment = () => {
    setShowModal(true)
  }

  const [edit, setEdit] = useState(false)

  const userImg = {
    borderRadius: '50%',
    height: '100px',
    width: '100px',
  }
  const EditIcon = {
    height: '100%',
    cursor: 'pointer',
  }
  const paymentIcon = {
    height: '20px',
    margin: '0 5px',
  }

  const handleChange = (event: any) => {
    console.log('handleChange -> event', event.target.value)
    setSelectedOption(event.target.value)
    // let data = event.target.value.replace(/(\.\d{4})\d+/g, '$1')
  }

  const selectedPaymentModal = () => {
    setSelectedOptionModal(true)
    setShowModal(false)
  }

  const closeModal = () => {
    setSelectedOptionModal(false)
  }

  const closeMainModal = () => {
    setShowModal(false)
  }

  return (
    <ProfileCardWrapper>
      <EditContainer>
        <ProfileCardTitle>Edit Profile</ProfileCardTitle>
        <ProfileEdit>
          <img style={userImg} src={require('assets/image/profile.png')} alt="" />
          <AcceptButton style={{ margin: '30px' }}>Change Picture </AcceptButton>
        </ProfileEdit>

        <div style={{ marginTop: '50px' }}>
          <Formik
            initialValues={{
              email: '',
              firstName: '',
              lastName: '',
            }}
            validationSchema={editProfileSchema}
            onSubmit={(values, { setSubmitting }) => {
              submitValues(values)
              setSubmitting(false)
            }}
          >
            {({ isSubmitting }) => (
              <Form noValidate>
                <Row>
                  <Column>
                    <InputLabel>FirstName</InputLabel>
                    <Field style={inputStyleFilled} type="text" name="firstName" />
                    <ErrorMessage component={err} name="firstName" />
                  </Column>

                  <Column>
                    <InputLabel>Last Name</InputLabel>
                    <Field style={inputStyleFilled} type="text" name="lastName" />
                    <ErrorMessage component={err} name="lastName" />
                  </Column>
                </Row>
                <Row>
                  <Column>
                    <InputLabel>Email </InputLabel>
                    <Field style={inputStyleFilled} type="text" name="email" />
                    <ErrorMessage component={err} name="email" />
                  </Column>
                </Row>
                <Row>
                  <Column>
                    <InputLabel>Phone Number </InputLabel>
                    <Field style={inputStyleFilled} type="text" name="phone" />
                    <ErrorMessage component={err} name="phone" />
                  </Column>
                </Row>
              </Form>
            )}
          </Formik>
        </div>

        <div style={{ marginTop: '70px' }}>
          <ProfileCardTitle>Payment Options</ProfileCardTitle>
          <PaymentOpt>
            <div>
              <ProfileCardSubTitle> Default</ProfileCardSubTitle>
              <ProfileCardText>Equa Cash</ProfileCardText>
            </div>
            <AcceptButton onClick={openPayment}>Add new </AcceptButton>
          </PaymentOpt>
          <PaymentOpt>
            <div>
              <ProfileCardSubTitle> Credit Card</ProfileCardSubTitle>
              <ProfileCardText>Visa Ending 3456</ProfileCardText>
            </div>
            <AcceptButton>Remove </AcceptButton>
          </PaymentOpt>
        </div>

        <div style={{ margin: '70px 0' }}>
          <ProfileCardTitle>Physical Address</ProfileCardTitle>
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
        </div>

        <PaymentOpt>
          <AcceptButton>save changes </AcceptButton>
          <AcceptButton>cancel </AcceptButton>
        </PaymentOpt>
      </EditContainer>

      <CustomModal show={showModal} toggleModal={setShowModal}>
        <CrossButtonHeader toggleModal={setShowModal} />
        <PaymentModalContainer>
          <ModalContainerHeading>Add New Payment Method </ModalContainerHeading>
          <ModalContainerText>Choose Payment Method Type</ModalContainerText>

          <PaymentOptionWrapper>
            <PaymentOptionRow style={{ border: selectedOption === 'creditCard' ? '2px solid #70CE45' : 'none' }}>
              <div>
                <input
                  onChange={handleChange}
                  checked={selectedOption === 'creditCard'}
                  type="radio"
                  value="creditCard"
                  name="Credit Card"
                />{' '}
                <RadioText>Credit Card </RadioText>
              </div>
              <CardsImages>
                <img style={paymentIcon} src={require('assets/image/payments/american-express.svg')} alt="" />
                <img style={paymentIcon} src={require('assets/image/payments/discover.png')} alt="" />
                <img style={paymentIcon} src={require('assets/image/payments/Group.svg')} alt="" />
                <img style={paymentIcon} src={require('assets/image/visa.png')} alt="" />
              </CardsImages>
            </PaymentOptionRow>

            <PaymentOptionRow style={{ border: selectedOption === 'bankTransfer' ? '2px solid #70CE45' : 'none' }}>
              <div>
                <input
                  onChange={handleChange}
                  checked={selectedOption === 'bankTransfer'}
                  type="radio"
                  value="bankTransfer"
                  name="Bank Transfer"
                />
                <RadioText>Bank Transfer</RadioText>
              </div>
              <CardsImages>
                <img style={paymentIcon} src={require('assets/image/payments/bank.png')} alt="" />
              </CardsImages>
            </PaymentOptionRow>

            <PaymentOptionRow style={{ border: selectedOption === 'Crypto' ? '2px solid #70CE45' : 'none' }}>
              <div>
                <input onChange={handleChange} checked={selectedOption === 'Crypto'} type="radio" value="Crypto" name="Crypto" />{' '}
                <RadioText>Crypto Currency Walt(BTC,ETH)</RadioText>
              </div>
              <CardsImages>
                <img style={paymentIcon} src={require('assets/image/payments/bitcoin.png')} alt="" />
                <img style={paymentIcon} src={require('assets/image/payments/crypto.png')} alt="" />
              </CardsImages>
            </PaymentOptionRow>
          </PaymentOptionWrapper>

          <ButtonWrapper>
            <AcceptButton style={{ width: '25%' }} onClick={selectedPaymentModal}>
              NEXT
            </AcceptButton>
            <CancelButton onClick={closeMainModal}>CANCEL </CancelButton>
          </ButtonWrapper>
        </PaymentModalContainer>
      </CustomModal>

      <CustomModal show={selectedOptionModal && selectedOption === 'creditCard'} toggleModal={setSelectedOptionModal}>
        <CrossButtonHeader toggleModal={setSelectedOptionModal} />
        <PaymentModalContainer>
          <ModalContainerHeading>Add New Payment Method </ModalContainerHeading>
          <ModalContainerText>Add Credit Card Details</ModalContainerText>

          <div style={{ margin: '40px 0' }}>
            <Formik
              initialValues={{
                cardNumber: '',
                name: '',
                exipirationDate: '',
                cvv: '',
              }}
              validationSchema={creditCardSchema}
              onSubmit={(values, { setSubmitting }) => {
                submitCardValues(values)
                setSubmitting(false)
              }}
            >
              {({ isSubmitting }) => (
                <Form noValidate>
                  <Row>
                    <Column>
                      <InputLabelPayment>Card Number</InputLabelPayment>
                      <Field style={inputStylePayment} type="text" name="cardNumber" />
                      <ErrorMessage component={err} name="cardNumber" />
                    </Column>

                    <Column>
                      <InputLabelPayment>Expiration Date</InputLabelPayment>
                      <Field style={inputStylePayment} type="text" name="name" />
                      <ErrorMessage component={err} name="name" />
                    </Column>
                  </Row>

                  <Row>
                    <Column>
                      <InputLabelPayment>Name on Card</InputLabelPayment>
                      <Field style={inputStylePayment} type="text" name="exipirationDate" />
                      <ErrorMessage component={err} name="exipirationDate" />
                    </Column>

                    <Column>
                      <InputLabelPayment>CVV</InputLabelPayment>
                      <Field style={inputStylePayment} type="text" name="cvv" />
                      <ErrorMessage component={err} name="cvv" />
                    </Column>
                  </Row>
                </Form>
              )}
            </Formik>
          </div>

          <ButtonWrapper>
            <AcceptButton style={{ width: '25%' }} onClick={selectedPaymentModal}>
              FINISH
            </AcceptButton>
            <CancelButton onClick={closeModal}>CANCEL </CancelButton>
          </ButtonWrapper>
        </PaymentModalContainer>
      </CustomModal>

      <CustomModal show={selectedOptionModal && selectedOption === 'Crypto'} toggleModal={setSelectedOptionModal}>
        <CrossButtonHeader toggleModal={setSelectedOptionModal} />
        <PaymentModalContainer>
          <ModalContainerHeading>Add New Payment Method </ModalContainerHeading>
          <ModalContainerText>Add Crypto Currency Wallet Details</ModalContainerText>
          <div style={{ margin: '40px 0' }}>
            <Formik
              initialValues={{
                Crypto: '',
                Address: '',
              }}
              validationSchema={CryptoCurrency}
              onSubmit={(values, { setSubmitting }) => {
                submitCardValues(values)
                setSubmitting(false)
              }}
            >
              {({ isSubmitting }) => (
                <Form noValidate>
                  <Row>
                    <Column>
                      <InputLabelPayment>Choose Crypto Currency</InputLabelPayment>
                      <Dropdown
                        dropDownStyle="basic"
                        dropData={cryptoData}
                        selectedValue={selectedCrypto}
                        onValueSelect={cryptoSelectHandler}
                      />
                      <ErrorMessage component={err} name="Crypto" />
                    </Column>
                  </Row>
                  <Row>
                    <Column>
                      <InputLabelPayment>Address</InputLabelPayment>
                      <Field style={inputStylePayment} type="text" name="Address" />
                      <ErrorMessage component={err} name="Address" />
                    </Column>
                  </Row>
                </Form>
              )}
            </Formik>
          </div>

          <ButtonWrapper>
            <AcceptButton style={{ width: '25%' }} onClick={selectedPaymentModal}>
              Add
            </AcceptButton>
            <CancelButton onClick={closeModal}>CANCEL </CancelButton>
          </ButtonWrapper>
        </PaymentModalContainer>
      </CustomModal>

      <CustomModal show={selectedOptionModal && selectedOption === 'bankTransfer'} toggleModal={setSelectedOptionModal}>
        <CrossButtonHeader toggleModal={setSelectedOptionModal} />
        <PaymentModalContainer>
          <ModalContainerHeading>Add New Payment Method </ModalContainerHeading>
          <ModalContainerText>Add Bank Transfer Details</ModalContainerText>

          <div style={{ margin: '40px 0' }}>
            <Formik
              initialValues={{
                cardNumber: '',
                name: '',
                exipirationDate: '',
                cvv: '',
              }}
              validationSchema={BankTransfer}
              onSubmit={(values, { setSubmitting }) => {
                submitCardValues(values)
                setSubmitting(false)
              }}
            >
              {({ isSubmitting }) => (
                <Form noValidate>
                  <Row>
                    <Column>
                      <InputLabelPayment>Bank Name</InputLabelPayment>
                      <Field style={inputStylePayment} type="text" name="BankName" />
                      <ErrorMessage component={err} name="BankName" />
                    </Column>
                  </Row>
                  <Row>
                    <Column>
                      <InputLabelPayment>Account Number</InputLabelPayment>
                      <Field style={inputStylePayment} type="text" name="AccountNumber" />
                      <ErrorMessage component={err} name="AccountNumber" />
                    </Column>
                  </Row>
                  <Row>
                    <Column>
                      <InputLabelPayment>Routing Number</InputLabelPayment>
                      <Field style={inputStylePayment} type="text" name="RoutingNumber" />
                      <ErrorMessage component={err} name="RoutingNumber" />
                    </Column>
                  </Row>
                </Form>
              )}
            </Formik>
          </div>

          <ButtonWrapper>
            <AcceptButton style={{ width: '30%' }} onClick={selectedPaymentModal}>
              Add
            </AcceptButton>
            <CancelButton onClick={closeModal}>CANCEL </CancelButton>
          </ButtonWrapper>
        </PaymentModalContainer>
      </CustomModal>
    </ProfileCardWrapper>
  )
}

export default EditProfile
