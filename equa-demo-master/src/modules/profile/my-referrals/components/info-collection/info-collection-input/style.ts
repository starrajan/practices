import styled from 'styled-components'
// import { colors } from '@styles/theme'
import { colors, screenSizes, theme } from '../../../../../../shared/styles/theme'

export const StyledInput = styled.div`
  > div {
    text-align: start;
    font-size: 16px;
    line-height: 22px;
    color: ${colors.white};
    opacity: 0.5;
  }
  input {
    margin-top: 4px;
    font-size: 18px;
    line-height: 25px;
    color: #3e3e3e;
    padding: 15px 0 12px 15px;
    &::placeholder {
      color: ${colors.grey};
    }
  }
`
