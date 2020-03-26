import styled from 'styled-components'
import { colors } from '../../../styles/theme'
import { Button } from '../../button'

export const ToggleButtonsGroup = styled.div<any>`
  display: flex;
  justify-content: ${(props: any) => !props.vertical && 'space-between'};
  justify-content: ${(props: any) => props.horizontal && 'flex-start'};
  margin-top: 24px;
  flex-direction: ${(props: any) => (props.vertical ? 'column' : 'row')};
`
export const ToggleButton = styled(Button)<any>`
  width: ${(props: any) => (props.vertical ? '100%' : '180px')};
  border-radius: 4px;
  border: ${(props: any) => (props.selected ? '2px solid' : 0)};
  border-color: ${(props: any) => (props.selected ? colors.green : colors.greyBackground)};
  box-sizing: border-box;
  color: ${(props: any) => (props.selected ? colors.green : colors.greyLight1)};
  background: rgba(255, 255, 255, 0.05);
  &:hover {
    background-color: ${colors.primaryLight};
  }
  margin: ${(props: any) => (props.vertical ? '6px 0' : '0')};
  margin: ${(props: any) => props.horizontal && '0 6px'};
  display: flex;
  justify-content: ${(props: any) => !props.vertical && 'center'};
  img {
    margin-right: 1.5rem;
    width: 60px;
    height: 40px;
  }
  outline: none !important;
`
export const ToggleButtonText = styled.p<any>`
  font-size: 14px;
  color: ${(props: any) => (props.selected ? colors.green : colors.greyLight1)};
  font-family: Regular;
  text-align: left;
  margin: 0;
`
