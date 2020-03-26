import styled from 'styled-components'
import { colors } from '../../../../shared/styles/theme'

export const StyledOrganizationTab = styled.ul<any>`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 96px;
  margin-left: 45px;
  color: ${colors.white};
  max-width: ${(props: any) => props.tabName === 'import' && '500px'};
`

export const LiStep = styled.li<any>`
  padding: 0 10px;
  padding-bottom: 4px;
  border-bottom: ${(props: any) => (props.currentStep ? `2px solid ${colors.white}` : 0)};
  position: relative;
  opacity: ${(props: any) => (props.completed || props.currentStep ? '1' : '0.49')};
  font-weight: ${(props: any) => (props.completed || props.currentStep ? 'bold' : 'normal')};
  &:after {
    content: ' ';
    display: block;
    width: 0.3em;
    height: 0.6em;
    border: solid ${colors.primaryLight};
    border-width: 0 0.1em 0.1em 0;
    position: absolute;
    right: -11px;
    top: 20%;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    visibility:  => (props.completed ? 'visible' : 'hidden')};
  }
  &:before {
    content: ' ';
    display: block;
    border: solid 0.4em ${colors.white};
    border-radius: 0.4em;
    height: 0;
    width: 0;
    position: absolute;
    right: -15px;
    top: 47%;
    margin-top: -0.5em;
    visibility: ${props => (props.completed ? 'visible' : 'hidden')};
  }
`
