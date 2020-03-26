import styled from 'styled-components'
import { colors } from '../../../../shared/styles/theme'
import Regular from '../../../../assets/nunito/NunitoSans/NunitoSans-Regular.ttf'
import { Button } from 'shared/components/button'

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1rem;
  padding-top: 2rem;
  @media (min-width: 700px) {
    flex-direction: row;
    justify-content: space-between;
  }
`
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

export const CapTableBtnGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  @media (min-width: 700px) {
    margin-top: 0;
    flex-direction: row;
    justify-content: space-between;
  }
`

export const CapTableBtn = styled(Button)`
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #ffffff;
  font-weight: 800;
  font-size: 14px;
  border-radius: 4px;
  outline: none !important;
  margin-top: 10px;
  @media (min-width: 700px) {
    margin-top: 0;
    border-radius: 0;
    &:first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    &:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
`
