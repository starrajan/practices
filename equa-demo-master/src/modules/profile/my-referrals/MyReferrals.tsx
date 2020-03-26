import * as React from 'react'
import { connect } from 'react-redux'
import { History } from 'history'
import {
  ClaimEquaCash,
  ConnectGmail,
  ConnectToGoogle,
  DisconnectGmail,
  InfoCollection,
  InvitedFriends,
  Modal,
  ReferralInfo,
  ScratchTicketModal,
  ShareReferral,
  SnackBar,
  Subscription,
  Waitlist,
  WaitListModal,
} from './components'
import CustomModal from '../../../shared/custom-modal/CustomModal'
import CrossButtonHeader from '../../../shared/custom-modal/components/crossBtnHeader'
import img from '../../../assets/image/crossgray.png'

// import {
//   getAllScratchCards,
//   getReferralData,
//   GetReferralDataDispatch,
//   GetScratchCardDispatch,
//   invitedFriends,
//   InvitedFriendsDispatch,
//   Paths,
//   ReferralData,
// } from '@logic'
import { MyReferralsPage } from './style'
import { RouteComponentProps, withRouter } from 'react-router'

interface Props extends RouteComponentProps<any> {
  // user: any
  // referralData: ReferralData
  // getReferralData: GetReferralDataDispatch
  // invitedFriendList: any
  // invitedFriends: InvitedFriendsDispatch
  // scratchCardList: any
  // getAllScratchCards: GetScratchCardDispatch
  // history: History
}
interface State {
  showWaitListModal: boolean
  showShareReferralModal: boolean
  showGoogleModal: boolean
  isConnectedToGoogle: boolean
  showDisconnectModal: boolean
  showTicketsModal: boolean
  chooseTicketsModal:boolean
  referralLink: string
  showSnackBar: boolean
  snackBarMessage: string
  ticketList: any[]
}

class MyReferrals extends React.Component<Props, State> {
  state: State = {
    showWaitListModal: false,
    showShareReferralModal: false,
    showGoogleModal: false,
    isConnectedToGoogle: false,
    showDisconnectModal: false,
    showTicketsModal: false,
    chooseTicketsModal:false,
    referralLink: 'https://www.facebook.com/sharer/sharer.php?u=23423',
    showSnackBar: false,
    snackBarMessage: '',
    ticketList: [1, 2, 3, 4, 5, 6],
  }

  componentDidMount = async () => {
    // if (this.props.user) {
    //   await this.props.getReferralData(this.props.user.id)
    //   await this.props.invitedFriends(this.props.user.id)
    //   await this.props.getAllScratchCards(this.props.user.id)
    //   this.setState({
    //     ticketList: this.props.scratchCardList.rewards,
    //   })
    // }
  }

  onInviteAgain = async () => {
    // await this.props.invitedFriends(this.props.user.id)
  }

  copyReferralLink = () => {
    if (!this.state.showSnackBar) {
      const { referralLink } = this.state
      const el = document.createElement('textarea')
      el.value = referralLink
      el.setAttribute('readonly', '')
      el.style.position = 'absolute'
      el.style.left = '-9999px'
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      this.toggleSnackBar('Link copied to clipboard')

      setTimeout(() => {
        this.toggleSnackBar('')
      }, 2000)
    }
    // this.toggleSnackBar('Link copied to clipboard')
  }

  setTicketList = (newList: any) => {
    this.setState({
      ticketList: newList,
    })
  }

  toggleSnackBar = (msg: string) => {
    this.setState({
      showSnackBar: !this.state.showSnackBar,
      snackBarMessage: msg,
    })
  }

  toggleTicketsModal = () => {
    this.setState({
      showTicketsModal: !this.state.showTicketsModal,
    })
  }

  toggleChooseTicket= () => {
    this.setState({
      chooseTicketsModal: !this.state.chooseTicketsModal,
    })
  }

  toggleWaitListModal = () => {
    this.setState({
      showWaitListModal: !this.state.showWaitListModal,
    })
  }

  toggleShareReferralModal = () => {
    this.setState({
      showShareReferralModal: !this.state.showShareReferralModal,
    })
  }

  toggleGoogleModal = () => {
    this.setState({
      showGoogleModal: !this.state.showGoogleModal,
    })
  }

  toggleGoogleConnection = () => {
    this.setState({
      isConnectedToGoogle: !this.state.isConnectedToGoogle,
    })
  }

  toggleDisconnectModal = () => {
    this.setState({
      showDisconnectModal: !this.state.showDisconnectModal,
    })
  }

  goToPurchaseSubscription = () => {
    this.toggleWaitListModal()
    // this.props.history.push(Paths.subscriptions)
  }

  render() {
    const {
      showWaitListModal,
      showShareReferralModal,
      showGoogleModal,
      isConnectedToGoogle,
      showDisconnectModal,
      showTicketsModal,
      referralLink,
      showSnackBar,
      snackBarMessage,
      ticketList,
    } = this.state
    const { history } = this.props
    // const { userDetails: { position_behind: totalOnWaitlist = 0, position_ahead: totalAheadOnWaitlist = 0 } = {} } = this.props.referralData
    // const { totalInvitations, totalCompletedInvitation, totalPendingInvitation, invitations = [] } = this.props.invitedFriendList
    // const { totalReward, dailyReward, monthlyReward, rewards = [] } = this.props.scratchCardList

    const invitations = [
      {
        created: '2019-11-19T07:11:50.312Z',
        modified: '2020-01-31T12:34:54.153Z',
        email: 'zachinfo.288@gmail.com',
        status: 1,
      },
      {
        created: '2019-11-19T07:11:50.312Z',
        modified: '2020-01-31T12:34:54.153Z',
        email: 'mayert.dm45@gmail.com',
        status: 1,
      },
      {
        created: '2019-11-19T07:11:50.312Z',
        modified: '2020-01-31T12:34:54.153Z',
        email: 'daphne.234@gmail.com',
        status: 1,
      },
      {
        created: '2019-11-19T07:11:50.312Z',
        modified: '2020-01-31T12:34:54.153Z',
        email: 'luishmark.284@gmail.com',
        status: 1,
      },
    ]

    return (
      <MyReferralsPage>
        <Waitlist totalOnWaitlist={34455} totalAheadOnWaitlist={2368} openWaitListModal={this.toggleWaitListModal} />

        <ClaimEquaCash toggleTicketsModal={this.toggleTicketsModal} setTicketList={this.setTicketList} ticketList={ticketList} />

        {/* <Subscription /> */}

        <ReferralInfo
          toggleSharereferralModal={this.toggleShareReferralModal}
          referralLink={referralLink}
          copyReferralLink={this.copyReferralLink}
          totalInvitations={138}
          totalCompletedInvitation={108}
          totalPendingInvitation={30}
          equaCash={960}
          dailyReward={120}
          monthlyReward={340}
        />
        <InfoCollection />
        <ConnectToGoogle
          isConnectedToGoogle={isConnectedToGoogle}
          toggleDisconnectGoogleModal={this.toggleDisconnectModal}
          toggleGoogleConnection={this.toggleGoogleConnection}
          invitedFriendList={[]}
          invitedFriends={''}
          userId="6354654523452"
        />
        <InvitedFriends invitedFriendList={invitations} onInviteAgain={this.onInviteAgain} />

        <CustomModal show={showTicketsModal} toggleModal={this.toggleTicketsModal}>
          {/* <CrossButtonHeader toggleModal={this.toggleTicketsModal} /> */}
          <div style={{textAlign:'right',padding:'20px'}}>
            <img style={{cursor:'pointer'}} onClick={this.toggleTicketsModal} src={img} alt="" />
          </div>
          <ScratchTicketModal
            show={showTicketsModal}
            toggleTicketsModal={this.toggleTicketsModal}
            ticketList={ticketList}
            setTicketList={this.setTicketList}
            rewards={[1, 2, 3, 4, 5, 6]}
          />
        </CustomModal>

        <CustomModal show={showWaitListModal} toggleModal={this.toggleWaitListModal}>
          <CrossButtonHeader toggleModal={this.toggleWaitListModal} />
          <WaitListModal goToPurchaseSubscription={this.goToPurchaseSubscription} />
        </CustomModal>

        <CustomModal show={showShareReferralModal} toggleModal={this.toggleShareReferralModal}>
          <CrossButtonHeader toggleModal={this.toggleShareReferralModal} />
          <ShareReferral referralLink={referralLink} copyReferralLink={this.copyReferralLink} />
        </CustomModal>

        <CustomModal show={showGoogleModal} toggleModal={this.toggleGoogleModal}>
          <CrossButtonHeader toggleModal={this.toggleGoogleModal} />
          <ConnectGmail toggleGoogleConnection={this.toggleGoogleConnection} toggleGoogleConnectModal={this.toggleGoogleModal} />
        </CustomModal>

        <CustomModal show={showDisconnectModal} toggleModal={this.toggleDisconnectModal}>
          <CrossButtonHeader toggleModal={this.toggleDisconnectModal} />
          <DisconnectGmail toggleDisconnectModal={this.toggleDisconnectModal} toggleGoogleConnection={this.toggleGoogleConnection} />
        </CustomModal>

        <SnackBar message={snackBarMessage} show={showSnackBar} />
      </MyReferralsPage>
    )
  }
}

const mapStateToProps = (state: any) => ({
  // user: state.user,
  // referralData: state.myReferral.referralData || {},
  // invitedFriendList: state.myReferral.invitedFriendList || {},
  // scratchCardList: state.myReferral.scratchCardList || {},
})
export default withRouter(connect(mapStateToProps)(MyReferrals))
