import * as React from 'react'
import { WaitlistWrapper, WaitlistContainer, Stats, MoveAhead, BehindStats, VerticalLine } from './style'


import WaitlistIcon from '../../../../../assets/image/waitlist_icon.png'
import NumberIcon from '../../../../../assets/image/number_icon.png'

interface Props {
  totalOnWaitlist: number
  totalAheadOnWaitlist?: number
  openWaitListModal: () => void
}
//
class Waitlist extends React.Component<Props> {
  render() {
    const { totalOnWaitlist, totalAheadOnWaitlist, openWaitListModal } = this.props
    return (
      <WaitlistWrapper>
        <WaitlistContainer>
          <Stats>
            <img src={WaitlistIcon} alt="waitlist" />
            <span className="num">{totalOnWaitlist || 0}</span>
            <span className="text">people on the waitlist</span>
          </Stats>
          {totalAheadOnWaitlist ? (
            <>
              <VerticalLine></VerticalLine>
              <BehindStats>
                <img src={NumberIcon} alt="number" />
                <span className="num">{totalAheadOnWaitlist}</span>
                <span className="text">ahead of you</span>
              </BehindStats>
              <MoveAhead onClick={openWaitListModal}>move to the front of the waitlist</MoveAhead>
              {/* <MoveAhead onClick={openWaitListModal}>move to the front of the waitlist</MoveAhead> */}
            </>
          ) : null}
        </WaitlistContainer>
      </WaitlistWrapper>
    )
  }
}

export default Waitlist
