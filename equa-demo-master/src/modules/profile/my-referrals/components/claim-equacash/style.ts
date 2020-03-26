import styled from 'styled-components'
import { colors, screenSizes, theme } from '../../../../../shared/styles/theme'

export const ClaimEquaCashWrapper = styled.div`
  margin-top: 30px;
  @media (min-width: ${screenSizes.mediaXL}px) {
    margin-top: 72px;
  }
`

export const MyReferralText = styled.h1`
  font-weight: 300;
  font-size: 24px;
  color: ${colors.white};
  @media (min-width: ${screenSizes.mediaXL}px) {
    font-size: 36px;
  }
`

export const Claim = styled.div`
  margin-top: 20px;
  display: block;
  @media (min-width: ${screenSizes.mediaXL}px) {
    margin-top: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
export const InvitedFriendDescBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  @media (min-width: ${screenSizes.mediaXL}px) {
    height: 75px;
  }
`
export const InviteFriend = styled.div`
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: ${colors.white};
  font-family: Regular;
  @media (min-width: ${screenSizes.mediaXL}px) {
    font-size: 24px;
    line-height: 33px;
  }
`

export const InviteFriendDesc = styled.div`
  font-weight: 300;
  font-size: 12px;
  line-height: 22px;
  margin-top: 0.5rem;
  font-family: Regular;
  color: ${colors.white};
  @media (min-width: ${screenSizes.mediaXL}px) {
    font-size: 16px;
  }
`

export const ClaimBtnCont = styled.div`
  display: flex;
  align-items: flex-end;
`

export const ClaimCashBtn = styled.div`
  img {
    margin-right: 20px;
  }
  padding: 8px 15px;
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 4px;
  font-weight: bold;
  font-size: 10px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${colors.green};
  cursor: pointer;
  margin-top: 10px;
  @media (min-width: ${screenSizes.mediaXL}px) {
    font-size: 14px;
    margin-top: 0px;
  }
`

// @media (max-width: ${screenSizes.mediaXL}px) {
//   display: flex;
// }
