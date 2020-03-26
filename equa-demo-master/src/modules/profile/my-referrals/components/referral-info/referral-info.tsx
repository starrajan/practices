import * as React from 'react'
import {
  ReferralInfoWrapper,
  InfoboxCont,
  InfoBox,
  InfoBoxHeading,
  ReferralLinkHeading,
  RefLink,
  InfoBoxValue,
  HorizontalLine,
  NumberStat,
  Status,
  TimeSince,
} from './style'

// import { Container } from '@styles/styled'
// import WhiteMark from '@image/Mark_White.png'
// import WhiteMarkSmall from '@image/Mark_White_sm.png'

import WhiteMark from '../../../../../assets/image/Mark_White.png'
import WhiteMarkSmall from '../../../../../assets/image/Mark_White_sm.png'

import { Button } from '../../../../../shared/components/button'

interface Props {
  referralLink: string
  toggleSharereferralModal: () => void
  copyReferralLink: () => void
  totalInvitations: number
  totalCompletedInvitation: number
  totalPendingInvitation: number
  equaCash: number
  dailyReward: number
  monthlyReward: number
}

class ReferralInfo extends React.Component<Props> {
  render() {
    const {
      toggleSharereferralModal,
      referralLink,
      copyReferralLink,
      totalInvitations,
      totalCompletedInvitation,
      totalPendingInvitation,
      equaCash,
      dailyReward,
      monthlyReward,
    } = this.props
    return (
      <ReferralInfoWrapper>
        <div>
          <InfoboxCont>
            <InfoBox>
              <InfoBoxHeading>invite colleagues & partners</InfoBoxHeading>
              <ReferralLinkHeading>Your Referral Link</ReferralLinkHeading>
              <RefLink>{referralLink}</RefLink>

              <div className="referral-btn-grp">
                <Button className="ref-btn-cp-link" onClick={copyReferralLink} type="button">
                  Copy Link
                </Button>
                <Button priority="tertiary" className="ref-btn-share" onClick={toggleSharereferralModal}>
                  Share
                </Button>
              </div>
            </InfoBox>

            <InfoBox>
              <InfoBoxHeading>Invites sent</InfoBoxHeading>
              <InfoBoxValue>{totalInvitations}</InfoBoxValue>
              <HorizontalLine />
              <NumberStat>
                <div>{totalCompletedInvitation}</div>
                <div>{totalPendingInvitation}</div>
              </NumberStat>
              <Status>
                <div className="completed">Completed</div>
                <div className="in-progress">In progress</div>
              </Status>
            </InfoBox>
            
            <InfoBox>
              <InfoBoxHeading>equacash earned</InfoBoxHeading>
              <InfoBoxValue>
                <img src={WhiteMark} alt="whitemark" />
                {equaCash}
              </InfoBoxValue>
              <HorizontalLine />
              <NumberStat>
                <div className="stat-with-sign">
                  <img src={WhiteMark} alt="equacash" />
                  {dailyReward}
                </div>
                <div className="stat-with-sign">
                  <img src={WhiteMark} alt="equacash" />
                  {monthlyReward}
                </div>
              </NumberStat>
              <TimeSince>
                <div>24 hours</div>
                <div>Last month</div>
              </TimeSince>
            </InfoBox>
          </InfoboxCont>
        </div>
      </ReferralInfoWrapper>
    )
  }
}

export default ReferralInfo
