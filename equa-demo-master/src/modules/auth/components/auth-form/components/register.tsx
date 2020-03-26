import * as React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import { registerStart } from '../../../../../logic/actions/user.actions'
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
  LinkTo,
  SubscriptionRadioText,
} from './style'
import history from '../../../../app/components/history'
import { authInputStyle } from '../../../../../shared/styles/theme'

interface Props {
  loading: boolean
  // registerStart: any
}
const Register = (props: Props) => {
  const registerValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Please enter a valid email')
      .required('Please enter an email'),
    firstName: Yup.string()
      .min(3, 'Firstname must be 3 characters at minimum')
      .required('firstName is required'),
    lastName: Yup.string()
      .min(3, 'Lastname must be 3 characters at minimum')
      .required('lastName is required'),
    password: Yup.string()
      .min(10, 'Password must be 10 characters at minimum')
      .required('password is required'),
    confirmPassword: Yup.string().required('Password is required'),
  })

  const submitValues = async (values: any) => {
    console.log('TCL: submitValues -> values', values)
    // props.registerStart(values)
    history.push(Paths.userMeeting)
  }
  const [save, setSave] = useState()
  const handleSave = (event: any) => {
    console.log('handleChange -> event', event.target.value)
    setSave(event.target.value)
  }

  return (
    <AuthCardContent>
      <div>
        <Formik
          initialValues={{
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            confirmPassword: '',
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
                    <InputLabel>FirstName</InputLabel>
                    <Required>Required</Required>
                  </RequiredLabel>

                  <Field style={authInputStyle} type="text" name="firstName" />
                  <ErrorMessage component={err} name="firstName" />
                </Column>

                <Column>
                  <RequiredLabel>
                    <InputLabel>Last Name</InputLabel>
                    <Required>Required</Required>
                  </RequiredLabel>

                  <Field style={authInputStyle} type="text" name="lastName" />
                  <ErrorMessage component={err} name="lastName" />
                </Column>
              </Row>
              <Row>
                <Column>
                  <RequiredLabel>
                    <InputLabel>Email </InputLabel>
                    <Required>Required</Required>
                  </RequiredLabel>

                  <Field style={authInputStyle} type="text" name="email" />
                  <ErrorMessage component={err} name="email" />
                </Column>
              </Row>
              <Row>
                <Column>
                  <RequiredLabel>
                    <InputLabel>Password(min 10 characters) </InputLabel>
                    <Required>Required</Required>
                  </RequiredLabel>

                  <Field style={authInputStyle} type="password" name="password" />
                  <ErrorMessage component={err} name="password" />
                </Column>
              </Row>
              <Row>
                <Column>
                  <RequiredLabel>
                    <InputLabel>Confirm Password </InputLabel>
                    <Required>Required</Required>
                  </RequiredLabel>

                  <Field style={authInputStyle} type="password" name="confirmPassword" />
                  <ErrorMessage component={err} name="confirmPassword" />
                </Column>
              </Row>
              <div style={{ display: 'flex', margin: '10px' }}>
                <input style={{ marginTop: '3px' }} onChange={handleSave} checked={save === 'save'} type="radio" value="save" name="card" />
                <SubscriptionRadioText>
                  By clicking here, I hereby agree and consent to the <LinkTo>Privacy Policy</LinkTo> and <LinkTo>Terms of Use</LinkTo>.{' '}
                </SubscriptionRadioText>
              </div>
              <ButtonWrapper>
                <AcceptButton type="submit">Accept </AcceptButton>
              </ButtonWrapper>
            </Form>
          )}
        </Formik>
      </div>
    </AuthCardContent>
  )
}
const mapStateToProps = (state: any) => ({
  loading: state.user.loading,
})

export default connect(mapStateToProps, { registerStart })(Register)
