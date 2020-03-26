import * as React from 'react'
import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import {
  Row,
  Column,
  err,
  InputLabel,
  Required,
  ButtonGroup,
  InviteButton,
  FormHeading,
  AddBlock,
  MathBlock,
  BlockWrap,
  RequiredLabel,
  HeaderLink,
  ProgressSection,
  UnitsProgress
} from './style'
import { inputStyleModal, inputStyle, inputStylePayment } from '../../../../shared/styles/theme'
import Dropdown from '../../../../shared/components/Dropdown'
import history from '../../../app/components/history'
import { Paths } from '../../../app/components/routes/types'
import { Input, InputTextArea, MultiSelect, ProgressBar, ProgressBarWhite } from 'shared/components/form-component'

import { withRouter, RouteComponentProps } from 'react-router'
import { connect } from 'react-redux'
import profile from '../../../../assets/image/profile.png'
import { EditProfileContainer, EditProfileForm } from './style'

const EditTeamMembersProfile = () => {
  const chooseData = [{ label: 'Choose Member', value: '' }]
  const sharesData = [{ label: 'Common Shares', value: '' }]

  const editProfile = Yup.object().shape({
    firstName: Yup.string().required('Name is Required'),
    lastName: Yup.string().required('Name is Required'),
    email: Yup.string()
      .email('Invalid email address format')
      .required('Email is required'),
    role: Yup.string().required('Role is Required'),
    sharesOwn: Yup.string().required('shares is Required'),
    transferFrom: Yup.string(),
    shareClass: Yup.string().required('share Class is Required'),
    amount: Yup.string().required('Amount of shares is Required'),
  })
  const [selectedRole, setSelectedRole] = useState('')
  const roleSelectHandler = (event: any) => {
    const state = event.target.value
    // setSelectedState(state)
  }
  const submitValues = async (values: any) => {
    console.log('TCL: submitValues -> values', values)
  }
  const arrow = {
    marginTop: '16px',
    marginRight: '10px',
    height: '15px',
    cursor: 'pointer',
  }
  const backToProfile = () => {
    history.push(`${Paths.teamMembersProfile}/d1b2446c-e62b-11e9-81b4-2a2ae2dbcce4`)
  }
  const [completedPercent, setCompletedPercent] = useState(56)

  return (
    <EditProfileContainer>

      <ProgressSection>
        <div style={{display:'flex'}}>
        <img onClick={backToProfile} style={arrow} src={require('assets/image/arrow.png')} alt="" />
        <HeaderLink onClick={backToProfile}>Edit Member Profile</HeaderLink>
        </div>

        <UnitsProgress>
          <ProgressBar percent={completedPercent} />
          <p>{`${completedPercent}% Complete`}</p>
        </UnitsProgress>
      </ProgressSection>


      <EditProfileForm>
        <Formik
          initialValues={{
            firstName: '',
            email: '',
            lastName: '',
            role: '',
            sharesOwn: '',
            transferFrom: '',
            shareClass: '',
            amount: '',
          }}
          validationSchema={editProfile}
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
                    <InputLabel>First Name</InputLabel>
                    <Required>Required</Required>
                  </RequiredLabel>
                  <Field style={inputStyleModal} type="text" name="firstName" />
                  <ErrorMessage component={err} name="firstName" />
                </Column>

                <Column>
                  <RequiredLabel>
                    <InputLabel>Last Name</InputLabel>
                    <Required>Required</Required>
                  </RequiredLabel>

                  <Field style={inputStyleModal} type="text" name="lastName" />
                  <ErrorMessage component={err} name="lastName" />
                </Column>
              </Row>

              <Row>
                <Column>
                  <RequiredLabel>
                    <InputLabel>Email Address</InputLabel>
                    <Required>Required</Required>
                  </RequiredLabel>

                  <Field style={inputStyleModal} type="text" name="email" />
                  <ErrorMessage component={err} name="email" />
                </Column>
              </Row>

              <Row>
                <Column>
                  <RequiredLabel>
                    <InputLabel>Roles</InputLabel>
                    <Required>Required</Required>
                  </RequiredLabel>

                  <Dropdown dropDownStyle={'basic'} dropData={chooseData} selectedValue={selectedRole} onValueSelect={roleSelectHandler} />
                  <ErrorMessage component={err} name="role" />
                </Column>
              </Row>

              <FormHeading>Share Information</FormHeading>
              <AddBlock>
                <Column>
                  <InputLabel>How many shares do they own? </InputLabel>
                  <Field style={inputStyleModal} type="text" name="sharesOwn" />
                  <ErrorMessage component={err} name="sharesOwn" />
                </Column>

                <BlockWrap>
                  <MathBlock>-</MathBlock>
                  <MathBlock>+</MathBlock>
                </BlockWrap>
              </AddBlock>

              <Row>
                <Column>
                  <RequiredLabel>
                    <InputLabel>Transfer Shares From(optional)</InputLabel>
                    <Required>Required</Required>
                  </RequiredLabel>

                  <Dropdown dropDownStyle={'basic'} dropData={chooseData} selectedValue={selectedRole} onValueSelect={roleSelectHandler} />
                  <ErrorMessage component={err} name="transferFrom" />
                </Column>
              </Row>

              <Row>
                <Column>
                  <RequiredLabel>
                    <InputLabel>Class of Shares</InputLabel>
                    <Required>Required</Required>
                  </RequiredLabel>

                  <Dropdown dropDownStyle={'basic'} dropData={sharesData} selectedValue={selectedRole} onValueSelect={roleSelectHandler} />
                  <ErrorMessage component={err} name="shareClass" />
                </Column>
              </Row>

              <AddBlock>
                <Column>
                  <RequiredLabel>
                    <InputLabel>Amount of Shares to transfer</InputLabel>
                    <Required>Required</Required>
                  </RequiredLabel>
                  <Field style={inputStyleModal} type="text" name="amount" />
                  <ErrorMessage component={err} name="amount" />
                </Column>

                <BlockWrap>
                  <MathBlock>-</MathBlock>
                  <MathBlock>+</MathBlock>
                </BlockWrap>
              </AddBlock>

              <ButtonGroup>
                <InviteButton type="submit">Add member</InviteButton>
              </ButtonGroup>
            </Form>
          )}
        </Formik>
      </EditProfileForm>
    </EditProfileContainer>
  )
}

export default EditTeamMembersProfile
