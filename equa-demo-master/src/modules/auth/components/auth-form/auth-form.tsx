import * as React from 'react'
import { Component } from 'react'
import Login from './components/login'
import { RouteComponentProps, withRouter } from 'react-router'
import Register from './components/register'
import Forgot from './components/forgot'
import Meeting from './components/meeting'
import { Paths } from '../../../app/components/routes/types'
// import { VerifyLogin } from './components/verify'
import { StyledHeader, StyledAuthForm, HeaderLink } from './style'
import ThankYou from './components/thank-you'

interface Props extends RouteComponentProps<any> {}

class AuthForm extends Component<Props> {
  render() {
    const { match, history } = this.props
    const isRegister = match.params.type === 'register' || match.params.refId || match.params.inviteId
    const isVerify = match.params.type === 'verify'
    const isForgot = match.params.type === 'forgot'
    const isThanks = match.params.type === 'thank-you'
    const isMeeting = match.params.type === 'meeting'
    return (
      <StyledAuthForm>
        {isThanks ? (
          <ThankYou />
        ) : isForgot ? (
          <Forgot />
        ) : isMeeting ? (
          <Meeting />
        ) : isVerify ? (
          // <VerifyLogin />
          <div> </div>
        ) : (
          <div>
            <StyledHeader>
              <HeaderLink active={!isRegister} onClick={() => history.push(Paths.userLogin)}>
                Sign In
              </HeaderLink>
              <div>or</div>
              <HeaderLink active={isRegister} onClick={() => history.push(Paths.userRegister)}>
                Sign Up
              </HeaderLink>
            </StyledHeader>
            {isRegister ? <Register /> : <Login />}
          </div>
        )}
      </StyledAuthForm>
    )
  }
}

export default withRouter(AuthForm)
