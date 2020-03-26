import styled from 'styled-components'
import { colors, screenSizes } from '../../../../../shared/styles/theme'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const AuthCard = styled.div`
 background:${colors.white}
 border-radius:3px
 margin: auto 10px;
 width:auto;
 margin-top: 100px;
 @media (min-width: ${screenSizes.mediaL}px) {
 width:715px
 margin: auto;
 margin-top: 150px;
}
`
export const AuthHeadTitle = styled.p`
font-size:40px
border-color:${colors.titleColor}
font-family: Regular;
margin: 0;
`
export const AuthHeadText = styled.p`
font-size:16px
border-color:${colors.titleColor}
font-family: Regular;
margin: 0;
`
export const AuthCardHead = styled.div`
  padding: 50px 20px 35px 20px;
  border-bottom: 1px solid;
  border-color: ${colors.greyBorder} @media (min-width: ${screenSizes.mediaL}px) {
    padding: 50px 50px 35px 50px;
  }
`
export const AuthCardContent = styled.div`
  padding: 20px 20px 20px 20px ;
  @media (min-width: ${screenSizes.mediaL}px) {
    padding: 20px 50px 20px 50px;
  }
`
export const ButtonWrapper = styled.div`
  display: flex;
  padding: 25px 0 30px 0;
  margin: 6px;
`

export const AcceptButton = styled.button`
background:${colors.green}
font-size:12px;
border-radius:2px;
color:${colors.white};
outline:none;
border:none;
cursor:pointer;
letter-spacing:1px;
text-transform:uppercase;
padding: 12px 15px;
width: 25%;
font-family: Bold;
`

export const CancelButton = styled.button`
background:${colors.cancelButton}
font-size:12px;
border-radius:2px;
color:${colors.white};
outline:none;
border:none;
cursor:pointer;
text-transform:uppercase;
padding: 12px 15px;
letter-spacing:1px;
width: 25%;
margin-left:20px
font-family: Bold;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`

export const Column = styled.div`
  flex-basis: 100%;
  @media (min-width: ${screenSizes.mediaL}px) {
    flex: 1;
    margin: 10px 5px;
  }
`
export const LinkText = styled.p`
  font-size: 14px;
  color: ${colors.grey};
  font-family: Regular;
  text-decoration: underline;
  margin: 6px;
  cursor: pointer;
`
export const LinkTextGreen = styled.p`
  font-size: 14px;
  color: ${colors.green};
  font-family: Regular;
  text-decoration: underline;
  margin: 6px;
  cursor: pointer;
`

export const InputLabel = styled.p`
  font-family: Light;
  color: ${colors.white};
  font-size: 16px;
  text-transform: capitalize;
  margin: 5px 0;
`
export const RequiredLabel = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Required = styled.p`
font-size: 16px;
line-height: 22px;
color:${colors.grey}
font-family: Light;
margin: 5px 0;
`

//Term style
export const TermContent = styled.div`
border: 1px solid;
  border-color:${colors.greyBorder}
padding:10px
overflow-y:auto;
height:330px;
`
export const TermContentPara = styled.p`
font-size:12px
font-family: Light;
margin:0
`
export const TermContentParaBold = styled.p`
  font-size: 12px;
  font-family: Bold;
  margin: 0;
`

export const err = styled.p`
  color: ${colors.errColor};
  font-size: 14px;
  margin: 2px 0 0 0;
  font-family: Regular;
`
//auth model

export const AuthModalContainer = styled.div`
  padding: 15px 35px 35px 35px;
  text-align: center;
`

export const AuthModalImage = styled.div`
  margin: 40px 0 40px 0;
`
export const ModalImg = {
  height: '200px',
}

export const HeaderLink = styled.p`
  margin: 0px 10px;
  font-size: 2em;
  cursor: pointer;
  font-family: Light;
  color: ${colors.white};
`
export const ForgotText = styled.p`
font-size: 21px;
line-height: 33px;
color:${colors.grey};
font-family: Light;
margin: 10px;
width: 80%;
}
`
export const AuthWrapper = styled.p`
  margin-top: 100px;
`

export const PhoneWrap = styled.p`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
`
export const SubscriptionRadioText = styled.span`
  font-size: 16px;
  font-family: Regular;
  color: ${colors.white};
  margin: 0 0 0 10px;
`
export const LinkTo = styled.span`
  font-size: 16px;
  font-family: Regular;
  margin: 0 0 0 10px;
  color: ${colors.green};
  cursor:pointer;
`
