import * as React from 'react'
import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Row, Column, err, InputLabel, Required, ButtonGroup, InviteButton, CancelButton } from './style'
import { inputStyleModal, inputStyle, inputStylePayment } from '../../../../shared/styles/theme'
import Dropdown from '../../../../shared/components/Dropdown'

function InviteMember() {
  const [selectedState, setSelectedState] = useState('')
  const [selectedCountry, setSelectedCountry] = useState('')
  const [selectedRole, setSelectedRole] = useState('')

  const stateSelectHandler = (event: any) => {
    const state = event.target.value
    setSelectedState(state)
  }
  const countrySelectHandler = (event: any) => {
    const country = event.target.value
    setSelectedCountry(country)
  }
  const roleSelectHandler = (event: any) => {
    const state = event.target.value
    setSelectedRole(state)
  }
  const stateData = [
    { label: 'Delaware', value: 'Delaware' },
    { label: 'Florida', value: 'Florida' },
    { label: 'Texas', value: 'Texas' },
  ]
  const RolesData = [{ label: 'Select Role', value: '' }]

  const countryData = [
    { label: 'United States of America (USA)', value: 'usa' },
    { label: 'India', value: 'India' },
    { label: 'Australia', value: 'Australia' },
  ]

  const physicalAddress = Yup.object().shape({
    name: Yup.string().required('Name is Required'),
    email: Yup.string()
      .email('Invalid email address format')
      .required('Email is required'),
    role: Yup.string().required('Role is Required'),
    title: Yup.string(),
    dob: Yup.string(),
    country: Yup.string().required('Country is Required'),
    street: Yup.string().required('Street is required'),
    state: Yup.string().required('State is required'),
    city: Yup.string().required('City Number is required'),
    postalCode: Yup.string().required('Postal Code is required'),
  })
  const submitValues = async (values: any) => {
    console.log('TCL: submitValues -> values', values)
  }
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          email: '',
          dob: '',
          role: '',
          title: '',
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
                <InputLabel>
                  Full Name <Required>(Required)</Required>
                </InputLabel>
                <Field style={inputStyleModal} type="text" name="name" />
                <ErrorMessage component={err} name="name" />
              </Column>
            </Row>
            <Row>
              <Column>
                <InputLabel>
                  Email Address <Required>(Required)</Required>
                </InputLabel>
                <Field style={inputStyleModal} type="text" name="email" />
                <ErrorMessage component={err} name="email" />
              </Column>
            </Row>
            <Row>
              <Column>
                <InputLabel>
                  Roles <Required>(Required)</Required>{' '}
                </InputLabel>
                <Dropdown dropDownStyle={'basic'} dropData={RolesData} selectedValue={selectedRole} onValueSelect={roleSelectHandler} />
                <ErrorMessage component={err} name="role" />
              </Column>
            </Row>
            <Row>
              <Column>
                <InputLabel>Title</InputLabel>
                <Field style={inputStyleModal} type="text" name="email" />
                <ErrorMessage component={err} name="title" />
              </Column>
            </Row>
            <Row>
              <Column>
                <InputLabel>Date of Birth</InputLabel>
                <Field style={inputStyleModal} type="text" name="dob" />
                <ErrorMessage component={err} name="dob" />
              </Column>
            </Row>

            <Row>
              <Column>
                <InputLabel>Country </InputLabel>
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
                <Field style={inputStyleModal} type="text" name="street" />
                <ErrorMessage component={err} name="street" />
              </Column>
            </Row>
            <Row>
              <Column>
                <InputLabel>State</InputLabel>
                <Dropdown dropDownStyle={'basic'} dropData={stateData} selectedValue={selectedState} onValueSelect={stateSelectHandler} />
                <ErrorMessage component={err} name="state" />
              </Column>

              <Column>
                <InputLabel>City</InputLabel>
                <Field style={inputStyleModal} type="text" name="city" />
                <ErrorMessage component={err} name="city" />
              </Column>
            </Row>
            <Row>
              <Column>
                <InputLabel>Postal Code </InputLabel>
                <Field style={inputStyleModal} type="text" name="postalCode" />
                <ErrorMessage component={err} name="postalCode" />
              </Column>
            </Row>
            <ButtonGroup>
              <InviteButton type="submit">Save team member</InviteButton>
              <CancelButton>cancel</CancelButton>
            </ButtonGroup>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default InviteMember
