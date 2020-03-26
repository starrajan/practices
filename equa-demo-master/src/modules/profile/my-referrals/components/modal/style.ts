import styled from 'styled-components'
import { colors, screenSizes, theme } from '../../../../../shared/styles/theme'


interface ModalBodyProps {
  show: boolean
}

interface ModalContentProps {
  translate?: string
}

export const ModalBody = styled.div<ModalBodyProps>`
  display: ${props => (props.show ? 'block' : 'none')};
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.3); /* Black w/ opacity */
`

export const ModalContent = styled.div<ModalContentProps>`
  background-color: #fefefe;
  display: inline-block;
  margin: 0 auto;
  width: 300px;
  padding: 20px 26px 0 26px;
  min-width: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  @media (min-width: ${screenSizes.mediaXL}px) {
    width: auto;
  }
`

export const CloseModalBtnCont = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const CloseModalBtn = styled.button`
  background: transparent;
  border: 0;
  outline: 0;
  padding: 0;
  cursor: pointer;
`
