import styled from 'styled-components'
import { colors,screenSizes } from '../styles/theme'
interface ModalBodyProps {
  show: boolean
}

export const ModalBody = styled.div<ModalBodyProps>`
  display: ${props => (props.show ? 'block' : 'none')};
  position: fixed;
  z-index: 99999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.3);
`

export const ModalContent = styled.div`
  background-color: #fefefe;
  display: inline-block;
  margin: 0 auto;
  min-width: 300px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-height: 100%;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 0 !important;
  }
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
`


export const ModalContainerHeading = styled.p`
font-size:24px
color:${colors.titleColor}
font-family: Regular;
text-align:center
@media (min-width: ${screenSizes.mediaL}px) {
  font-size:35px
}
`
export const ModalContainerText = styled.p`
font-size:16px
color:${colors.titleColor}
font-family: Regular;
text-align:center

`