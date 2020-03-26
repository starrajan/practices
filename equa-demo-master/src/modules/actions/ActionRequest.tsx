import * as React from 'react'
import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useState } from 'react'

import { RequestContainer, ButtonAction, HeaderLink, err, HeaderSubLink, RequestFeatureForm, Row, Column, InputLabel } from './style'

import { colors } from 'shared/styles/theme'
import { inputStyleFilled, inputStyle } from 'shared/styles/theme'
import history from '../app/components/history'
import { Paths } from '../app/components/routes/types'
const ActionRequest = (props: any) => {
  const backToAction = () => {
    history.push(`${Paths.Actions}`)
  }
  const arrow = {
    marginTop: '16px',
    marginRight: '10px',
    height: '15px',
    cursor: 'pointer',
  }

  const RequestSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address format')
      .required('Email is required'),
    name: Yup.string().required('name is required'),
    senderEmail: Yup.string()
      .email('Invalid email address format')
      .required('Email is required'),
    subject: Yup.string().required('subject is required'),
    request: Yup.string().required('subject is required'),
  })

  const submitValues = async (values: any) => {
    console.log('TCL: submitValues -> values', values)
    history.push('/')
  }
  return (
    <RequestContainer>
      <div style={{ display: 'flex' }}>
        <img onClick={backToAction} style={arrow} src={require('assets/image/arrow.png')} alt="" />
        <div>
          <HeaderLink onClick={backToAction}>Actions > Request a Feature</HeaderLink>
          <HeaderSubLink>Cognition, Inc</HeaderSubLink>
        </div>
      </div>

      <RequestFeatureForm>
        <Formik
          initialValues={{ email: '', name: '', senderEmail: '', subject: '', request: '' }}
          validationSchema={RequestSchema}
          onSubmit={(values, { setSubmitting }) => {
            submitValues(values)
            setSubmitting(false)
          }}
        >
          {({ isSubmitting }) => (
            <Form noValidate>
              <Row>
                <Column>
                  <InputLabel>To</InputLabel>
                  <Field style={inputStyleFilled} type="text" name="email" placeholder="" />
                  <ErrorMessage component={err} name="email" />
                </Column>
              </Row>
              <Row>
                <Column>
                  <InputLabel>Your name</InputLabel>

                  <Field style={inputStyleFilled} type="text" name="name" placeholder="Your name" />
                  <ErrorMessage component={err} name="name" />
                </Column>
              </Row>
              <Row>
                <Column>
                  <InputLabel>Your email</InputLabel>
                  <Field style={inputStyleFilled} type="text" name="senderEmail"  placeholder="Your email"/>
                  <ErrorMessage component={err} name="senderEmail" />
                </Column>
              </Row>
              <Row>
                <Column>
                  <InputLabel>Subject</InputLabel>

                  <Field style={inputStyleFilled} type="text" name="subject" placeholder="Subject" />
                  <ErrorMessage component={err} name="subject" />
                </Column>
              </Row>
              <Row>
                <Column>
                  <InputLabel>Request</InputLabel>
                  <Field style={inputStyleFilled} type="text" name="request" placeholder="Request" />
                  <ErrorMessage component={err} name="request" />
                </Column>
              </Row>
              <ButtonAction style={{margin:'10px'}}>Send Request </ButtonAction>
            </Form>
          )}
        </Formik>
      </RequestFeatureForm>
    </RequestContainer>
  )
}

export default ActionRequest
