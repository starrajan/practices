import styled from 'styled-components'
import { colors, screenSizes } from '../../../../shared/styles/theme'
import { Button } from '../../../../shared/components/button/button'

export const EditProfileContainer = styled.div`
  padding: 60px;
`

export const EditProfileForm = styled.div`
  width: 50%;
  margin:40px auto;
`
export const HeaderLink = styled.p`
  margin: 0px 10px;
  font-size: 2em;
  cursor: pointer;
  font-family: Light;
  color:${colors.white};
`
export const AddBlock = styled.div`
display:flex;
`
export const BlockWrap = styled.div`
display: flex;
margin-top: 35px;
`

export const MathBlock = styled.div`
font-size: 20px;
font-family: Bold;
background:${colors.green}
color:${colors.white}
height: 45px;
width: 45px;
text-align: center;
padding: 7px;
margin: 5px;
cursor: pointer;
border-radius:3px;
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
    margin: 5px;
  }
`
export const err = styled.p`
  color: ${colors.errColor};
  font-size: 14px;
  margin: 2px 0 0 0;
  font-family: Light;
`
export const FormHeading = styled.p`
  color: ${colors.white};
  font-size: 24px;
  font-family: Light;
  margin: 60px 5px 20px 5px;
`

export const InputLabel = styled.p`
font-family: Light;
color:${colors.white};
font-size:16px;
text-transform:capitalize;
margin: 5px 0;
`
export const RequiredLabel = styled.div`
display:flex;
justify-content:space-between;
`

export const Required = styled.p`
font-size: 16px;
line-height: 22px;
color:${colors.grey}
font-family: Light;
margin: 5px 0;
`


export const ButtonGroup = styled.div`
  display: flex;
  width: 100%;
  max-width: 700px;
  flex-direction: row;
  margin: 35px 4px;
  @media (max-width: ${screenSizes.mediaM}px) {
    flex-direction: column;
    align-items: center;
  }
`

export const InviteButton = styled(Button)`
  font-weight: 800;
  font-size: 14px;
  padding: 12px 25px;
  letter-spacing: 2px;
  width: 40%;
  outline: none !important;
  margin-top: 20px;
  border-radius: 2px;
  font-family: Light;
  @media (max-width: ${screenSizes.mediaS}px) {
    width: 100%;
  }
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
export const ProgressSection = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${screenSizes.mediaL}px) {
    flex-direction:row;
  }
`