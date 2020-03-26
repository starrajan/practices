import styled from 'styled-components'
import { Button } from '../../../../../shared/components/button'
import { InputGroup } from '../../../../../shared/styles/styled'
import { colors, screenSizes, theme } from '../../../../../shared/styles/theme'

export const InfoCollectionWrapper = styled.div`
  margin-top: 24px;
  background-color: rgba(255, 255, 255, 0.05);
  padding: 10px;
  border-radius: 8px;
  @media (min-width: ${screenSizes.mediaXL}px) {
    padding: 24px;
  }
`
export const InfoDescription = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .desc {
    font-weight: normal;
    font-size: 16px;
    color: white;
    font-family: Regular;
    @media (min-width: ${screenSizes.mediaXL}px) {
      font-size: 24px;
    }
  }
  .expand-btn {
    font-size: 32px;
    color: white;
    cursor: pointer;
  }
`
export const InformationBlock = styled.div<any>`
  display: ${props => (props.showInfoBlock ? 'block' : 'none')};
  margin-top: 22px;
`
export const InformationInputGroup = styled(InputGroup)`
  margin-bottom: 20px;
  @media (max-width: ${screenSizes.mediaS}px) {
    flex-direction: column;
    > div {
      margin-left: 0px;
      margin-right: 0px;
      + div {
        margin-left: 0px;
        margin-right: 0px;
      }
    }
  }
`
export const InforMationForm = styled.div<any>`
  display: ${props => (props.showForm ? 'none' : 'flex')};
  flex-direction: column;
`
export const InformationButton = styled(Button)<any>`
  width: 49.15%;
  font-weight: bold;
  font-size: 10px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.05em;
  padding: 10px;
  background-color: ${props => (props.background ? props.background : '#33BB40')};
  text-transform: uppercase;
  box-sizing: border-box;
  &:hover {
    background: ${props => props.background && '#30424D'};
  }
  @media (min-width: ${screenSizes.mediaXL}px) {
    padding: 17px 0;
    font-size: 16px;
  }
`

export const InformationButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 24px 0;
`

export const InformationSubmitDetails = styled.div<any>`
  display: ${props => (props.showInfoDetails ? 'flex' : 'none')};
  flex-direction: column;
  color: ${colors.white};
  margin-top: 39px;
`
export const InfoDetailsTab = styled.div`
  display: flex;
  justify-content: space-between;
  width: 600px;
`
export const InfoDetails = styled.div`
  margin-top: 25px;
  width: 270px;
`
export const InfoTitleName = styled.div`
  font-size: 18px;
  line-height: 22px;
  opacity: 0.4;
`
export const InfoValue = styled.div`
  font-size: 18px;
  line-height: 22px;
  margin-top: 0.5rem;
`
export const InfoEdit = styled(Button)`
  width: 250px;
  margin: 36px 0 25px 0;
  font-size: 16px;
  font-weight: bold;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 1rem;
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
    margin: 10px;
  }
`

export const err = styled.p`
  color: ${colors.errColor};
  font-size: 14px;
  margin: 2px 0 0 0;
  font-family: Regular;
`
export const InputLabel = styled.p`
  font-family: Regular;
  color: ${colors.white};
  font-size: 16px;
  text-transform: capitalize;
  margin: 4px 0;
`