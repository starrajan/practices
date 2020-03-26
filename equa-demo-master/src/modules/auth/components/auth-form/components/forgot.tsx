import * as React from 'react'
import { Paths } from '../../../../app/components/routes/types'

import {
  AuthCardContent,
  InputLabel,
  Row,
  Column,
  ForgotText,
  ButtonWrapper,
  HeaderLink,
  AcceptButton,
  CancelButton,
  err,
  LinkTextGreen,
  AuthWrapper,
} from './style'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import history from '../../../../app/components/history'
import { authInputStyle } from '../../../../../shared/styles/theme'

interface Props {
  successAlert: any
  errorAlert: any
  loading: boolean
  mailVerify: boolean
  otpVerify: boolean
  reqMailVerify: any
  reqOtpVerify: any
}
function Forgot() {
  const EmailSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address format')
      .required('Email is required'),
  })

  const submitEmailValues = async (values: any) => {
    console.log('TCL: submitEmailValues -> values', values)
    // history.push('/reset-password/334444')
  }
const backToLogin =()=>{
    history.push(Paths.userLogin)
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
          <img onClick={backToLogin} style={arrow} src={require('assets/image/arrow.png')} alt="" />
          <HeaderLink>Forgot Your Password?</HeaderLink>
        </div>
        <ForgotText>To reset your password, please enter your e-mail address and We will send the password reset instructions.</ForgotText>

        <div>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={EmailSchema}
            onSubmit={(values, { setSubmitting }) => {
              submitEmailValues(values)
              setSubmitting(false)
            }}
          >
            {({ isSubmitting }) => (
              <Form noValidate>
                <Row>
                  <Column>
                    <InputLabel>Email address </InputLabel>
                    <Field style={authInputStyle} type="text" name="email" />
                    <ErrorMessage component={err} name="email" />
                  </Column>
                </Row>

                <ButtonWrapper>
                  <AcceptButton type="submit" style={{ width: 'auto' }}>
                    RESET PASSWORD{' '}
                  </AcceptButton>
                </ButtonWrapper>
                <LinkTextGreen>Cancel</LinkTextGreen>
              </Form>
            )}
          </Formik>
        </div>
      </AuthWrapper>
    </AuthCardContent>
  )
}

export default Forgot
