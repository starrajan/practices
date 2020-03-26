import * as React from 'react'
import { useState } from 'react'
import { colors, screenSizes } from '../../shared/styles/theme'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import {
  EditOperating,
  HeaderLink,
  OperatingAgreementContainer,
  EditForm,
  InputLabel,
  Row,
  Column,
  err,
  ButtonWrapper,
  AcceptButton,
  CancelButton,
} from './style'
import { inputStyleFilled, inputStyle, inputStylePayment } from '../../shared/styles/theme'
import Dropdown from '../../shared/components/Dropdown'
import history from '../app/components/history'
import { Paths } from '../app/components/routes/types'
const EditOperatingAgreement = (props: any) => {
  const arrow = {
    marginTop: '16px',
    marginRight: '10px',
    height: '15px',
    cursor: 'pointer',
  }
  const stateData = [{ label: 'Choose', value: 'Choose' }]
  const UnitData = [{ label: 'Units', value: 'Choose' }]

  const editAgreement = Yup.object().shape({
    state: Yup.string().required('Registered State is required'),
    party: Yup.string().required('3rd Party Registrar is required'),
    memberShares: Yup.string().required('Member Shares is required'),
    Measurement: Yup.string().required('Measurementis required'),
    ManagementStructure: Yup.string().required('Management Structure is required'),
    TotalMembers: Yup.string().required('Total Members is required'),
    TotalManagers: Yup.string().required('Total Managers is required'),
  })

  const submitValues = async (values: any) => {
    console.log('TCL: submitValues -> values', values)
  }
  const [selectedState, setSelectedRole] = useState('')
  const StateSelectHandler = (event: any) => {
    const state = event.target.value
  }
  const back=()=>{
    history.push(Paths.OperatingAgreement)
  }

  return (
    <OperatingAgreementContainer>
      <EditOperating>
        <img onClick={back} style={arrow} src={require('assets/image/arrow.png')} alt="" />
        <HeaderLink onClick={back}>Edit Operating Agreement</HeaderLink>
      </EditOperating>

      <EditForm>
        <Formik
          initialValues={{
            state: '',
            party: '',
            memberShares: '',
            Measurement: '',
            ManagementStructure: '',
            TotalMembers: '',
            TotalManagers: '',
          }}
          validationSchema={stateData}
          onSubmit={(values, { setSubmitting }) => {
            submitValues(values)
            setSubmitting(false)
          }}
        >
          {({ isSubmitting }) => (
            <Form noValidate>
              <Row>
                <Column>
                  <InputLabel>Registered State</InputLabel>
                  <Dropdown dropDownStyle={'basic'} dropData={stateData} selectedValue={selectedState} onValueSelect={StateSelectHandler} />
                  <ErrorMessage component={err} name="state" />
                </Column>
              </Row>

              <Row>
                <Column>
                  <InputLabel>3rd Party Registrar</InputLabel>
                  <Field style={inputStyleFilled} type="text" name="party" />
                  <ErrorMessage component={err} name="party" />
                </Column>
              </Row>

              <Row>
                <Column>
                  <InputLabel>Member-hold Shares </InputLabel>
                  <Field style={inputStyleFilled} type="text" name="memberShares" />
                  <ErrorMessage component={err} name="memberShares" />
                </Column>

                <Column>
                  <InputLabel>Measurement</InputLabel>
                  <Dropdown dropDownStyle={'basic'} dropData={UnitData} selectedValue={selectedState} onValueSelect={StateSelectHandler} />
                  <ErrorMessage component={err} name="Measurement" />
                </Column>
              </Row>

              <Row>
                <Column>
                  <InputLabel>Management Structure</InputLabel>
                  <Field style={inputStyleFilled} type="text" name="ManagementStructure" />
                  <ErrorMessage component={err} name="ManagementStructure" />
                </Column>
              </Row>

              <Row>
                <Column>
                  <InputLabel>Total Members </InputLabel>
                  <Field style={inputStyleFilled} type="text" name="TotalMembers" />
                  <ErrorMessage component={err} name="TotalMembers" />
                </Column>

                <Column>
                  <InputLabel>Total Managers </InputLabel>
                  <Field style={inputStyleFilled} type="text" name="TotalManagers" />
                  <ErrorMessage component={err} name="TotalManagers" />
                </Column>
              </Row>

              <ButtonWrapper>
                <AcceptButton>Save Changes</AcceptButton>
                <CancelButton>CANCEL </CancelButton>
              </ButtonWrapper>
            </Form>
          )}
        </Formik>
      </EditForm>
    </OperatingAgreementContainer>
  )
}

export default EditOperatingAgreement
