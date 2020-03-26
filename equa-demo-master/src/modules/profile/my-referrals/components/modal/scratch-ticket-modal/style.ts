import styled from 'styled-components'
import { Button } from '../../../../../../shared/components/button'
import { colors, screenSizes, theme } from '../../../../../../shared/styles/theme'

export const Heading = styled.p`
  font-weight: normal;
  font-size: 24px;
  color: #2c3e50;
  text-align: center;
  font-family: Regular;
`

export const SubHeading = styled.p`
    margin-top: 8px
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 0.426667px;
    text-align: center;
    color: #2C3E50;
    font-family:Regular

`
export const ScratchText = styled.p`
    margin-top: 8px
    font-size: 16px;
    letter-spacing: 0.426667px;
    text-align: center;
    color: #2C3E50;
    font-family:Regular

`

export const NoTicketCont = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0;
  img {
    margin-top: 35px;
  }
  @media (min-width: ${screenSizes.mediaXL}px) {
    width: 897px;
    margin: 0 79px 0px;
  }
`

export const TicketsCont = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  margin: 0;
  @media (min-width: ${screenSizes.mediaXL}px) {
    width: 897px;
    margin: 35px 79px 0 79px;
  }

  .single-ticket {
    position: relative;
  }

  .brown-scratch-box {
    position: absolute;
    top: 150px;
    left: 45px;
  }

  .result-box {
    height: 185px;
    width: 185px;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .amount {
      display: flex;
      align-items: center;
      justify-content: space-between;

      img {
        width: 28px;
        height: 31px;
        margin-right: 5px;
      }

      span {
        margin-left: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 800;
        font-size: 45px;
        color: #3e3e3e;
      }
    }

    .equa-cash-text {
      font-weight: 800;
      font-size: 20px;
      color: #3e3e3e;
    }

    .equa-cash-value {
      margin-top: 12px;
      background: rgba(57, 78, 91, 0.46);
      border-radius: 4px;
      font-weight: bold;
      font-size: 14px;
      color: #ffffff;
      width: 122px;
      text-align: center;
      padding: 10px 0;
    }
  }
`

export const BtnCont = styled.div`
  display: flex;
  justify-content: center;
  margin: 28px 0 54px 0;
`

export const InviteFriendsBtn = styled(Button)`
  font-weight: bold;
  font-size: 13px;
  text-transform: uppercase;
  color: #ffffff;
  padding: 12px 24px;
  width: 248px;
`

export const NextBtn = styled(InviteFriendsBtn)``

export const ScratchAllBtn = styled(InviteFriendsBtn)``
