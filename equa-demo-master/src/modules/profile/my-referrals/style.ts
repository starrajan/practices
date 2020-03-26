import styled from 'styled-components'
import { colors, screenSizes } from '../../../shared/styles/theme'

export const MyReferralsPage = styled.div`
  padding-bottom: 100px;
  min-height: 100vh;
  padding: 10px 0px
  @media (min-width: ${screenSizes.mediaL}px) {
    padding: 10px 80px
  }
`
