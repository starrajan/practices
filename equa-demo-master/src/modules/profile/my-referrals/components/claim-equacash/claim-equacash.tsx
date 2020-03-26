import * as React from 'react'


import {
  ClaimEquaCashWrapper,
  MyReferralText,
  Claim,
  InviteFriend,
  InviteFriendDesc,
  ClaimBtnCont,
  ClaimCashBtn,
  InvitedFriendDescBox,
} from './style'

import Claimcashbtn from '../../../../../assets/image/claimcashbtn.png'

interface Props {
  toggleTicketsModal: () => void
  setTicketList: any
  ticketList: any[]
}

class ClaimEquaCash extends React.Component<Props> {
  render() {
    const { toggleTicketsModal, setTicketList, ticketList } = this.props

    return (
      <ClaimEquaCashWrapper>
        <div>
          {/* <MyReferralText>My Referrals</MyReferralText> */}
          <Claim>
            <InvitedFriendDescBox>
              <InviteFriend>It pays to invite your friends!</InviteFriend>
              <InviteFriendDesc>When your friends join from your invitation you each get 1 scratch ticket.</InviteFriendDesc>
            </InvitedFriendDescBox>
            <ClaimBtnCont>
              <ClaimCashBtn
                onClick={() => {
                  toggleTicketsModal()
                  setTicketList(ticketList)
                }}
              >
                {/* <img src={Claimcashbtn} /> */}
                6 SCRATCH TICKETS AVAILABLE 
              </ClaimCashBtn>
            </ClaimBtnCont>
          </Claim>
        </div>
      </ClaimEquaCashWrapper>
    )
  }
}

export default ClaimEquaCash
