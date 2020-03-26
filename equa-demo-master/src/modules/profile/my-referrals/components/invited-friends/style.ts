import styled from 'styled-components'
import { colors, screenSizes, theme } from '../../../../../shared/styles/theme'

export const InvitedFriendsCont = styled.div`
  margin-top: 48px;
  .dis-btn {
    pointer-events: none;
    background: rgba(245, 166, 35, 0.0157597);
    span {
      color: #2b1b02;
    }
  }
`

export const Heading = styled.div`
  font-weight: 500;
  font-size: 20px;
  color: white;
  font-family: Regular;
`

export const StyledTable = styled.table`
  width: 100%;
  max-width: 1224px;
  margin-top: 25px;
  border-collapse: collapse;
  table-layout: fixed;

  tr:nth-child(odd) {
    background-color: rgba(255, 255, 255, 0.03);
  }

  td {
    padding: 20px 10px;
    border-radius: 4px;
    @media (min-width: ${screenSizes.mediaXL}px) {
      padding: 14px 32px 14px 28px;
    }
  }

  .td-date,
  .td-email {
    color: white;
    font-weight: normal;
    font-size: 10px;
    word-break: break-all;
    font-family: Regular;
    @media (min-width: ${screenSizes.mediaXL}px) {
      font-size: 16px;
    }
  }

  .td-date {
    width: auto;
    font-family: Regular;
    @media (min-width: ${screenSizes.mediaXL}px) {
      width: 200px;
    }
  }
`

export const RegisteredText = styled.div`
  font-weight: bold;
  font-size: 16px;
  color: #ffffff;
  text-align: right;
`

export const EmailBouncedText = styled.div`
  font-weight: bold;
  font-size: 16px;
  text-align: right;
  color: #ff5656;
  font-family: Regular;
`

export const SuccessfulInvite = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  span {
    margin-right: 18px;
    font-weight: bold;
    font-size: 16px;
    color: #33bb40;
   font-family:Regular
  }
`

export const InvitedText = styled.div`
  font-weight: bold;
  font-size: 16px;
  color: #f5a623;
  display: flex;
  align-items: center;
 font-family:Regular
  justify-content: flex-end;
  button {
    margin-right: 50px;
  }
  .text {
    width: 200px;
    text-align: right;
    font-size: 10px;
   font-family:Regular
    @media (min-width: ${screenSizes.mediaL}px) {
      width: 200px;
      font-size: 16px;
    }
  }
`

export const InviteAgainbtn = styled.button`
  background: rgba(245, 166, 35, 0.0957597);
  border-radius: 4px;
  padding: 5px 16px;
  border: 0;
  display: flex;
  align-items: center;
  outline: 0;
  cursor: pointer;
 font-family:Regular

  :disabled {
    background: rgba(245, 166, 35, 0.0157597);
  }

  img {
    margin-right: 15px;
  }

  span {
    font-weight: 500;
    font-size: 18.3px;
    color: #f5a623;
  }
`
