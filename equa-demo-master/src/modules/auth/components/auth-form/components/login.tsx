import React from 'react'
import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { connect } from 'react-redux'
import { Paths } from '../../../../app/components/routes/types'

import {
  Container,
  AuthCard,
  AuthCardHead,
  AuthCardContent,
  AuthHeadTitle,
  AcceptButton,
  InputLabel,
  LinkText,
  ButtonWrapper,
  Column,
  LinkTextGreen,
  Row,
  err,
  Required,
  RequiredLabel,
} from './style'
import history from '../../../../app/components/history'
import { authInputStyle } from '../../../../../shared/styles/theme'

interface Props {
  loading: boolean
}

function Login(props: Props) {
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address format')
      .required('Email is required'),
    password: Yup.string()
      .min(3, 'Password must be 10 characters at minimum')
      .required('Password is required'),
  })

  const submitValues = async (values: any) => {
    console.log('TCL: submitValues -> values', values)
    history.push('/')
  }
  const forgotPassword = () => {
    history.push('/forgot-password')
  }

  const register = () => {
    history.push('/register')
  }

  return (
    <AuthCardContent>
      <div>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={LoginSchema}
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
                    <InputLabel>Email address? </InputLabel>
                    <Required>Required</Required>
                  </RequiredLabel>
                  <Field style={authInputStyle} type="text" name="email" />
                  <ErrorMessage component={err} name="email" />
                </Column>
              </Row>
              <Row>
                <Column>
                  <RequiredLabel>
                    <InputLabel>Password(min 10 characters)</InputLabel>
                    <Required>Required</Required>
                  </RequiredLabel>
                  <Field style={authInputStyle} type="password" name="password" />
                  <ErrorMessage component={err} name="password" />
                </Column>
              </Row>

              <ButtonWrapper>
                <AcceptButton type="submit">Login </AcceptButton>
              </ButtonWrapper>
              <LinkTextGreen onClick={() => history.push(Paths.userForgot)}>Forgot Your Password?</LinkTextGreen>
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

export default connect(mapStateToProps)(Login)
