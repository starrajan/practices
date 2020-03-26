import styled from 'styled-components'
import { screenSizes } from '../../../../shared/styles/theme'
import { Button } from '../../../../shared/components/button'
import { ModalContainerHeading } from '../../../../shared/custom-modal/style'

export const Container = styled.div`
  padding: 14px 0 38px 0;
  width: 290px;
  @media (min-width: ${screenSizes.mediaS}px) {
    width: 711px;
  }
`
export const HeadingText = styled(ModalContainerHeading)`
  width: 100%;
`
export const ButtonGroup = styled.div`
  display: flex;
  width: 90%;
  max-width: 520px;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 90px;
  @media (max-width: ${screenSizes.mediaS}px) {
    flex-direction: column;
    align-items: center;
  }
`

export const StartOrgBtn = styled(Button)`
  font-weight: 800;
  font-size: 14px;
  letter-spacing: 2px;
  width: 49%;
  padding: 8px 1rem;
  outline: none !important;
  margin-top: 20px;
  border-radius: 2px;
  @media (max-width: ${screenSizes.mediaS}px) {
    width: 100%;
    height: 52px;
  }
`
export const OrgContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`