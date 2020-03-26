import styled from 'styled-components'
import { Button } from '../../../../../shared/components/button'
import { colors, screenSizes, theme } from '../../../../../shared/styles/theme'

export const ConnectToGoogleWrapper = styled.div`
  border-radius: 8px;
  display: block;
  margin-top: 10px;
  padding: 10px 0;
  border-radius: 8px;
  background-color: ${colors.greyBackground};
  min-height: 615px;
  .disable-btn {
    pointer-events: none;
    color: #23822c !important;
  }
  @media (min-width: ${screenSizes.mediaXL}px) {
    display: flex;
    margin-top: 24px;
    padding: 56px 0;
  }
`

export const AddFriendsCont = styled.div`
  border-right: 1px solid rgba(255, 255, 255, 0.5);
  width: 100%;
  .gmail-img {
    margin-top: 90px;
    display: flex;
    justify-content: center;
  }
  @media (min-width: ${screenSizes.mediaXL}px) {
    width: 30%;
  }
`

export const InviteFriendsCont = styled.div`
  width: 100%;
  @media (min-width: ${screenSizes.mediaXL}px) {
    width: 70%;
  }
`

export const AddContactText = styled.div`
  margin-top: 30px;
  font-weight: normal;
  font-size: 20px;
  color: white;
  text-align: center;
  font-family: Regular;
`

export const AddContactDesc = styled.div`
  max-width: 279px;
  margin: 15px auto 0 auto;
  color: rgba(255, 255, 255, 0.5);
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  font-family: Regular;
`

export const ConnectToGoogleBtnCont = styled.div`
  margin: 60px 0 80px 0;
  display: flex;
  justify-content: center;

  #google-sign-in-button {
    width: 143px;
    height: 46px;
    background: #33bb40;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;

    .abcRioButton {
      width: 100% !important;
      height: 100% !important;
      border-radius: 4px;
      background-color: #33bb40;
    }

    .abcRioButtonContentWrapper {
      border-radius: 4px;
      background-color: #33bb40;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .abcRioButtonIcon {
      display: none;
    }

    .abcRioButtonContents {
      font-size: 16.0225px;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: #ffffff;

      span {
        display: none !important;
      }
    }

    .abcRioButtonContents:after {
      content: 'connect';
      font-size: 16.0225px;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: #ffffff;
    }
  }
`

export const ConnectToGoogleBtn = styled(Button)`
  font-weight: bold;
  font-size: 16.0225px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 14px 28px;
`

export const Connect = styled(Button)`
  font-size: 15px;
  border-radius: 2px;
  outline: none;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  padding: 6px 15px;
  font-family: Bold;
  height: 45px;
  width: 40%;
  margin-top: 48px;
`

export const SelectFriendsTxt = styled.div`
  margin-left: 46px;
  font-weight: 300;
  font-size: 24px;
  margin-top: 20px;
  color: ${colors.white};
  @media (min-width: ${screenSizes.mediaXL}px) {
    font-size: 24px;
    margin-top: 0px;
  }
`

export const DisconnectedImgCont = styled.div`
  margin-top: 110px;
  display: flex;
  justify-content: center;
`

export const DisconnectedGoogleText = styled.div`
  margin-top: 20px;
  font-weight: normal;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.4);
  text-align: center;
`

export const ConnectedGoogle = styled.div`
    margin: 20px auto 0 auto;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color rgba(62,62,62, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
      height: 30px;
      width: 40px;
      margin-top: 24px;
        @media (min-width: ${screenSizes.mediaXL}px) {
          width: 64px;
          height: 50px;
          margin-top: 67px;
          }
    }

    .text{
        margin-top: 26px;
        font-weight: normal;
        font-size: 14px;
        line-height: 18px;
        text-align: center;
        color: ${colors.white};
        padding: 0 20px;
        font-family:Regular
        @media (min-width: ${screenSizes.mediaXL}px) {
          font-size: 20px;
          line-height: 24px;
          margin-top: 18px;
          }
    }
    @media (min-width: ${screenSizes.mediaXL}px) {
      margin: 78px auto 0 auto;
      width: 233px;
      height: 233px;
      }
`

export const DisconnectBtnCont = styled.div`
  margin-top: 20px;
  margin-bottom: 51px;
  display: flex;
  justify-content: center;
  @media (min-width: ${screenSizes.mediaXL}px) {
    margin-top: 50px;
  }
`

export const DisconnectBtn = styled(Button)`
  padding: 14px 28px;
  font-weight: 500;
  font-size: 16.0225px;
  text-transform: uppercase;
  color: ${colors.white};
`

export const SelectAllCont = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  span {
    font-weight: 300;
    font-size: 20px;
    font-family: Regular;
    color: ${colors.white};
    @media (min-width: ${screenSizes.mediaXL}px) {
      font-size: 24px;
    }
  }
  @media (min-width: ${screenSizes.mediaXL}px) {
    margin-left: 46px;
    margin-right: 50px;
  }
`

export const SelectAllBtn = styled(Button)`
  padding: 10px 12px;
  font-weight: bold;
  font-size: 10px;
  font-family:Regular
  text-transform: uppercase;
  color: ${colors.white};
  @media (min-width: ${screenSizes.mediaXL}px) {
    padding: 14px 28px;
    font-size: 15.0225px;
  }
`

export const ContactListCont = styled.div`
  margin: 30px 0 0 10px;
  overflow: hidden;
  height: 300px;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 11.4447px;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 11.4447px;
  }
  @media (min-width: ${screenSizes.mediaXL}px) {
    margin: 12px 34px 0px 46px;
    overflow: auto;
    height: 432px;
  }
`

export const ContactListItem = styled.div`
  display: flex;
  align-items: center;

  :not(:first-child) {
    margin-top: 24px;
  }
`
export const ContactListItemPic = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 36px;
    width: 36px;
    border-radius: 50%;
  }
  @media (min-width: ${screenSizes.mediaXL}px) {
    height: 36px;
    width: 36px;
  }
`

export const ContactNameAndEmail = styled.div`
  margin-left: 12px;

  .contact-name {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #ffffff;
    margin-bottom: 5px;
    font-family: Regular;
    @media (min-width: ${screenSizes.mediaXL}px) {
      font-size: 18px;
    }
  }

  .contact-email {
    font-weight: normal;
    font-size: 14px;
    word-break: break-all;
    color: rgba(255, 255, 255, 0.6);
    font-family: Regular;
    @media (min-width: ${screenSizes.mediaXL}px) {
      font-size: 18px;
    }
  }
  @media (min-width: ${screenSizes.mediaXL}px) {
    margin-left: 18px;
  }
`

export const InviteControl = styled.div`
  margin: 0 10px 0 auto;
  display: flex;
  align-items: center;

  .invite-sent-contact {
    margin-right: 10px;
    font-weight: normal;
    font-size: 10px;
    text-transform: uppercase;
    color: #ffffff;
    margin-left: 10px;
    font-family: Regular;
    @media (min-width: ${screenSizes.mediaXL}px) {
      font-size: 15.0225px;
      margin-right: 32px;
      margin-left: 0px;
    }
  }

  .invite-contact {
    margin-right: 10px;
    font-weight: 800;
    font-size: 12px;
    text-transform: uppercase;
    color: #33bb40;
    cursor: pointer;
    margin-left: 10px;
    font-family:regular :disabled {
      color: #cccccc;
    }
    @media (min-width: ${screenSizes.mediaXL}px) {
      font-size: 15.0225px;
      margin-right: 48px;
      margin-left: 0px;
    }
  }

  button {
    background: transparent;
    border: 0;
    padding: 0;
    margin: 0;
    outline: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
