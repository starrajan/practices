import styled from 'styled-components'
import { colors, screenSizes, theme } from '../../shared/styles/theme'

export const OperatingAgreementContainer = styled.div`
  padding: 30px 20px 50px 20px;
  @media (min-width: ${screenSizes.mediaL}px) {
    padding: 50px 60px;
  }
`
export const EditOperating = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${screenSizes.mediaL}px) {
    flex-direction:row;
  }
`
export const EditForm = styled.div`
  width: 100%;
  margin: 20px auto;
  @media (min-width: ${screenSizes.mediaL}px) {
    width: 50%;
    margin: 50px auto;
  }
`
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 40px 0;
`
export const AcceptButton = styled.button`
background:${colors.green}
font-size:10px;
border-radius:2px;
color:${colors.white};
outline:none;
border:none;
cursor:pointer;
text-transform:uppercase;
padding: 12px 15px;
font-family: Bold;
letter-spacing:1px;
height: 100%;
margin-right:20px
width:50%;
@media (min-width: ${screenSizes.mediaL}px) {
font-size:12px;
  height: 40px;
  width:30%;
}
`

export const GreyButton = styled.button`
background:${colors.greyButton}
font-size:12px;
border-radius:2px;
color:${colors.white};
outline:none;
border:none;
cursor:pointer;
text-transform:uppercase;
padding: 12px 15px;
font-family: Bold;
letter-spacing:1px;
height: 40px;
margin: 20px 5px;

`

export const CancelButton = styled.button`
background:${colors.greyButton}
font-size:12px;
border-radius:2px;
color:${colors.white};
outline:none;
border:none;
cursor:pointer;
text-transform:uppercase;
padding: 12px 15px;
letter-spacing:1px;
width: 40%;
margin-left:20px
font-family: Bold;
@media (min-width: ${screenSizes.mediaL}px) {
  width: 25%;
}
`
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`

export const Column = styled.div`
  flex-basis: 100%;
  margin: 5px;
  @media (min-width: ${screenSizes.mediaL}px) {
    flex: 1;
    margin: 5px;
  }
`

export const SubText = styled.p`
  color: ${colors.white};
  font-size: 24px;
  margin: 40px 0;
  font-family: Regular;
`

export const LightText = styled.p`
  color: ${colors.white};
  font-size: 14px;
  margin: 20px 5px;
  font-family: Regular;
  @media (min-width: ${screenSizes.mediaL}px) {
    margin: -20px 5px 0 5px;
  }
`

export const err = styled.p`
  color: ${colors.errColor};
  font-size: 14px;
  margin: 2px 0 0 0;
  font-family: Regular;
`

export const InputLabel = styled.p`
  font-family: Regular;
  color: ${colors.white};
  font-size: 12px;
  text-transform: capitalize;
  margin: 4px 0;
  @media (min-width: ${screenSizes.mediaL}px) {
    font-size: 16px;
  }
`

export const OperatingAgreementHead = styled.div`
margin:20px 0
display:flex;
justify-content: space-between;
flex-direction: column;
@media (min-width: ${screenSizes.mediaL}px) {
  margin:50px 0
  flex-direction: row;
}
`
export const HeaderText = styled.p`
color:${colors.white}
font-size: 16px;
font-family: Regular;
margin:10px 0;
`
export const HeaderLink = styled.p`
  margin: 0px 10px;
  font-size: 30px;
  cursor: pointer;
  font-family: Light;
  color: ${colors.white};
  @media (min-width: ${screenSizes.mediaL}px) {
    font-size: 2em;
  }
`
export const Signatures = styled.div`
  background: ${colors.green};
  display: flex;
  padding: 20px;
  border-radius: 3px;
  justify-content: space-between;
  margin-bottom: 20px;
  @media (min-width: ${screenSizes.mediaL}px) {
    font-size: 2em;
    margin-bottom: 0px;
  }
`
export const SignaturesHead = styled.div`
color:${colors.blueDark}
font-size: 24px;
font-family: Bold;
`

export const SignaturesSubHead = styled.div`
color:${colors.blueDark}
font-size: 16px;
font-family: Regular;
`

export const OrganizationInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
`
export const OrganizationInfoFoot = styled.div`
 border-top:1px solid;
 border-color:${colors.grey}
 display:flex;
 padding:15px 0;
 justify-content: space-between;
 margin-top:15px
`
export const FootText = styled.div`
font-size: 16px;
line-height: 22px;
font-family:Bold
color:${colors.white}
`
export const FootLink = styled.div`
font-size: 16px;
line-height: 22px;
font-family:Bold
color:${colors.green}

`
export const FootBadge = styled.div`
background:${colors.green}
padding: 3px 10px;
border-radius: 25px;
color: ${colors.white};
font-size: 14px;
font-family: Bold;
margin-left: 20px;
height: 25px;
width: 40px;
text-align: center;
`

export const OrganizationInfoCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (min-width: ${screenSizes.mediaL}px) {
    margin-top: 25px;
  }
`

export const OrganizationInfoDetails = styled.div`
  width: 100%;
  height: auto;
  padding: 10px
  margin-bottom: 20px;
  align-items: center;
  background: #657b88;
  color: #ffffff;
  box-shadow: 0px 15px 18px rgba(0, 0, 0, 0.0160074), 0px 0px 14px rgba(0, 0, 0, 0.0637566);
  border-radius: 8px;
  @media (min-width: ${screenSizes.mediaL}px) {
    height: 110px;
  }

  .bank-accounts {
    display: flex;
  }
  img {
    display: flex;
    justify-content: center;
    align-items: center;
    width:50px;
    height:50px;
    @media (min-width: ${screenSizes.mediaL}px) {
      width:100%;
      height:100%;
    }
  }
  @media (min-width: ${screenSizes.mediaL}px) {
    width: 50%;
    max-width:48%;
    height: 185px;
    margin-bottom: 30px;
    padding: 23px 34px 23px 36px;
  }

`
export const OrgInfoTitle = styled.div`
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  font-family:Light
  @media (min-width: ${screenSizes.mediaL}px) {
    font-weight: 300;
    font-size: 24px;
    line-height: 33px;
  }
`
export const OrgInformation = styled.div`
  font-size: 12px;
  opacity: 0.4;
  font-family:Light

  @media (min-width: ${screenSizes.mediaL}px) {
    font-size: 16px;
    line-height: 22px;
  }
`
export const RnAccount = styled.div`
  font-size: 12px;
  opacity: 0.4;
  margin-left: 10px;
  font-family:Light

  @media (min-width: ${screenSizes.mediaL}px) {
    margin-left: 50px;
    font-size: 16px;
    line-height: 22px;
  }

  
`
export const TabsContainer = styled.div`
  padding: 0;
  display: flex;
  justify-content: flex-start;
  overflow: auto;
  border-bottom: 1px solid;
  border-color: ${colors.grey};
`

export const ProfileWrapper = styled.div`
  padding: 20px;
  @media (min-width: ${screenSizes.mediaL}px) {
    padding: 0;
  }
`

export const TabsContainerLink = styled.div`
  font-size: 12px;
  font-family: Light;
  letter-spacing: 1px;
  color: ${colors.grey};
  text-transform: capitalize;
  margin-right: 20px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    color: ${colors.white};
    border-bottom: 1px solid;
    border-color: ${colors.white};
  }
  @media (min-width: ${screenSizes.mediaL}px) {
    font-family: Light;
    font-size: 18px;
  }
`
export const TabPanelDisplay = styled.div`
  margin: 40px 0;
`

export const SigProgress = styled.div`
  width:40%
`

export const PdfHead = styled.div`
display:flex;
justify-content:space-between;
margin:30px 0;
`

export const PdfButtonWrapper = styled.div`
display: flex;
justify-content: flex-start;
width:35%;
`



export const UnitsProgress = styled.div`
  width: 100%;
  max-width: 288px;
  background: #2d3d47;
  padding: 16px 12px;
  box-shadow: 0px 15px 18px rgba(0, 0, 0, 0.0160074), 0px 0px 14px rgba(0, 0, 0, 0.0637566);
  border-radius: 8px;
  margin-left: inherit;
  margin-top:20px;

  p {
    font-size: 20px;
    text-align: center;
    color: #ffffff;
    font-family: Regular;
    margin: 10px 0 0 0;
  }
  @media (min-width: ${screenSizes.mediaL}px) {
    margin-left: auto;
  }
`