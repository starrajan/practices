import styled from 'styled-components'
// import { colors, screenSizes, theme } from '@styles/theme'
import { colors, screenSizes, theme } from '../../../../../../shared/styles/theme'


export const StyledSelect = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  > div {
    text-align: start;
    font-size: 16px;
    line-height: 22px;
    color: ${colors.white};
    opacity: 0.5;
  }
  select {
    margin-top: 4px;
    font-size: 18px;
    line-height: 25px;
    color: #3e3e3e;
    padding: 15px 0 12px 15px;
    &::placeholder {
      color: ${colors.grey};
    }
    > option {
      color: #3e3e3e;
    }
    @media (max-width: ${screenSizes.mediaS}px) {
      margin: 6px 0;
      }
  }
 
`
