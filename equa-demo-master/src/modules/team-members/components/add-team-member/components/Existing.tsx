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
  InviteButton,
  RequiredLabel,
} from '../style'
import ShareInfo from './ShareInfo'

import { inputStyleModal} from '../../../../../shared/styles/theme'
import Dropdown from '../../../../../shared/components/Dropdown'
import history from '../../../../app/components/history'
import { Paths } from '../../../../app/components/routes/types'

const Existing = () => {
  const chooseData = [{ label: 'Choose', value: '' }]
  const teamMemberListData = [
    {
      label: 'Mike Johnson', value: 'Mike Johnson' ,
    },
    {
      label: 'Darcy Prince', value: 'Darcy Prince' ,
    },
    {
      label: 'Dario Shea', value: 'Dario Shea' ,
    },
    {
      label: 'Investment Holdings, LLC', value: 'Investment Holdings, LLC' ,
    },
    {
      label: 'Elsie Blankenship', value: 'Elsie Blankenship' ,
    },
    {
      label: 'Aalia Romero', value: 'Aalia Romero' ,
    },
    {
      label: 'Reef Sharp', value: 'Reef Sharp' ,
    },
  ]

  const sharesData = [{ label: 'Common Shares', value: '' }]
  const editProfile = Yup.object().shape({
    member: Yup.string(),
    approvalDate: Yup.string(),
    issueDate: Yup.string(),
  })
  
  const [selectedRole, setSelectedRole] = useState('')
  const roleSelectHandler = (event: any) => {
    const data = event.target.value
    setSelectedRole(data)
  }

  const [selectedMember, setSelectedMember] = useState('')
  const MemberSelectHandler = (event: any) => {
    const data = event.target.value
    console.log("MemberSelectHandler -> data", data)
    setSelectedMember(data)
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
            member: '',
            approvalDate: '',
            issueDate: '',
          }}
          validationSchema={editProfile}
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
                    <InputLabel>Team Member</InputLabel>
                    <Required>Required</Required>
                  </RequiredLabel>
                  <Dropdown dropDownStyle={'basic'} dropData={teamMemberListData} selectedValue={selectedMember} onValueSelect={MemberSelectHandler} />
                  <ErrorMessage component={err} name="member" />
                </Column>
              </Row>

              <Row>
                <Column>
                  <InputLabel>Board Approval Date</InputLabel>
                  <Field style={inputStyleModal} type="text" name="approvalDate" placeholder="dd/mm/yyyy"  />
                  <ErrorMessage component={err} name="approvalDate" />
                </Column>
                <Column>
                  <InputLabel>Issue Date</InputLabel>
                  <Field style={inputStyleModal} type="text" name="issueDate" placeholder="dd/mm/yyyy"  />
                  <ErrorMessage component={err} name="issueDate" />
                </Column>
              </Row>

              <ShareInfo />
           
              <InviteButton type="submit"  style={{margin:'50px 5px'}}> Add Member</InviteButton>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default Existing
