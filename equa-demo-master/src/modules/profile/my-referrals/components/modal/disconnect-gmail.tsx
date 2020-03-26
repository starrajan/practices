import * as React from 'react'
import styled from 'styled-components'
import { Button } from '../../../../../shared/components/button'

const Heading = styled.div`
  width: 493px;
  font-weight: normal;
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  color: #2c3e50;
  max-width: 100%;
`

const BtnCont = styled.div`
  display: flex;
  justify-content: center;
  margin: 53px 0;
`

const DisconnectBtn = styled(Button)`
  padding: 14px 28px;
  font-weight: bold;
  font-size: 13px;
  text-transform: uppercase;
  color: #ffffff;
`

interface Props {
  toggleDisconnectModal: () => void
  toggleGoogleConnection: () => void
}

class DisconnectGmail extends React.Component<Props> {
  handleDisconnectGoogle = () => {
    const { toggleDisconnectModal, toggleGoogleConnection } = this.props
    toggleDisconnectModal();
    toggleGoogleConnection();
    // //@ts-ignore
    // let auth2 = window.gapi.auth2.getAuthInstance()
    // auth2.signOut().then(function() {
    //   toggleGoogleConnection()
    //   toggleDisconnectModal()
    //   localStorage.removeItem('googleToken')
    //   localStorage.removeItem('userGmail')
    // })
  }

  render() {
    return (
      <div>
        <Heading>Are you sure you want to disconnect your Gmail account?</Heading>
        <BtnCont>
          <DisconnectBtn type="button" onClick={this.handleDisconnectGoogle}>
            disconnect
          </DisconnectBtn>
        </BtnCont>
      </div>
    )
  }
}

export default DisconnectGmail
