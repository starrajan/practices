import * as React from 'react'
import { useState } from 'react'
import { colors } from '../../../../shared/styles/theme'
import { Input, InputTextArea, MultiSelect, ProgressBar, ProgressBarWhite } from 'shared/components/form-component'
import {
  HeaderLink,
  AddContainer,
  AddOptionsWrapper,
  AddOptions,
  UnitsProgress,
  ProgressSection
} from './style'
import history from '../../../app/components/history'
import { Paths } from '../../../app/components/routes/types'
import { EditProfileContainer, EditProfileForm } from './style'
import Existing from './components/Existing'
import NewMember from './components/NewMember'

const AddTeamMembers = () => {
  const [completedPercent, setCompletedPercent] = useState(56)

  const arrow = {
    marginTop: '16px',
    marginRight: '10px',
    height: '15px',
    cursor: 'pointer',
  }
  const backToProfile = () => {
    history.push(Paths.TeamMember)
  }
  const [activeTab, setActiveTab] = useState('existing')
  const selectTab = (val: any) => {
    setActiveTab(val)
  }

  return (
    <EditProfileContainer>
      <ProgressSection>
        <div style={{display:'flex'}}>
        <img onClick={backToProfile} style={arrow} src={require('assets/image/arrow.png')} alt="" />
        <HeaderLink onClick={backToProfile}>Add a new member</HeaderLink>
        </div>

        <UnitsProgress>
          <ProgressBar percent={completedPercent} />
          <p>{`${completedPercent}% Complete`}</p>
        </UnitsProgress>
      </ProgressSection>

      <AddContainer>
        <AddOptionsWrapper>
          <AddOptions
            onClick={() => selectTab('existing')}
            style={{
              border: activeTab === 'existing' ? '1px solid #57BB41' : 'none',
              color: activeTab === 'existing' ? colors.green : colors.white,
            }}
          >
            Add Existing Team Member
          </AddOptions>
          <AddOptions
            onClick={() => selectTab('new')}
            style={{
              border: activeTab === 'new' ? '1px solid #57BB41' : 'none',
              color: activeTab === 'new' ? colors.green : colors.white,
            }}
          >
            Add New Team Member
          </AddOptions>
        </AddOptionsWrapper>

        {activeTab === 'existing' ? <Existing /> : <NewMember/>}
      </AddContainer>
    </EditProfileContainer>
  )
}

export default AddTeamMembers
