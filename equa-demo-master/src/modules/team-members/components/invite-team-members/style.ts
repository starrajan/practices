import styled from 'styled-components'
import { colors,screenSizes } from '../../../../shared/styles/theme'
import { Button } from '../../../../shared/components/button/'

export const CustomLabel = styled.label`
  color: #8b9296;
  font-weight: 100;
`
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`

export const Column = styled.div`
  flex-basis: 100%;
  @media (min-width: ${screenSizes.mediaL}px) {
    flex: 1;
    margin: 5px;
  }
`
export const err = styled.p`
  color: ${colors.errColor};
  font-size: 14px;
  margin: 2px 0 0 0;
  font-family: Light;
`
export const InputLabel = styled.p`
  font-family: Light;
  color: ${colors.grey};
  font-size: 14px;
  text-transform: capitalize;
  margin: 4px 0;
`

export const Required = styled.span`
  font-family: Light;
  color: ${colors.grey};
  font-size: 14px;
  text-transform: capitalize;
  margin: 4px 0;
`
export const ButtonGroup = styled.div`
  display: flex;
  width: 100%;
  max-width: 700px;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  margin: 35px 0;
  @media (max-width: ${screenSizes.mediaM}px) {
    flex-direction: column;
    align-items: center;
  }
`

export const InviteButton = styled(Button)`
  font-weight: 800;
  font-size: 14px;
  padding: 12px 25px;
  letter-spacing: 2px;
  width: 45%;
  outline: none !important;
  margin-top: 20px;
  border-radius: 2px;
  font-family: Light;
  @media (max-width: ${screenSizes.mediaS}px) {
    width: 100%;
  }
`
export const CancelButton = styled(Button)`
  font-weight: 800;
  font-size: 14px;
  padding: 12px 25px;
  letter-spacing: 2px;
  width: 30%;
  outline: none !important;
  margin-top: 20px;
  border-radius: 2px;
  font-family: Light;
  @media (max-width: ${screenSizes.mediaS}px) {
    width: 100%;
  }
`