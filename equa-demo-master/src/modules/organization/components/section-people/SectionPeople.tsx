import * as React from 'react'
import { useState, useEffect } from 'react'
import {
  OrgSectionContainer,
  OrganizationBlock,
  DataBlock,
  QuestionText,
  StyledCircle,
  StyledStepField,
  SaveNextBtn,
  CheckBlock,
  CheckText,
} from '../style'
import {
  MemberLineSeparator,
  AddMemberButton,
  NoMemberText,
  MemberContainer,
  MemberNameContainer,
  MemberName,
  RolesContainer,
  RolesText,
} from './style'
import CustomModal from 'shared/custom-modal/CustomModal'
import AddMember from '../add-members'
import EditSign from 'assets/image/edit-sign.png'
import DeleteSign from 'assets/image/delete-sign.png'
import DeleteSign2 from 'assets/image/delete-sign2.png'

const SectionPeople = (props: any) => {
  const { values } = props
  const [showModal, setShowModal] = useState(false)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleAddMemberModal = () => {
    setShowModal(true)
  }

  const handleAddMember = (member: any) => {
    let members = values.members
    members = [...members, member]
    values.members = members
  }

  const renderMembers = (members: any) => {
    return (
      <MemberContainer>
        {members.map((v: any, k: any) => {
          return (
            <div key={k}>
              <MemberNameContainer>
                <MemberName>{v.fullName}</MemberName>
                <div>
                  <img className="edit-img" src={EditSign} alt="" />
                  <img src={DeleteSign} alt="" />
                </div>
              </MemberNameContainer>
              {v.roles.length > 0 && (
                <RolesContainer>
                  {v.roles.map((role: any, k: any) => {
                    return (
                      <RolesText key={k}>
                        <div>{role}</div>
                        <div>
                          <img src={DeleteSign2} alt="" />
                        </div>{' '}
                      </RolesText>
                    )
                  })}
                </RolesContainer>
              )}
            </div>
          )
        })}
      </MemberContainer>
    )
  }
  return (
    <OrgSectionContainer>
      <OrganizationBlock>
        <StyledCircle complete={true} />
        <StyledStepField complete={true}>
          <div>
            <DataBlock>
              <QuestionText>My Team Members</QuestionText>
              {values.members.length > 0 ? renderMembers(values.members) : <NoMemberText>No Team Members Added</NoMemberText>}

              <MemberLineSeparator />
              <AddMemberButton onClick={() => handleAddMemberModal()}>+ add a Team member</AddMemberButton>
            </DataBlock>
          </div>
        </StyledStepField>
      </OrganizationBlock>
      <OrganizationBlock>
        <StyledCircle complete={true} />
        <CheckBlock>
          <CheckText>
            <span>&#10003;</span>Done
          </CheckText>
        </CheckBlock>
      </OrganizationBlock>
      <SaveNextBtn type="submit" disabled={false} onClick={props.handleClick}>
        Save & Finish
      </SaveNextBtn>
      <CustomModal show={showModal} toggleModal={setShowModal}>
        <AddMember handleAddMember={handleAddMember} setShowModal={setShowModal} />
      </CustomModal>
    </OrgSectionContainer>
  )
}

export default SectionPeople
