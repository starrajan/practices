import styled from 'styled-components'
// import { colors, screenSizes, theme } from '@styles/theme'
import { colors, screenSizes, theme } from '../../../../../shared/styles/theme'

export const ReferralInfoWrapper = styled.div`
  margin-top: 37px;
`

export const InfoboxCont = styled.div`
  display: block;
  @media (min-width: ${screenSizes.mediaXL}px) {
    display: flex;
    justify-content: space-between;
  }
`

export const InfoBox = styled.div`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  padding-top: 28px;
  margin-bottom: 20px;
  .referral-btn-grp {
    margin-top: 25px;
    button {
      width: 50%;
      padding: 14px;
      font-weight: normal;
      font-size: 16px;
      height: 43px;
    }
    .ref-btn-cp-link {
      border-radius: 0;
      border-bottom-left-radius: 8px;
    }
    .ref-btn-share {
      border-radius: 0;
      border-bottom-right-radius: 8px;
    }
  }
  @media (min-width: ${screenSizes.mediaXL}px) {
    width: 392px;
    margin-bottom: 0px;
    .referral-btn-grp {
      margin-top: 67px;
      button {
        width: 50%;
        padding: 10px;
        font-weight: normal;
        font-size: 16px;
        height: 48px;
      }
      .ref-btn-cp-link {
        border-radius: 0;
        border-bottom-left-radius: 8px;
      }
      .ref-btn-share {
        border-radius: 0;
        border-bottom-right-radius: 8px;
      }
    }
  }
`

export const InfoBoxHeading = styled.div`
  padding: 0 10px 0 10px;
font-family: Regular;
  color: white;
  font-weight: bold;
  font-size: 12px;
  text-align: center;
  letter-spacing: 0.17em;
  text-transform: uppercase;
  @media (min-width: ${screenSizes.mediaXL}px) {
    padding: 0;
    font-size: 14px;
  }
`

export const ReferralLinkHeading = styled.div`
font-family: Regular;
  margin-top: 20px;
  font-weight: 300;
  font-size: 25px;
  text-align: center;
  color: #ffffff;
  @media (min-width: ${screenSizes.mediaXL}px) {
    margin-top: 47px;
    font-size: 40px;
  }
`
export const RefLink = styled.div`
  margin-top: 14px;
  font-weight: 300;
  font-size: 12px;
  height: 100%;
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  padding: 0 5px;
  @media (min-width: ${screenSizes.mediaXL}px) {
    height: 21px;
    font-size: 16px;
    word-wrap: break-word;
  }
`

export const InfoBoxValue = styled(ReferralLinkHeading)`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    margin-right: 24px;
  }
`

export const HorizontalLine = styled.div`
  margin-top: 25px;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  @media (min-width: ${screenSizes.mediaXL}px) {
    margin-top: 65px;
  }
`

export const NumberStat = styled.div`
  margin-top: 12px;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  div {
    font-size: 20px;
    color: white;
  }
  .stat-with-sign {
    display: flex;
    align-items: center;
    img {
      margin-right: 5px;
      height: 18px;
    }
  }
`

export const Status = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 24px;
  .completed {
    color: #2ecc71;
    font-weight: normal;
    font-size: 18px;
  }
  .in-progress {
    color: #ffda56;
    font-weight: normal;
    font-size: 18px;
  }
  @media (min-width: ${screenSizes.mediaXL}px) {
    padding: 0px 24px;
  }
`

export const TimeSince = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 24px;
  div {
    font-weight: normal;
    font-size: 18px;
    color: white;
  }
  @media (min-width: ${screenSizes.mediaXL}px) {
    padding: 0 24px;
  }
`
