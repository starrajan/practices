import styled from 'styled-components'
import { colors } from '../../../styles/theme'

export const CheckMark = styled.span<any>`
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: ${colors.checkMarkColor};
  border-radius: ${props => (props.type === 'radio' ? '50%' : '5%')};
  transform: translate(0, -50%);
  :after {
    content: '';
    position: absolute;
    display: none;
    top: 50%;
    left: 50%;
    width: 8px;
    height: 8px;
    border-radius: ${props => (props.type === 'radio' ? '50%' : '5%')};
    background: ${colors.checkMarkDotColor};
    transform: translate(-50%, -50%);
  }
`

export const InfoBox = styled.div`
  display: flex;
  position: absolute;
  left: 0%;
  bottom: 0%;
  width: 400px;
  padding: 0.5rem;
  font-size: 14px;
  border: 1px solid white;
  z-index: 300;
  opacity: 0;
  transition: 700ms opacity;
  span {
    margin-right: 10px;
  }
`

export const InfoIcon = styled.span`
  :hover ~ ${InfoBox} {
    opacity: 1;
  }
`

export const RadioContainer = styled.label<any>`
  display: flex;
  position: relative;
  padding-left: 35px;
  margin: 10px 0;
  font-size: 1.1rem;
  line-height: 19px;
  color: white;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  input {
    position: absolute;
    display: none;
    cursor: pointer;
  }
  :hover input ~ ${CheckMark} {
    background-color: ${colors.green};
  }
  input:checked ~ ${CheckMark} {
    background-color: ${colors.green};
  }
  input:checked ~ ${CheckMark}:after {
    display: block;
  }
`
export const CheckBoxLabel = styled.p`
  font-family: Regular;
  color: ${colors.white};
  font-size: 16px;
  margin: 0;
  text-transform: none;
`
