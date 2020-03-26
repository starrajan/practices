import * as React from 'react'
import { connect } from 'react-redux'
import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Paths } from '../../../../app/components/routes/types'

import * as Yup from 'yup'
import {
  AuthCard,
  ButtonWrapper,
  AuthCardHead,
  AuthCardContent,
  AuthHeadTitle,
  AuthHeadText,
  AcceptButton,
  InputLabel,
  Column,
  Row,
  err,
  RequiredLabel,
  Required,
  HeaderLink,
  AuthWrapper,
} from './style'
import history from '../../../../app/components/history'
import { authInputStyle } from '../../../../../shared/styles/theme'
import Dropdown from '../../../../../shared/components/Dropdown'

interface Props {
  loading: boolean
}
const Meeting = (props: Props) => {
  const [type, setType] = useState('')

  const registerValidationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Please enter a valid email')
      .required('Please enter an email'),
    number: Yup.string().required('Number is required'),
    type: Yup.string(),
    holder: Yup.string(),
  })

  const OrganizationType = [
    { label: 'Financial Technology', value: 'Financial Technology' },
    { label: 'Financial Technology', value: 'Financial Technology' },
    { label: 'Financial Technology', value: 'Financial Technology' },
  ]

  const submitValues = async (values: any) => {
    console.log('TCL: submitValues -> values', values)
    history.push(Paths.userThanks)

  }
  const backToRegister =()=>{
    history.push(Paths.userRegister)
}

  const typeSelectHandler = (event: any) => {
    const data = event.target.value
    setType(data)
  }
  const arrow = {
    marginTop: '16px',
    marginRight: '5px',
    height: '15px',
    cursor: 'pointer',
  }

  return (
    <AuthCardContent>
      <AuthWrapper>
        <div style={{ display: 'flex' }}>
          <img onClick={backToRegister} style={arrow} src={require('assets/image/arrow.png')} alt="" />
          <HeaderLink>Schedule A Meeting</HeaderLink>
        </div>

        <div>
          <Formik
            initialValues={{
              email: '',
              name: '',
              number: '',
              type: '',
              holder: '',
            }}
            validationSchema={registerValidationSchema}
            onSubmit={(values, { setSubmitting }) => {
              submitValues(values)
              setSubmitting(false)
            }}
          >
            {({ isSubmitting }) => (
              <Form noValidate>
                <Row>
                  <Column>
                    <RequiredLabel>
                      <InputLabel>Organization's Name </InputLabel>
                      <Required>Required</Required>
                    </RequiredLabel>

                    <Field style={authInputStyle} type="text" name="name" />
                    <ErrorMessage component={err} name="name" />
                  </Column>
                </Row>

                <Row>
                  <Column>
                    <RequiredLabel>
                      <InputLabel>Email</InputLabel>
                      <Required>Required</Required>
                    </RequiredLabel>

                    <Field style={authInputStyle} type="text" name="email" />
                    <ErrorMessage component={err} name="email" />
                  </Column>

                  <Column>
                    <RequiredLabel>
                      <InputLabel>Phone Number</InputLabel>
                      <Required>Required</Required>
                    </RequiredLabel>

                    <Field style={authInputStyle} type="text" name="number" />
                    <ErrorMessage component={err} name="number" />
                  </Column>
                </Row>

                <Row>
                  <Column>
                    <RequiredLabel>
                      <InputLabel>Organization Type</InputLabel>
                      <Required>Required</Required>
                    </RequiredLabel>
                    <Dropdown dropDownStyle="auth" dropData={OrganizationType} selectedValue={type} onValueSelect={typeSelectHandler} />
                    <ErrorMessage component={err} name="type" />
                  </Column>
                </Row>

                <Row>
                  <Column>
                    <RequiredLabel>
                      <InputLabel>Number of Security Holders</InputLabel>
                      <Required>Required</Required>
                    </RequiredLabel>

                    <Field style={authInputStyle} type="text" name="holder" />
                    <ErrorMessage component={err} name="holder" />
                  </Column>
                </Row>

                <ButtonWrapper>
                  <AcceptButton type="submit">CONTINUE </AcceptButton>
                </ButtonWrapper>
              </Form>
            )}
          </Formik>
        </div>
      </AuthWrapper>
    </AuthCardContent>
  )
}
const mapStateToProps = (state: any) => ({
  loading: state.user.loading,
})

export default connect(mapStateToProps)(Meeting)
