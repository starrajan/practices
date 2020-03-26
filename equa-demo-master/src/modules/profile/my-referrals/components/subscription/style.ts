import styled from 'styled-components'
import { Button } from '../../../../../shared/components/button'

export const SubscriptionCont = styled.div`
  margin-top: 37px;
  padding: 24px;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const SubText = styled.p`
  font-weight: normal;
  font-size: 24px;
  color: #ffffff;
`

export const PurchaseSubBtn = styled(Button)`
  padding: 14px;
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
  color: #ffffff;
`
