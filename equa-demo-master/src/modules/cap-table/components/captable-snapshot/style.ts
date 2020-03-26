import styled from 'styled-components'
import { Button } from 'shared/components/button'
import Regular from '../../../../assets/nunito/NunitoSans/NunitoSans-Regular.ttf'

export const SnapshotContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.5rem 0;
  @media (min-width: 700px) {
    flex-direction: row;
    justify-content: space-between;
  }
`
export const SelectDate = styled.select<any>`
  font-size: 18px;
  color: #ffffff;
  width: 284px;
  height: 25px;
  background-color: #394e5b;
  border: 0;
  outline: none;
  font-family: ${Regular};
`
export const PrintButton = styled(Button)`
  border-radius: 2px;
  font-weight: 800;
  font-size: 14px;
  letter-spacing: 2px;
  background-color: rgba(255, 255, 255, 0.2);
  img {
    margin-right: 1rem;
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
  outline: none !important;
  padding: 14px 20px;

  margin: 50px 0;

  @media (min-width: 700px) {
    margin: 0;
    margin-right: 10px;
  }
`
