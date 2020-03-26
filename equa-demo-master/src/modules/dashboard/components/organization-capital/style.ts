import styled from 'styled-components'
import { colors, screenSizes, theme } from '../../../../shared/styles/theme'
export const OrganizationCapitalCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  color: #ffffff;
  margin-top: 52px;
  @media (min-width: ${screenSizes.mediaL}px) {
    flex-direction: row;
  }
`
export const NoShareHoldingData = styled.div`
  display: flex;
  margin-top: 52px;
  justify-content: center;
  align-items: center;
  height: 146px;
  border-radius: 4px;
  margin-bottom: 20px;
  background: rgba(255, 255, 255, 0.05);
  @media (min-width: ${screenSizes.mediaL}px) {
    margin-bottom: 0;
  }
`
export const InfoDetails = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0 30px 0;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
  margin-bottom: 20px;

  @media (min-width: ${screenSizes.mediaL}px) {
    width: 22%;
    height: 146px;
    margin-bottom: 0;
  }
`
export const Amount = styled.div`
  font-weight: 300;
  font-size: 22px;
  @media (min-width: ${screenSizes.mediaL}px) {
    font-weight: 300;
    font-size: 48px;
  }
`
export const Description = styled.div`
  margin-top: 9px;
  padding: 0 10%;
  font-size: 12px;
  text-align: center;
  opacity: 0.4;
  text-transform: capitalize;
  @media (min-width: ${screenSizes.mediaL}px) {
    font-size: 16px;
  }
`
