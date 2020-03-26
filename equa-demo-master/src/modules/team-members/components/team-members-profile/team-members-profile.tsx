import * as React from 'react'
import { useState, useEffect } from 'react'
import { withRouter, RouteComponentProps } from 'react-router'
import { connect } from 'react-redux'
import profile from '../../../../assets/image/profile.png'
import history from '../../../app/components/history'
import { Paths } from '../../../app/components/routes/types'
import {
  UserDetailsCont,
  UserProfilePhoto,
  UserProfilePhotoCont,
  UserDetails,
  UserName,
  UserEmail,
  UserPosition,
  UserShareInfoCont,
  UserSharedetails,
  Amount,
  AmountValue,
  Desc,
  ShareAndRecentActionCont,
  ShareAndRecentAction,
  UserShareGraph,
  DefaultUserProfilePhoto,
  TeamMemberProfilePage,
  MembersOrgButton
} from './style'
import { RecentActions, ShareBlock, PurchaseShareBlock, ShareChart } from './components/index'

interface Props extends RouteComponentProps<any> {}

interface Shares {
  id: string
  issueDate: string
  shares: number
  pricePerShare: number
  type: string
}

interface StateProps {
  memberData: any
  isLoading: boolean
  isError: boolean
}

const TeamMembersProfile = (props: Props & StateProps) => {
  // const [name, setName] = useState('')

  // useEffect(() => {
  //   let data= props.match.params.memberId
  //   console.log("TeamMembersProfile -> data", data)
  // }, [props.match.params.memberId])

  const renderUserImage = () => {
    return <UserProfilePhoto src={profile} alt="user" />
  }

  const currencyFormat = (currency: number): string => {
    return currency.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  const calculateCapitalContribution = (currency: number): string => {
    return currencyFormat(currency)
  }

  const outstandingShares = [
    { certificateNum: 'CS-9', date: '02/07/2019', shares: '250,000', capitalContribution: 0.1 },
    { certificateNum: 'CS-10', date: '02/07/2019', shares: '250,000', capitalContribution: 0.12 },
  ]
  const issuedOptions=[
    { certificateNum: 'Option-2', date: '02/07/2019', shares: '250,000', capitalContribution: 0.1 },
  ]
  const outShares=[
    { type: 'Common Stock', shares: 250000 },
    { type: 'Exercised Options', shares: 150000 },

  ]

  if (props.isLoading) {
    return <TeamMemberProfilePage>loading.......</TeamMemberProfilePage>
  }
  const editProfile = () => {
    history.push(`${Paths.editTeamMembersProfile}/d1b2446c-e62b-11e9-81b4-2a2ae2dbcce4`)
  }

  return (
    <TeamMemberProfilePage>
      <div>
        <UserDetailsCont>
          <UserProfilePhotoCont>{renderUserImage()}</UserProfilePhotoCont>
          <UserDetails>
            <UserName>  Mike Johnson </UserName>
            <UserEmail> MikeJohnson@gmail.com</UserEmail>
            <UserPosition> Director of Marketing </UserPosition>
            <MembersOrgButton onClick={editProfile}>EDIT MEMBER</MembersOrgButton>
          </UserDetails>
          <UserShareGraph><ShareChart outstandingShares={outShares} /></UserShareGraph>
        </UserDetailsCont>
        <UserShareInfoCont>
          <UserSharedetails>
            <Amount>350,000 </Amount>
            <Desc> outstanding shares </Desc>
          </UserSharedetails>
          <UserSharedetails>
            <Amount>
              <AmountValue>$10000</AmountValue>
              <AmountValue opacity={0.2}>.00</AmountValue>
            </Amount>
            <Desc> capital contribution </Desc>
          </UserSharedetails>
          <UserSharedetails>
            {<Amount> 3.5% </Amount>}
            <Desc>outstanding %</Desc>
          </UserSharedetails>
          <UserSharedetails>
            <Amount> 5.0% </Amount>
            <Desc> fully diluted %</Desc>
          </UserSharedetails>
        </UserShareInfoCont>
        <ShareAndRecentActionCont>
          <ShareAndRecentAction>
            <ShareBlock outstandingShares={outstandingShares} issuedOptions={issuedOptions} />
          </ShareAndRecentAction>
          <ShareAndRecentAction>
            <RecentActions />
          </ShareAndRecentAction>
        </ShareAndRecentActionCont>
        <PurchaseShareBlock />
      </div>
    </TeamMemberProfilePage>
  )
}

const mapStateToProps = (state: any) => ({
})

export default withRouter(
  connect()(TeamMembersProfile)
)
