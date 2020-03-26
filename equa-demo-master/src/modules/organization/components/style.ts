import styled from 'styled-components'
import { colors } from '../../../shared/styles/theme'
import { colorChangeDelay } from '../../../shared/styles/styled'
import { Button } from '../../../shared/components/button'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`
export const OrgSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Regular;
`
export const OrganizationBlock = styled.div`
  display: flex;
`

export const StyledStepField = styled.div<any>`
  border-left: 10px solid ${(props: any) => (!props.complete ? colors.primary : colors.green)};
  transition: border-left-color ${colorChangeDelay};
  padding-bottom: 48px;
  margin-left: -27.5px;
  margin-top: 22.5px;
`
export const StyledCircle = styled.div<any>`
  width: 45px !important;
  height: 45px !important;
  background-color: ${(props: any) => (props.complete ? colors.green : colors.primary)};
  border-radius: 50%;
  color: ${(props: any) => (props.complete ? colors.white : 'black')};
  transition: background-color ${colorChangeDelay};
  z-index: 100;
`
export const DataBlock = styled.div<any>`
  background: rgba(255, 255, 255, 0.05);
  border: ${(props: any) => props.selected && '2px solid #33bb40'};
  box-sizing: border-box;
  border-radius: 4px;
  padding: 22px;
  width: 615px;
  max-width: 615px;
  margin-left: 58px;
  margin-top: -20px;
`
export const QuestionText = styled.div<any>`
  font-size: 24px;
  color: #ffffff;
  font-weight: 300;
  font-family: Regular;
  margin-top: ${(props: any) => props.marginTopValue && props.marginTopValue};
`
export const SmallQueText = styled.div`
  font-family: Regular;
  color: ${colors.white};
  font-size: 16px;
`
export const SaveNextBtn = styled(Button)`
  margin-top: 48px;
  width: 183px;
  margin-left: 88px;
`
export const CheckBlock = styled.div`
  display: flex;
  padding-left: 8px;
`
export const CheckText = styled.div<any>`
  font-weight: 300;
  font-size: 24px;
  color: white;
  margin-left: 30px;
  color: white;
  opacity:${(props: any) => (props.complete ? 1 : 0.4)}
  span {
    margin-right: 12px;
  }
`
export const ToggleBtnGroup = styled.div<any>`
  display: flex;
  margin-top: 24px;
  margin-bottom: ${(props: any) => (props.marginBottom ? props.marginBottom : '24px')};
  flex-direction: ${(props: any) => (props.vertical ? 'column' : 'row')};
`
export const ToggleButton = styled(Button)<any>`
  border-radius: 4px;
  border: ${props => (props.selected ? '2px solid' : 0)};
  border-color: ${props => (props.selected ? colors.green : colors.greyBackground)};
  box-sizing: border-box;
  margin-right: 12px;
  color: ${props => (props.selected ? colors.white : colors.greyLight1)};
  background: rgba(255, 255, 255, 0.05);
  &:hover {
    background-color:${colors.primaryLight};
  }
  /* &:hover {
    ${props => (!props.selected ? 'background-color: ' + colors.primaryLight : '')};
    ${props => (!props.selected ? 'color: ' + colors.white : '')};
    ${props => (!props.selected ? 'border-color: ' + colors.primaryLight : '')};
    ${props => (props.selected ? 'cursor: ' + 'initial' : '')};
  } */
  margin: ${props => (props.vertical ? '6px 0' : '0 6px')};
  width: ${props => (props.vertical ? '100%' : '185px')};
  outline:none !important;
`
