import styled from 'styled-components'
import { colors, screenSizes, theme } from '../../../../shared/styles/theme'



export const OrganizationInfoBox = styled.div`
 display:flex;
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
color:${colors.white};
cursor:pointer;
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
