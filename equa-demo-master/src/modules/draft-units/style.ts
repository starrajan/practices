import styled from 'styled-components'
import { Button } from 'shared/components/button'

export const Container = styled.div`
  width: 100%;
  overflow: hidden;
  max-width: 1224px;
  margin: 0 auto;
  padding: 50px 1rem;
`
export const DraftUnitsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 42px;
`

export const DraftUnitsHeading = styled.div`
  display: flex;
  img {
    margin-right: 1rem;
    cursor: pointer;
  }
  h1 {
    font-size: 32px;
    color: #ffffff;
    font-family: Regular;
  }
`
export const DraftUnitsProgress = styled.div`
  width: 100%;
  max-width: 288px;
  background: #2d3d47;
  padding: 16px 12px;
  box-shadow: 0px 15px 18px rgba(0, 0, 0, 0.0160074), 0px 0px 14px rgba(0, 0, 0, 0.0637566);
  border-radius: 8px;
  p {
    font-size: 20px;
    text-align: center;
    color: #ffffff;
    font-family: Regular;
    margin: 10px 0 0 0;
  }
`
export const ShareTransferFrom = styled.div`
  max-width: 600px;
  margin: 0 auto;
  .receiver-title {
    margin-top: 0;
    @media (min-width: 700px) {
      margin-top: 100px;
    }
  }
  .title {
    margin-top: 1.5rem;
  }
  .upload-btn {
    display: flex;
    align-items: flex-end;
  }
  .legend-text-area {
    margin-top: 38px;
  }
`

export const FormTitle = styled.div`
  font-size: 24px;
  line-height: 33px;
  color: #ffffff;
  margin-bottom: 1rem;
  margin-top: 45px;
  font-family: Regular;
`
export const FormInputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media (min-width: 700px) {
    flex-direction: row;
    align-items: center;
  }
`
export const FormInput = styled.div`
  margin-bottom: 10px;
  @media (min-width: 700px) {
    width: 49%;
    margin-bottom: 22px;
  }
`
export const TransferPersonBlock = styled.div`
  &:first-child {
    margin-bottom: 115px;
  }
`
export const FinishButton = styled(Button)`
  margin-top: 47px;
  width: 184px;
  height: 47px;
  font-size: 14px;
  letter-spacing: 2px;
  padding: 0;
  font-weight: 800;
`
export const UploadLegendBlock = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  @media (min-width: 700px) {
    flex-direction: row;
    margin-top: 2.5rem;
  }
  p {
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin: 20px 0;
    color: rgba(255, 255, 255, 0.87);
    @media (min-width: 700px) {
      flex-direction: row;
      align-items: center;
      margin: 0 30px;
    }
  }
`
export const UpLegendButton = styled(Button)`
  height: 52px;
  width: 100%;
  font-size: 14px;
  letter-spacing: 2px;
  padding: 0;
  font-weight: 800;
  span {
    margin-left: 20px;
  }
`
export const DraftDoc = styled.div`
  margin-top: 40px;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  p {
    text-align: center;
    color: #ffffff;
    margin: 0;
    font-family: Regular;
    font-size: 16px;
  }
  img {
    margin-right: 12px;
  }
  @media (min-width: 700px) {
    flex-direction: row;
  }
`
