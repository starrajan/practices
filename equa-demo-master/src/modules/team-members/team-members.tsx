import * as React from 'react'
import { withRouter, match } from 'react-router'
import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { History } from 'history'
import { Paths } from '../app/components/routes/types'

import downArrow from '../../assets/image/DownArrowImg.png'
import csv from '../../assets/image/uploadCsvImg.png'
import { StyledTable } from '../../shared/components/styledTable'
import UploadCsv from './components/csv-upload'
import { colors, screenSizes } from '../../shared/styles/theme'

// import { Container } from '@styles/styled'
import * as moment from 'moment'
// import { getTeamMemberList, GetTeamMemberListDispatch, Paths } from '@logic'
import InviteMember from './components/invite-team-members/invite-member'
import CustomModal from '../../shared/custom-modal/CustomModal'
import CrossButtonHeader from '../../shared/custom-modal/components/crossBtnHeader'
import { ModalContainerHeading, ModalContainerText } from '../../shared/custom-modal/style'

import {
  TeamMemberContainer,
  MembersOrg,
  MembersOrgButton,
  MembersOrgButtonGroup,
  OrganizationName,
  LineSeparator,
  MemberContainer,
  UserProfilePic,
  DefaultUserProfilePic,
  MemberName,
  DownArrow,
  MemberSince,
  RightAlignedColumnHeading,
  LeftAlignedColumnHeading,
  RightAlignedTextRow,
  NameHeading,
  TeamMembersTable,
  InviteContent,
  UploadContent,
  LinkText,
  UploadImage,
  InviteContentTeam
} from './style'

interface Props {
  history: History
}

interface StateProps {
  user: any
  match: any
  teamMemberListData: any
  // getTeamMemberList: GetTeamMemberListDispatch
  isLoading: boolean
  isError: boolean
}

interface TeamMemberList {
  memberName: string
  designation: string
  joinDate: string
  memberShare: number
  ownership: number
  imgSrc: string
}
interface State {
  teamMemberList: Array<TeamMemberList>
}


const TeamMembers = (props: Props & StateProps) => {

  const [showModal, setShowModal] = useState(false)
  const [showInviteMemberModal, setShowInviteMemberModal] = useState<boolean>(false)
  const [showUploadCsvModal, setShowUploadCsvModal] = useState<boolean>(false)
  const teamMemberListData = [
    {
      deleted: false,
      created: '2019-10-03T22:19:44.356Z',
      modified: '2019-10-03T22:19:44.356Z',
      id: 'd1b2446c-e62b-11e9-81b4-2a2ae2dbcce4',
      title: null,
      email: 'MikeJohnson@ideasbynature.com',
      fullName: 'Mike Johnson',
      dateOfBirth: null,
      address: null,
      organization: '1304da61-6575-41d1-a203-cd8f7e310484',
      user: null,
      shares: '4000000',
      ownership: '40%',
      designation: 'CEO',
      joinDate: '6/30/2018',
    },
    {
      deleted: false,
      created: '2019-10-04T20:17:50.312Z',
      modified: '2019-10-04T20:17:50.312Z',
      id: '3b6171a5-af34-4f68-9e06-140e2757473a',
      title: null,
      email: 'DarcyPrince@nowhere.com',
      fullName: 'Darcy Prince',
      dateOfBirth: null,
      address: null,
      organization: '1304da61-6575-41d1-a203-cd8f7e310484',
      user: '6e5338f8-6dc8-11e9-a923-1681be663d3e',
      shares: '3000000',
      ownership: '20%',
      designation: 'CTO',
      joinDate: '6/30/2018',
    },
    {
      deleted: false,
      created: '2019-10-10T18:23:03.453Z',
      modified: '2019-10-10T18:23:03.453Z',
      id: '3a2256ad-f08a-4d72-878a-9da2e40e2c0e',
      title: null,
      email: 'DarioShea@gmail.com',
      fullName: 'Dario Shea',
      dateOfBirth: null,
      address: null,
      organization: '1304da61-6575-41d1-a203-cd8f7e310484',
      user: '645f100a-5107-42c1-9643-f72bbac0aee5',
      shares: '2000000',
      ownership: '15%',
      designation: 'Investor',
      joinDate: '23/30/2018',
    },
    {
      deleted: false,
      created: '2019-10-10T18:23:03.453Z',
      modified: '2019-10-10T18:23:03.453Z',
      id: '3a2256ad-f08a-4d72-878a-9da2e40e2c0e',
      title: null,
      email: 'InvestmentHoldings@gmail.com',
      fullName: 'Investment Holdings, LLC',
      dateOfBirth: null,
      address: null,
      organization: '1304da61-6575-41d1-a203-cd8f7e310484',
      user: '645f100a-5107-42c1-9643-f72bbac0aee5',
      shares: '2000000',
      ownership: '10%',
      designation: 'Investor',
      joinDate: '23/30/2018',
    },
    {
      deleted: false,
      created: '2019-10-10T18:23:03.453Z',
      modified: '2019-10-10T18:23:03.453Z',
      id: '3a2256ad-f08a-4d72-878a-9da2e40e2c0e',
      title: null,
      email: 'Elsieblankenship@gmail.com',
      fullName: 'Elsie Blankenship',
      dateOfBirth: null,
      address: null,
      organization: '1304da61-6575-41d1-a203-cd8f7e310484',
      user: '645f100a-5107-42c1-9643-f72bbac0aee5',
      shares: '2000000',
      ownership: '5%',
      designation: 'Investor',
      joinDate: '23/30/2018',
    },
    {
      deleted: false,
      created: '2019-10-10T18:23:03.453Z',
      modified: '2019-10-10T18:23:03.453Z',
      id: '3a2256ad-f08a-4d72-878a-9da2e40e2c0e',
      title: null,
      email: 'AaliaRomero@gmail.com',
      fullName: 'Aalia Romero',
      dateOfBirth: null,
      address: null,
      organization: '1304da61-6575-41d1-a203-cd8f7e310484',
      user: '645f100a-5107-42c1-9643-f72bbac0aee5',
      shares: '2000000',
      ownership: '3.5%',
      designation: 'Investor',
      joinDate: '23/30/2018',
    },
    {
      deleted: false,
      created: '2019-10-10T18:23:03.453Z',
      modified: '2019-10-10T18:23:03.453Z',
      id: '3a2256ad-f08a-4d72-878a-9da2e40e2c0e',
      title: null,
      email: 'Reefsharp@gmail.com',
      fullName: 'Reef Sharp',
      dateOfBirth: null,
      address: null,
      organization: '1304da61-6575-41d1-a203-cd8f7e310484',
      user: '645f100a-5107-42c1-9643-f72bbac0aee5',
      shares: '2000000',
      ownership: '2.5%',
      designation: 'Investor',
      joinDate: '23/30/2018',
    },
  ]

  useEffect(() => {
    // props.getTeamMemberList(props.match.params.orgId)
  }, [])

  const handleClick = (data: any) => {
    console.log('handleClick -> data', data)
    const { history } = props
    history.push(`${Paths.teamMembersProfile}/${data.original.fullName}`)
  }

  const handleInviteMemberModal = () => {
    // setShowInviteMemberModal(!showInviteMemberModal)
    setShowModal(true)
  }

  const handleUploadCsvModal = () => {
    setShowUploadCsvModal(true)
  }

  const handleAddMemberModal = () => {
    const { history } = props
    history.push(Paths.AddTeamMembers)
  }

  const renderMemberName = (row: any) => {
    const firstName = row.original.memberName.split(' ')[0]
    const secondName = row.original.memberName.split(' ')[1]

    return (
      <MemberContainer>
        {!!row.original.imgSrc ? (
          <UserProfilePic src={row.original.imgSrc} />
        ) : secondName ? (
          <DefaultUserProfilePic>
            {firstName.charAt(0)}
            {secondName.charAt(0)}
          </DefaultUserProfilePic>
        ) : (
          <DefaultUserProfilePic>
            {firstName.charAt(0)}
            {firstName.charAt(1)}
          </DefaultUserProfilePic>
        )}

        <MemberName>{row.original.memberName}</MemberName>
      </MemberContainer>
    )
  }

  if (props.isLoading) {
    return <TeamMemberContainer>loading.......</TeamMemberContainer>
  }

  return (
    <TeamMemberContainer>
      <div>
        <MembersOrg>
          <OrganizationName>Cognition, Inc Members</OrganizationName>
          <MembersOrgButtonGroup>
            <MembersOrgButton onClick={() => handleUploadCsvModal()}>UPLOAD CSV</MembersOrgButton>
            <MembersOrgButton onClick={() => handleInviteMemberModal()}>INVITE MEMBER</MembersOrgButton>
            <MembersOrgButton onClick={() => handleAddMemberModal()}>ADD MEMBER</MembersOrgButton>
          </MembersOrgButtonGroup>
        </MembersOrg>
      </div>
      <LineSeparator />
      <div>
        <StyledTable>
          <TeamMembersTable
            data={teamMemberListData}
            columns={[
              {
                Header: (
                  <NameHeading>
                    NAME
                    <DownArrow>
                      <img src={downArrow}></img>
                    </DownArrow>
                  </NameHeading>
                ),
                accessor: 'fullName',
                width: 330,
                Cell: row => (
                  <div onClick={() => handleClick(row)} style={{ marginLeft: '45px',cursor:'pointer' }}>
                    {row.value}
                  </div>
                ),
              },
              {
                Header: (
                  <LeftAlignedColumnHeading>
                    TITLE
                    <DownArrow>
                      <img src={downArrow}></img>
                    </DownArrow>
                  </LeftAlignedColumnHeading>
                ),
                accessor: 'designation',
                width: 252,
                Cell: row => <div>{row.value}</div>,
              },
              {
                Header: (
                  <RightAlignedColumnHeading>
                    MEMBER SINCE
                    <DownArrow>
                      <img src={downArrow}></img>
                    </DownArrow>
                  </RightAlignedColumnHeading>
                ),
                accessor: 'joinDate',
                width: 244,
                Cell: row => <RightAlignedTextRow>{row.value}</RightAlignedTextRow>,
              },
              {
                Header: (
                  <RightAlignedColumnHeading>
                    SHARES
                    <DownArrow>
                      <img src={downArrow}></img>
                    </DownArrow>
                  </RightAlignedColumnHeading>
                ),
                accessor: 'shares',
                width: 172,
                Cell: row => <RightAlignedTextRow>{row.value}</RightAlignedTextRow>,
              },
              {
                Header: <RightAlignedColumnHeading>OWNERSHIP %</RightAlignedColumnHeading>,
                accessor: 'ownership',
                width: 175,
                Cell: row => <RightAlignedTextRow>{row.value}</RightAlignedTextRow>,
              },
            ]}
            showPagination={false}
            minRows={0}
            resizable={false}
            expanded={false}
          />
        </StyledTable>
      </div>

      <CustomModal show={showUploadCsvModal} toggleModal={setShowUploadCsvModal}>
        <InviteContent>
          <ModalContainerHeading>Upload Team Member CSV </ModalContainerHeading>
          <div style={{textAlign:'center'}}>
            <UploadImage src={csv} alt="" />
            <LinkText>Click here to download the team members CSV template </LinkText>
          </div>
        </InviteContent>
      </CustomModal>

      <CustomModal show={showModal} toggleModal={setShowModal}>
        <InviteContentTeam>
          <ModalContainerHeading>Add A Team Member </ModalContainerHeading>
          <InviteMember />
        </InviteContentTeam>
      </CustomModal>

    </TeamMemberContainer>
  )
}



export default connect()(withRouter(TeamMembers as any))
// mapStateToProps,
