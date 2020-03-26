import styled from 'styled-components'
import { colors, screenSizes } from '../../../../shared/styles/theme'
import { FlexRow } from '../../../../shared/styles/styled'

export const HeaderLink = styled.div<any>`
  margin: 0px 10px;
  font-size: 2em;
  cursor: pointer;
  font-family: Light;
  color: ${props => (props.active ? colors.white : colors.grey)};
  white-space: nowrap;
  + div {
    color: ${colors.grey};
    font-size: 1.1em;
  }
  @media (min-width: ${screenSizes.mediaL}px) {
    font-size: 42px;
   }
`
export const StyledHeader = styled(FlexRow)`
  padding:50px

  > div:first-of-type {
    margin-left: 0;
  }
`

export const StyledAuthForm = styled.div`
background-color: #2C3E50;
box-shadow: rgba(0,0,0,0.1) -5px 0 5px 0px;
height: inherit;
width: 50%;
position:relative;

  // input {
  //   color: ${colors.white};
  //   background-color: ${colors.blueMed};
  //   border-bottom: 0;
  //   min-width: 200px;
  // }
  // button {
  //   width: 200px;
  //   min-width: 200px;
  //   margin: 20px 0;
  //   @media (max-width: ${screenSizes.mediaL}px) {
  //     width: 100%;
  //   }
  // }
  // > div {
  //   max-width: 600px;
  // }
`

