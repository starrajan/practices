import * as React from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { withRouter, RouteComponentProps } from 'react-router'
// import { Container } from '@styles/styled'
import {
  InvitedFriendsCont,
  Heading,
  StyledTable,
  RegisteredText,
  EmailBouncedText,
  SuccessfulInvite,
  InvitedText,
  InviteAgainbtn,
} from './style'


import SuccessInviteImg from '../../../../../assets/image/SuccessInvite.png'
import InviteAgainImg from '../../../../../assets/image/inviteAgain.png'

// import { sendInvitation, SendInvitationDispatch } from '@logic'
interface InviteListItem {
  modified: string
  email: string
  status: number
}

interface Props extends RouteComponentProps<any> {
  invitedFriendList: InviteListItem[]
  onInviteAgain: () => void
}
interface StateProps {
  user: any
}

class InvitedFriends extends React.Component<Props & StateProps> {

  renderInvitedFriendsTable = () => {
    const { invitedFriendList } = this.props
    if (invitedFriendList.length) {
      return invitedFriendList.map((v: any, k: any) => (
        <tr key={k}>
          <td className="td-date"> {moment(v.modified).format('MM/DD/YYYY')} </td>
          <td className="td-email"> {v.email} </td>
          <td> {this.renderInvitationStatus(v.status, v.modified, v.email)} </td>
        </tr>
      ))
    }
    return null
  }

  handleResendInvitation = async (e: any, email: string) => {
    // const button = e.currentTarget
    // button.classList.toggle('dis-btn')
    // const inviteMail: any = []
    // inviteMail.push(email)
    // const data = { emailArray: inviteMail }
    // await this.props.sendInvitation(data)
    // button.classList.toggle('dis-btn')
    // this.props.onInviteAgain()
  }

  renderInvitationStatus = (status: number, date: string, email: string) => {
    switch (status) {
      case 1:
        const invitedTime = Date.parse(date)
        const currentTime = Date.now()

        const daysBetween = Math.floor((currentTime - invitedTime) / 86400000)
        const days = daysBetween > 1 ? 'Days' : 'Day'

        return (
          <InvitedText>
            {daysBetween > 7 ? (
              <InviteAgainbtn onClick={e => this.handleResendInvitation(e, email)}>
              <img src={InviteAgainImg} />
                <span>Invite Again</span>
              </InviteAgainbtn>
            ) : null}
            <span className="text">{`Invite Sent ${daysBetween} ${days} Ago`}</span>
          </InvitedText>
        )

      case 2:
        return <RegisteredText>Registered</RegisteredText>
      case 3:
        return (
          <SuccessfulInvite>
            <span>Successful</span>
            <img src={SuccessInviteImg} />
          </SuccessfulInvite>
        )
      case 4:
        return <EmailBouncedText>Invite Email Bounced</EmailBouncedText>
      default:
        return null
    }
  }

  render() {
    return (
      <div>
        <InvitedFriendsCont>
          <Heading>Friends You’ve Invited</Heading>
          <StyledTable>
            <tbody>{this.renderInvitedFriendsTable()}</tbody>
          </StyledTable>
        </InvitedFriendsCont>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  user: state.user,
})

export default withRouter(
  connect(
    mapStateToProps,
    {

    }
  )(InvitedFriends)
)
