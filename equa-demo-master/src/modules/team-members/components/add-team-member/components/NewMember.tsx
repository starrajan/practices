import * as React from 'react'
import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import { Row, Column, err, InputLabel, Required, InviteButton, RequiredLabel } from '../style'
import ShareInfo from './ShareInfo'

import { inputStyleModal } from '../../../../../shared/styles/theme'
import Dropdown from '../../../../../shared/components/Dropdown'
import history from '../../../../app/components/history'
import { Paths } from '../../../../app/components/routes/types'

const NewMember = () => {
  const chooseData = [{ label: 'Choose', value: '' }]
  const sharesData = [{ label: 'Common Shares', value: '' }]

  const memberAdd = Yup.object().shape({
    name: Yup.string(),
    email: Yup.string()
      .email('Invalid email address format'),
    role: Yup.string(),
    title: Yup.string(),
    dob: Yup.string(),
    country: Yup.string(),
    street: Yup.string(),
    state: Yup.string(),
    city: Yup.string(),
    postalCode: Yup.string(),
  })
  const [selectedRole, setSelectedRole] = useState('')
  const roleSelectHandler = (event: any) => {
    const state = event.target.value
  }
  const submitValues = async () => {
    history.push(`${Paths.TeamMember}`)
  }
  const arrow = {
    marginTop: '16px',
    marginRight: '10px',
    height: '15px',
    cursor: 'pointer',
  }
  // const backToProfile = () => {
  //   history.push(`${Paths.teamMembersProfile}/d1b2446c-e62b-11e9-81b4-2a2ae2dbcce4`)
  // }
  const [activeTab, setActiveTab] = useState('existing')
  const selectTab = (val: any) => {
    setActiveTab(val)
  }

  return (
    <div>
      <div style={{ marginTop: '20px' }}>
        <Formik
          initialValues={{
            name: '',
            email: '',
            dob: '',
            role: '',
            title: '',
            country: '',
            street: '',
            city: '',
            state: '',
            postalCode: '',
          }}
          validationSchema={memberAdd}
          onSubmit={(values, { setSubmitting }) => {
            submitValues()
            setSubmitting(false)
          }}
        >
          {({ isSubmitting }) => (
            <Form noValidate>
              <Row>
                <Column>
                  <RequiredLabel>
                    <InputLabel> Full Name </InputLabel>
                    <Required>Required</Required>
                  </RequiredLabel>

                  <Field style={inputStyleModal} type="text" name="name" placeholder="Team member name" />
                  <ErrorMessage component={err} name="name" />
                </Column>
              </Row>
              <Row>
                <Column>
                  <RequiredLabel>
                    <InputLabel> Email Address </InputLabel>
                    <Required>Required</Required>
                  </RequiredLabel>

                  <Field style={inputStyleModal} type="text" name="email" placeholder="email" />
                  <ErrorMessage component={err} name="email" />
                </Column>
              </Row>
              <Row>
                <Column>
                  <RequiredLabel>
                    <InputLabel> Roles </InputLabel>
                    <Required>Required</Required>
                  </RequiredLabel>
                  <Dropdown dropDownStyle={'basic'} dropData={chooseData} selectedValue={selectedRole} onValueSelect={roleSelectHandler} />
                  <ErrorMessage component={err} name="role" />
                </Column>
              </Row>
              <Row>
                <Column>
                  <InputLabel>Title</InputLabel>
                  <Field style={inputStyleModal} type="text" name="title" placeholder="Title"/>
                  <ErrorMessage component={err} name="title" />
                </Column>
              </Row>
              <Row>
                <Column>
                  <InputLabel>Date of Birth</InputLabel>
                  <Field style={inputStyleModal} type="text" name="dob" placeholder="dd/mm/yyyy" />
                  <ErrorMessage component={err} name="dob" />
                </Column>
              </Row>

              <Row>
                <Column>
                  <InputLabel>Country </InputLabel>
                  <Dropdown dropDownStyle={'basic'} dropData={chooseData} selectedValue={selectedRole} onValueSelect={roleSelectHandler} />
                  <ErrorMessage component={err} name="country" />
                </Column>
              </Row>
              <Row>
                <Column>
                  <InputLabel>Street Address </InputLabel>
                  <Field style={inputStyleModal} type="text" name="street"  placeholder="Street"/>
                  <ErrorMessage component={err} name="street" />
                </Column>
              </Row>
              <Row>
                <Column>
                  <InputLabel>State</InputLabel>
                  <Dropdown dropDownStyle={'basic'} dropData={chooseData} selectedValue={selectedRole} onValueSelect={roleSelectHandler} />
                  <ErrorMessage component={err} name="state" />
                </Column>

                <Column>
                  <InputLabel>City</InputLabel>
                  <Field style={inputStyleModal} type="text" name="city" />
                  <ErrorMessage component={err} name="city" />
                </Column>
              </Row>
              <Row>
                <Column>
                  <InputLabel>Postal Code </InputLabel>
                  <Field style={inputStyleModal} type="text" name="postalCode" />
                  <ErrorMessage component={err} name="postalCode" />
                </Column>
              </Row>
              <div>
                <ShareInfo />
              </div>
              <InviteButton type="submit" style={{ margin: '50px 5px' }}> Add Member</InviteButton>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default NewMember
