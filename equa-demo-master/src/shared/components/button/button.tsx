import { css, ThemeProps } from 'styled-components'
import { colors, ThemeStarter } from '../../styles/theme'
import styled from 'styled-components'

export interface ButtonProps {
  margin?: string
  priority?: string
  theme: ThemeProps<ThemeStarter>
}

export const ButtonGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`

const buttonStyles = css`
  display: inline-block;
  margin: ${(props: ButtonProps) => props.margin};
  padding: 14px 32px;
  text-transform: uppercase;
  border: 0;
  outline: 0;
  border-radius: 4px;
  font-size: 0.8em;
  text-align: center;
  color: ${(props: ButtonProps & ThemeProps<ThemeStarter>) =>
    props.priority && props.priority === 'accent' ? colors.secondary : colors.white};
  background-color: ${(props: ButtonProps & ThemeProps<ThemeStarter>) =>
    props.priority ? props.theme[props.priority] : props.theme.action};
  cursor: pointer;

  &:hover {
    background-color: ${(props: ButtonProps & ThemeProps<ThemeStarter>) =>
      props.priority ? props.theme[props.priority + 'Active'] : props.theme.actionActive};
  }

  &:disabled {
    background-color: ${colors.grey};
    opacity: 0.5;
    cursor: initial;
  }

  + a {
    margin-left: 10px;
    cursor: initial;
  }
`

export const Button = styled.button<any>`
  ${buttonStyles}
`
