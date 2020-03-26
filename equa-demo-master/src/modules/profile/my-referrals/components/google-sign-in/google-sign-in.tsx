import * as React from 'react'
import { ConnectToGoogleBtnCont, ConnectToGoogleBtn } from '../connect-to-google/style'

interface Props {
  toggleGoogleConnection: () => void
}

const GOOGLE_BUTTON_ID = 'google-sign-in-button'

class GoogleSignIn extends React.Component<Props> {
  componentDidMount = async () => {
    //@ts-ignore
    if (!!window.gapi) {
      //@ts-ignore
      window.gapi.signin2.render(GOOGLE_BUTTON_ID, {
        scope: 'https://www.googleapis.com/auth/contacts.readonly https://www.googleapis.com/auth/contacts',
        onsuccess: this.onSuccess,
      })
    }
  }
  onSuccess = async (googleUser: any) => {
    const { toggleGoogleConnection } = this.props
    localStorage.setItem('userGmail', googleUser.w3.U3)
    localStorage.setItem('googleToken', googleUser.Zi.access_token)
    toggleGoogleConnection()
  }

  render() {
    return (
      <ConnectToGoogleBtnCont>
        <div id={GOOGLE_BUTTON_ID}></div>
      </ConnectToGoogleBtnCont>
    )
  }
}

export default GoogleSignIn
