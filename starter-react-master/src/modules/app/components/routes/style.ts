import styled from 'styled-components'
import { colors, screenSizes } from '../../../../shared/styles/theme'

export const StyledRoutesContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 1224px;
  margin: 50px auto 0;
  width: 100%;
`

export const StyledRoutes = styled.main`
  z-index: 1;
  background-color: ${colors.primary}
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  padding: 30px;
  padding-bottom: 100px;
  position: relative;
`