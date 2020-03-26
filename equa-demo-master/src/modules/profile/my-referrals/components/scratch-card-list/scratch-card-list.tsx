import * as React from 'react'
import { NoTicketCont, TicketsCont } from './style'

import NoTicketImg from '../../../../../assets/image/noticket.png'
import TicketImg from '../../../../../assets/image/ticket.png'
import EquaCashSymbol from '../../../../../assets/image/equacashsign.png'
import ScratchBox from '../../../../../assets/scratchbox.png'

import ScratchCard from '../scratch-card/scratch-card'

interface Props {
  rewards: any[]
  wasScratchAllClicked: boolean
  scratchTicket: (id: number) => void
}

const settings = {
  width: 188,
  height: 188,
  image: '',
  finishPercent: 50,
}

class ScratchCardList extends React.Component<Props> {
  renderScratchArea = (ticket: any) => {
    const { wasScratchAllClicked, scratchTicket } = this.props

    if (ticket === undefined) {
      if (wasScratchAllClicked) {
        return <div className="result-box"></div>
      }
      return (
        <ScratchCard {...settings} onComplete={() => {}}>
          <div className="result-box"></div>
        </ScratchCard>
      )
    } else {
      if (ticket.scratched) {
        return (
          <div className="result-box">
            <div className="amount">
              <img src={EquaCashSymbol} alt="equa cash" />
              <span>{ticket.reward}</span>
            </div>

            <div className="equa-cash-text">EQUA CASH</div>

            <div className="equa-cash-value">${ticket.reward} value!</div>
          </div>
        )
      } else {
        return (
          <ScratchCard {...settings} onComplete={() => scratchTicket(ticket.id)}>
            <div className="result-box">
              <div className="amount">
                <img src={EquaCashSymbol} alt="equa cash" />
                <span>{ticket.reward}</span>
              </div>

              <div className="equa-cash-text">EQUA CASH</div>

              <div className="equa-cash-value">${ticket.reward} value!</div>
            </div>
          </ScratchCard>
        )
      }
    }
  }

  renderScratchTickets = () => {
    const { rewards } = this.props
    const showCards = rewards.slice(0, 6)
    if (showCards.length) {
      return (
        <TicketsCont>
          {showCards.map((card: any,i:any) => (
            <div className="single-ticket" key={i}>
              <img className="single-ticket-image" src={TicketImg} alt="scratch-ticket" />
              <div className="brown-scratch-box">{this.renderScratchArea(card)}</div>
            </div>
          ))}
        </TicketsCont>
      )
    } else {
      return (
        <NoTicketCont>
          <img src={NoTicketImg} alt="no ticket" />
        </NoTicketCont>
      )
    }
  }

  render() {
    return this.renderScratchTickets()
  }
}

export default ScratchCardList
