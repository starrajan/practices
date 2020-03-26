import * as React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
// import { Access, login, LoginDispatch, User } from '@logic'
import { withRouter, RouteComponentProps } from 'react-router-dom'
// import { StateTransform } from '../../../index'
// import { FormHeader } from '@components/formHeader'
import SignInLogo from '@image/signin-logo.svg'

interface Props extends RouteComponentProps<any> {
  // login: LoginDispatch
}

interface State {
  step: number
}

interface StateProps {
  // access?: Access
  // user?: User
}

class LoginFormComponent extends Component<Props & StateProps, State> {
  render() {
    return (
      <div>
        {/* <FormHeader logo={<SignInLogo />} title={'Welcome to Equa Start'} /> */}
        {/* <div onClick={this.props.login}>SIGN IN</div> */}
        <div>To learn more, visit our website:</div>
        <a target='_blank' href='https://equa.global'>equa.global</a>
      </div>
    )
  }
}

// const mapStateToProps: StateTransform<StateProps> = s => ({ access: s.access, user: s.user })

export default connect(
  // mapStateToProps,
  // {
  //   login,
  // }
)(withRouter(LoginFormComponent as any))
