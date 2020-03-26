import * as React from 'react'
import styled from 'styled-components'
import { Button } from '../../../../../shared/components/button'
import GmailPic from '../../../../../assets/image/gmail.png'

import { Form, Field } from 'react-final-form'
// import { FieldErrors } from '@components/field-errors'
// import { required, isEmail } from '@helpers/field-validators'

const Heading = styled.div`
  width: 492px;
  font-size: 24px;
  text-align: center;
  color: #2c3e50;
`

export const GmailPicCont = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 55px;
`

export const ConnectBtnCont = styled.div`
  margin: 58px 0 44px 0;
  display: flex;
  justify-content: center;
`

export const ConnectBtn = styled(Button)`
  font-weight: bold;
  font-size: 13px;
  text-transform: uppercase;
  color: #ffffff;
  padding: 14px 28px;
`

const GoogleForm = styled.div`
  width: 373px;
  margin: 66px auto 0 auto;

  label {
    display: block;
    font-size: 14px;
    color: #5a6872;
    :not(:first-child) {
      margin-top: 22px;
    }
  }
  input {
    margin-top: 4px;
    margin-bottom: 0;
    width: 100%;
    border: 1px solid #979797;
    border-radius: 2px;
    font-size: 20px;
    color: #3e3e3e;
    padding: 9.5px 15px;
  }
`

interface Props {
  toggleGoogleConnection: () => void
  toggleGoogleConnectModal: () => void
}
interface State {
  values: any
}
class ConnectGmail extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      values: {
        userEmail: '',
        userPassword: '',
      },
    }
  }
  onSubmit = (values: any) => {
    const { toggleGoogleConnection, toggleGoogleConnectModal } = this.props
    toggleGoogleConnection()
    toggleGoogleConnectModal()
  }
  render() {
    return (
      <div>
        <Heading>Connect your Gmail</Heading>

        <GmailPicCont>
          <img src={GmailPic} alt="gmail" />
        </GmailPicCont>

        <GoogleForm>
          <Form
            initialValues={this.state.values}
            onSubmit={this.onSubmit as any}
            render={({ handleSubmit }) => {
              return (
                <form onSubmit={handleSubmit}>
                  <>
                    <Field
                      name="userEmail"
                     
                      render={({ input, meta }) => (
                        <>
                          <label>What is your email address?</label>
                          <input name={input.name} type="text" {...input} />
                          {/* <FieldErrors meta={meta} /> */}
                        </>
                      )}
                    />
                    <Field
                      name="userPassword"
                      type="password"
                      render={({ input, meta }) => (
                        <>
                          <label>Password</label>
                          <input name={input.name} type="password" {...input} />
                          {/* <FieldErrors meta={meta} /> */}
                        </>
                      )}
                    />
                    <ConnectBtnCont>
                      <ConnectBtn>connect</ConnectBtn>
                    </ConnectBtnCont>
                  </>
                </form>
              )
            }}
          />
        </GoogleForm>
      </div>
    )
  }
}

export default ConnectGmail
