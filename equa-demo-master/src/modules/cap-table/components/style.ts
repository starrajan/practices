import styled from 'styled-components'
import Regular from '../../../assets/nunito/NunitoSans/NunitoSans-Regular.ttf'
import { colors } from '../../../shared/styles/theme'

export const CapTableTitle = styled.div`
  font-family: ${Regular};
  h1 {
    font-size: 32px;
    line-height: 44px;
    color: ${colors.white};
    margin: 0;
  }
  p {
    font-size: 16px;
    line-height: 22px;
    color: ${colors.white};
    opacity: 0.6;
    margin: 0;
  }
`
