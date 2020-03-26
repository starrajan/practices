import * as React from 'react'
import { useState } from 'react'
import { colors, screenSizes } from '../../shared/styles/theme'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import {
  SettingsContainer,
  Row,
  Column,
  ProfileCardTitle,
  ProfileCardHeader,
  err,
  InputLabel,
  ButtonWrapper,
  AcceptButton,
  CancelButton,
} from './style'
import { inputStyle } from '../../shared/styles/theme'

const UserSettings = (props: any) => {
  const ChangePasswordSchema = Yup.object().shape({
    oldPassword: Yup.string().required('Password is required'),
    password: Yup.string()
      .min(6, 'Password must be 6 characters at minimum')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords do not match')
      .min(6, 'Password must be 6 characters at minimum')
      .required('Password is required'),
  })
  const submitValues = async (values: any) => {
    console.log('TCL: submitValues -> values', values)
  }

  return (
    <SettingsContainer>
      <ProfileCardHeader>
        <ProfileCardTitle>Reset Password</ProfileCardTitle>
      </ProfileCardHeader>

      <Formik
        initialValues={{
          oldPassword: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={ChangePasswordSchema}
        onSubmit={(values, { setSubmitting }) => {
          submitValues(values)
          setSubmitting(false)
        }}
      >
        {({ isSubmitting }) => (
          <Form noValidate>
            <Row>
              <Column>
                <InputLabel>Current Password </InputLabel>
                <Field style={inputStyle} type="text" name="oldPassword" />
                <ErrorMessage component={err} name="oldPassword" />
              </Column>
            </Row>
            <Row>
              <Column>
                <InputLabel>New Password </InputLabel>
                <Field style={inputStyle} type="text" name="password" />
                <ErrorMessage component={err} name="password" />
              </Column>
            </Row>
            <Row>
              <Column>
                <InputLabel>Confirm Password </InputLabel>
                <Field style={inputStyle} type="text" name="confirmPassword" />
                <ErrorMessage component={err} name="confirmPassword" />
              </Column>
            </Row>

            <ButtonWrapper style={{ margin: '38px 0 0 6px',    justifyContent: 'flex-start'}}>
              <AcceptButton type="submit">Reset </AcceptButton>
            </ButtonWrapper>
          </Form>
        )}
      </Formik>
    </SettingsContainer>
  )
}

export default UserSettings
