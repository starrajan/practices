import * as React from 'react'
import { useState } from 'react'
import { colors, screenSizes } from '../../shared/styles/theme'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import upload from '../../assets/image/docupload.png'
import { Input, InputTextArea, MultiSelect, ProgressBar, ProgressBarWhite } from 'shared/components/form-component'

import * as Yup from 'yup'
import {
  EditOperating,
  HeaderLink,
  OperatingAgreementContainer,
  EditForm,
  GreyButton,
  InputLabel,
  Row,
  Column,
  err,
  SubText,
  LightText,
  ButtonWrapper,
  AcceptButton,
  UnitsProgress,
} from './style'
import history from '../app/components/history'
import { Paths } from '../app/components/routes/types'
import { inputStyleFilled, inputStyle, inputStylePayment } from '../../shared/styles/theme'
import Dropdown from '../../shared/components/Dropdown'

const CreateOperatingAgreement = (props: any) => {
  const arrow = {
    marginTop: '16px',
    marginRight: '10px',
    height: '15px',
    cursor: 'pointer',
  }
  const stateData = [{ label: 'Choose', value: 'Choose' }]
  const createAgreement = Yup.object().shape({
    RegisteredAgent: Yup.string().required('Required'),
    ManagementStructure: Yup.string().required('Required'),
  })

  const addMember = Yup.object().shape({
    addMember: Yup.string().required('Required'),
    FirstName: Yup.string().required('Required'),
    LastName: Yup.string().required('Required'),
    Roles: Yup.string().required('Required'),
    Shares: Yup.string().required('Required'),
  })

  const addManager = Yup.object().shape({
    addManager: Yup.string().required('Required'),
    ManagerFirstName: Yup.string().required('Required'),
    ManagerLastName: Yup.string().required('Required'),
    ManagerTitle: Yup.string().required('Required'),
    ManagerShares: Yup.string().required('Required'),
    ManagerState: Yup.string().required('Required'),
    HoldShares: Yup.string().required('Required'),
  })
  const [completedPercent, setCompletedPercent] = useState(56)

  const submitValues = async (values: any) => {
    console.log('TCL: submitValues -> values', values)
  }
  const [selectedState, setSelectedRole] = useState('')
  const StateSelectHandler = (event: any) => {
    const state = event.target.value
  }
  const back = () => {
    history.push(Paths.OperatingAgreement)
  }
  return (
    <OperatingAgreementContainer>
      <EditOperating>
        <div style={{display:"flex"}}>
          <img onClick={back} style={arrow} src={require('assets/image/arrow.png')} alt="" />
          <HeaderLink onClick={back}>Create Operating Agreement</HeaderLink>
        </div>

        <UnitsProgress>
          <ProgressBar percent={completedPercent} />
          <p>{`${completedPercent}% Complete`}</p>
        </UnitsProgress>

      </EditOperating>
      <LightText>Leverage agile frameworks to provide a robust synopsis for high level overviews.</LightText>

      <EditForm>
        <Formik
          initialValues={{
            RegisteredAgent: '',
            ManagementStructure: '',
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
                  <InputLabel>Do you have a third party registered agent?*</InputLabel>
                  <Field style={inputStyleFilled} type="text" name="RegisteredAgent" />
                  <ErrorMessage component={err} name="RegisteredAgent" />
                </Column>
              </Row>

              <Row>
                <Column>
                  <InputLabel>What is your management structure?*</InputLabel>
                  <Field style={inputStyleFilled} type="text" name="ManagementStructure" />
                  <ErrorMessage component={err} name="ManagementStructure" />
                </Column>
              </Row>
            </Form>
          )}
        </Formik>

        <SubText>Add Members</SubText>

        <div>
          <Formik
            initialValues={{
              addMember: '',
              FirstName: '',
              LastName: '',
              Roles: '',
              Shares: '',
            }}
            validationSchema={addMember}
            onSubmit={(values, { setSubmitting }) => {
              submitValues(values)
              setSubmitting(false)
            }}
          >
            {({ isSubmitting }) => (
              <Form noValidate>
                <Row>
                  <Column>
                    <InputLabel>Add Members From Your Team</InputLabel>
                    <Dropdown
                      dropDownStyle={'basic'}
                      dropData={stateData}
                      selectedValue={selectedState}
                      onValueSelect={StateSelectHandler}
                    />
                    <ErrorMessage component={err} name="addMember" />
                  </Column>
                </Row>
                <LightText>Or Add New Members</LightText>
                <Row>
                  <Column>
                    <InputLabel>First Name</InputLabel>
                    <Field style={inputStyleFilled} type="text" name="FirstName" />
                    <ErrorMessage component={err} name="FirstName" />
                  </Column>
                  <Column>
                    <InputLabel>Last Name</InputLabel>
                    <Field style={inputStyleFilled} type="text" name="LastName" />
                    <ErrorMessage component={err} name="LastName" />
                  </Column>
                </Row>
                <Row>
                  <Column>
                    <InputLabel>Roles</InputLabel>
                    <Dropdown
                      dropDownStyle={'basic'}
                      dropData={stateData}
                      selectedValue={selectedState}
                      onValueSelect={StateSelectHandler}
                    />
                    <ErrorMessage component={err} name="Roles" />
                  </Column>
                </Row>
                <Row>
                  <Column>
                    <InputLabel>Number Of Shares</InputLabel>
                    <Field style={inputStyleFilled} type="text" name="LastName" />
                    <ErrorMessage component={err} name="LastName" />
                  </Column>
                </Row>
                <GreyButton>ADD NEW </GreyButton>
              </Form>
            )}
          </Formik>
        </div>
        <SubText>Add Managers</SubText>
        <div>
          <Formik
            initialValues={{
              addManager: '',
              ManagerFirstName: '',
              ManagerLastName: '',
              ManagerTitle: '',
              ManagerShares: '',
              ManagerState: '',
              HoldShares: '',
            }}
            validationSchema={addManager}
            onSubmit={(values, { setSubmitting }) => {
              submitValues(values)
              setSubmitting(false)
            }}
          >
            {({ isSubmitting }) => (
              <Form noValidate>
                <Row>
                  <Column>
                    <InputLabel>Add Manager From Your Team</InputLabel>
                    <Dropdown
                      dropDownStyle={'basic'}
                      dropData={stateData}
                      selectedValue={selectedState}
                      onValueSelect={StateSelectHandler}
                    />
                    <ErrorMessage component={err} name="addManager" />
                  </Column>
                </Row>
                <LightText>Or Add New Manager</LightText>

                <Row>
                  <Column>
                    <InputLabel>First Name</InputLabel>
                    <Field style={inputStyleFilled} type="text" name="ManagerFirstName" />
                    <ErrorMessage component={err} name="ManagerFirstName" />
                  </Column>
                  <Column>
                    <InputLabel>Last Name</InputLabel>
                    <Field style={inputStyleFilled} type="text" name="ManagerLastName" />
                    <ErrorMessage component={err} name="ManagerLastName" />
                  </Column>
                </Row>
                <Row>
                  <Column>
                    <InputLabel>Title</InputLabel>
                    <Field style={inputStyleFilled} type="text" name="ManagerTitle" />
                    <ErrorMessage component={err} name="ManagerTitle" />
                  </Column>
                </Row>
                <Row>
                  <Column>
                    <InputLabel>Number Of Shares</InputLabel>
                    <Field style={inputStyleFilled} type="text" name="ManagerShares" />
                    <ErrorMessage component={err} name="ManagerShares" />
                  </Column>
                </Row>

                <Row>
                  <Column>
                    <InputLabel>Registered State</InputLabel>
                    <Dropdown
                      dropDownStyle={'basic'}
                      dropData={stateData}
                      selectedValue={selectedState}
                      onValueSelect={StateSelectHandler}
                    />
                    <ErrorMessage component={err} name="ManagerState" />
                  </Column>
                </Row>

                <Row>
                  <Column>
                    <InputLabel>Member-hold Shares</InputLabel>
                    <Field style={inputStyleFilled} type="text" name="HoldShares" />
                    <ErrorMessage component={err} name="HoldShares" />
                  </Column>
                </Row>
                <GreyButton>ADD NEW </GreyButton>
              </Form>
            )}
          </Formik>
          <SubText>Upload Documents</SubText>
          <div style={{ display: 'flex' }}>
            <img src={upload} alt="" />
            <LightText style={{ margin: '36px' }}>Click to upload</LightText>
          </div>
          <ButtonWrapper>
            <AcceptButton>Save & Sign</AcceptButton>
            <AcceptButton>SAVE progress </AcceptButton>
          </ButtonWrapper>
        </div>
      </EditForm>
    </OperatingAgreementContainer>
  )
}

export default CreateOperatingAgreement
