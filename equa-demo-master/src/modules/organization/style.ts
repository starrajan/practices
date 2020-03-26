import styled from 'styled-components'
import { screenSizes } from 'shared/styles/theme'
export const OrganizationContainer = styled.div`
  width: 100%;
  overflow: hidden;
  max-width: 1224px;
  margin: 0 auto;
  padding: 24px;
`
export const OrganizationContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  @media (min-width: ${screenSizes.mediaL}px) {
    flex-direction: row;
    align-items: flex-start;
  }
`
