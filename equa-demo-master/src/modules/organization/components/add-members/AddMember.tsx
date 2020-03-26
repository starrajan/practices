import * as React from 'react'
import { Container, MemberTitle, InputFiledStyle, InputLabel, InputGroup, InputBox, ButtonGroup, MemberButton } from './style'
import { Formik, Form, Field } from 'formik'
import { MemberFormSelect } from './components'
import { countries } from 'shared/helpers/countries'
import { states } from 'shared/helpers/states'

const roles = [
  { label: 'Member A (Annual Vote)', value: 'memberA' },
  { label: 'Member B (Read Only)', value: 'memberB' },
  { label: 'Manager', value: 'manager' },
  { label: 'Legal', value: 'legal' },
  { label: 'Admin', value: 'admin' },
  { label: 'Advisor (Read Only)', value: 'advisor' },
  { label: 'Signatory', value: 'signatory' },
]

const AddMember = (props: any) => {
  const { handleAddMember, setShowModal } = props
  const initialValues = {
    fullName: '',
    email: '',
    roles: '',
    title: '',
    dob: '',
    address: {
      country: '',
      streetAddress: '',
      state: '',
      province: '',
      city: '',
      postalCode: '',
    },
    capitalContribution: '',
    numberOfShares: '',
  }
  const handleSubmit = (values: any) => {
    handleAddMember(values)
    setShowModal(false)
  }

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values)
          setSubmitting(false)
        }}
      >
        {({ values }: any) => (
          <Form>
            <MemberTitle>Add A Team Member</MemberTitle>
            <InputLabel>Full Name (Required)</InputLabel>
            <Field name="fullName" placeholder="Enter full name" style={InputFiledStyle} />
            <InputLabel>Email Address (Required)</InputLabel>
            <Field name="email" placeholder="Enter email" style={InputFiledStyle} />

            <InputLabel>Role(s) (Required){<span>&#9432;</span>}</InputLabel>
            <MemberFormSelect name="roles" options={roles} placeholder="Choose" isMulti />

            <InputLabel>Title</InputLabel>
            <Field name="title" placeholder="Enter title" style={InputFiledStyle} />
            <InputLabel>Date of Birth</InputLabel>
            <Field name="dob" placeholder="Enter date of birth" style={InputFiledStyle} />

            <InputLabel>Country</InputLabel>
            <MemberFormSelect name="address.country" options={countries} isCountries placeholder="Choose" />

            <InputLabel>Street Address</InputLabel>
            <Field name="address.streetAddress" placeholder="Enter Country" style={InputFiledStyle} />
            <InputGroup>
              <InputBox>
                <InputLabel>State</InputLabel>
                {values.address.country === 'USA' ? (
                  <MemberFormSelect name="address.province" options={Object.keys(states)} isStates placeholder="Choose" />
                ) : (
                  <Field name="address.state" placeholder="Enter state" style={InputFiledStyle} />
                )}
              </InputBox>

              <InputBox>
                <InputLabel>City</InputLabel>
                <Field name="address.city" placeholder="Enter city" style={InputFiledStyle} />
              </InputBox>
            </InputGroup>
            <InputLabel>Postal Code</InputLabel>
            <Field name="address.postalCode" placeholder="Enter postal code" style={InputFiledStyle} />
            <InputGroup>
              <InputBox>
                <InputLabel>Capital Contribution ($USD)</InputLabel>
                <Field name="capitalContribution" placeholder="Enter state" style={InputFiledStyle} />
              </InputBox>
              <InputBox>
                <InputLabel>Number of Shares</InputLabel>
                <Field name="numberOfShares" placeholder="Enter city" style={InputFiledStyle} />
              </InputBox>
            </InputGroup>
            <ButtonGroup>
              <MemberButton type="submit">save team member</MemberButton>
              <MemberButton type="button" onClick={() => setShowModal(false)}>
                cancel
              </MemberButton>
            </ButtonGroup>
          </Form>
        )}
      </Formik>
    </Container>
  )
}

export default AddMember
