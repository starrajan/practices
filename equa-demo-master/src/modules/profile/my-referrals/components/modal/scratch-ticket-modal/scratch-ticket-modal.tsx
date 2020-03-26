import * as React from 'react'
import { connect } from 'react-redux'
// import { scratchCards, ScratchSingleCardDispatch, getAllScratchCards, GetScratchCardDispatch } from '@logic'
import ScratchCardList from '../../scratch-card-list/scratch-card-list'
import { Heading, SubHeading, BtnCont, InviteFriendsBtn, ScratchAllBtn, NextBtn, ScratchText } from './style'
import { ModalContainerHeading, ModalContainerText } from '../../../../../../shared/custom-modal/style'

interface Ticket {
  id: number
  cardId: number
  scratched: boolean
  reward: number
}

interface State {
  wasScratchAllClicked: boolean
}

interface Props {
  toggleTicketsModal: () => void
  show: boolean
  ticketList: any[]
  // getAllScratchCards: any
  setTicketList: any
  rewards: any[]
}
interface StateProps {
  user: any
  // scratchCardsResponse: any
  // scratchCards: ScratchSingleCardDispatch
}

class ScratchTicketModal extends React.Component<Props & StateProps, State> {
  constructor(props: Props & StateProps) {
    super(props)
    this.state = {
      wasScratchAllClicked: false,
    }
  }

  scratchTicket = async (id: number) => {
    // const { ticketList } = this.props
    // for (let i = 0; i < ticketList.length; i++) {
    //   if (ticketList[i].id === id) {
    //     const data: any = { rewardArray: [ticketList[i].id] }
    //     await this.props.scratchCards(data)
    //     ticketList[i].scratched = true
    //     await this.props.getAllScratchCards(this.props.user.id)
    //   }
    // }
    // this.props.setTicketList(ticketList)
  }

  handleScratchAll = async () => {
    // const { ticketList } = this.props
    // const cards: any = []
    // let totalReward: any = 0
    // for (let i = 0; i <= 2; i++) {
    //   if (ticketList[i] !== undefined) {
    //     ticketList[i].scratched = true
    //     cards.push(ticketList[i].id)
    //     totalReward = totalReward + ticketList[i].reward
    //   }
    // }
    // const data = { rewardArray: cards }
    // await this.props.scratchCards(data)
    // this.props.setTicketList(ticketList)
    // this.setState({
    //   wasScratchAllClicked: true,
    // })
    // await this.props.getAllScratchCards(this.props.user.id)
  }

  handleNextClick = () => {
    let { ticketList } = this.props
    if (ticketList.length === 0 || ticketList.length === 1 || ticketList.length === 2) {
      ticketList = []
    } else {
      ticketList.splice(0, 6)
    }
    this.props.setTicketList(ticketList)
    this.setState({
      wasScratchAllClicked: false,
    })
  }

  checkForNextBtn = (): boolean => {
    const { ticketList } = this.props

    if (ticketList.length === 1) {
      if (ticketList[0].scratched) {
        return true
      }

      return false
    } else if (ticketList.length === 2) {
      if (ticketList[0].scratched && ticketList[1].scratched) {
        return true
      }

      return false
    } else {
      if (ticketList[0].scratched && ticketList[1].scratched && ticketList[2].scratched) {
        return true
      }
      return false
    }
  }

  renderButton = () => {
    const { wasScratchAllClicked } = this.state
    const { toggleTicketsModal, ticketList } = this.props

    if (ticketList.length && !wasScratchAllClicked) {
      if (this.checkForNextBtn()) {
        return <NextBtn onClick={this.handleNextClick}>next</NextBtn>
      }

      return <ScratchAllBtn onClick={this.handleScratchAll}>scratch all</ScratchAllBtn>
    } else {
      if (ticketList.length && wasScratchAllClicked) {
        return <NextBtn onClick={this.handleNextClick}>next</NextBtn>
      } else {
        return <InviteFriendsBtn onClick={toggleTicketsModal}>Close</InviteFriendsBtn>
      }
    }
  }

  render() {
    const { wasScratchAllClicked } = this.state
    const { ticketList, rewards } = this.props
    return (
      <div>
        <Heading>Choose Your Ticket</Heading>
        <SubHeading>You have {rewards.length} scratch ticket remaining</SubHeading>
        {rewards.length === 0 ? (
          <ScratchText>
            To earn more scratch tickets, invite more friends to join the Equa app. You can do this by sending invites to your Gmail
            contacts or by sharing your referral link with friends or on social media!
          </ScratchText>
        ) : null}

        <ScratchCardList rewards={ticketList} wasScratchAllClicked={wasScratchAllClicked} scratchTicket={this.scratchTicket} />
        {/* <BtnCont>{this.renderButton()}</BtnCont> */}
      </div>
    )
  }
}
const mapStateToProps = (state: any) => ({
  user: state.user,
  // scratchCardsResponse: state.myReferral.scratchCardsResponse,
})
export default connect(mapStateToProps, {})(ScratchTicketModal)
