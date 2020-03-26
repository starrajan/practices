import * as React from 'react'
import { Paths } from '../../../../app/components/routes/types'
import { FlexCol, StyledH1 } from '../../../../../shared/styles/styled'
import { StyledHeader } from '../style'
import { AuthCardContent, HeaderLink, ForgotText,PhoneWrap,AuthWrapper,AcceptButton } from './style'

import styled from 'styled-components'
import { ServiceContext } from '../../../../app/App'
import { Button } from '../../../../../shared/components/button'
import { withRouter } from 'react-router'
import { History } from 'history'
import Phone from '../../../../../assets/image/phone.svg'

interface Props {
  // service: Service
  history: History
}
const image = {
width:'100%',
height:'auto'
}

const StyledThankYou = styled.div`
  h1 {
    margin: 0;
  }
  label {
    display: inline-block;
    margin-bottom: 30px;
  }
  svg {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    max-height: 300px;
  }
`

const ThankYou = (props: Props) => {
  const { history } = props
  return (
    <AuthCardContent>
      <AuthWrapper>
      <StyledThankYou>
          <HeaderLink>Thank You!</HeaderLink>
        <ForgotText>Your account has been successfully verified!</ForgotText>
        <br />
        <AcceptButton onClick={() => history.push(Paths.Dashboard)}>Continue</AcceptButton>
        {/* <Phone /> */}
        <PhoneWrap>
        <img style={image} src={require('../../../../../assets/image/phone.svg')} alt="" />
        </PhoneWrap>

      </StyledThankYou>
      </AuthWrapper>
    </AuthCardContent>
  )
}

const ThankYouWithService = (props: Props) => <ServiceContext.Consumer>{service => <ThankYou {...props} />}</ServiceContext.Consumer>

export default withRouter(ThankYouWithService as any)
