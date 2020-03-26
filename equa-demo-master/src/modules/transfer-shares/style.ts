import styled from 'styled-components'
import { Button } from 'shared/components/button'
export const Container = styled.div`
  width: 100%;
  overflow: hidden;
  max-width: 1224px;
  margin: 0 auto;
  margin-top: 50px;
  padding: 50px 1rem;
`
export const ShareTransferHeading = styled.div`
  display: flex;
  margin-bottom: 42px;
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
  }
`
export const FormInput = styled.div`
  margin-bottom: 10px;
  @media (min-width: 700px) {
    width: 49%;
  }
`
export const TransferPersonBlock = styled.div``
export const CertificationBtn = styled(Button)`
  margin-top: 47px;
  width: 184px;
  height: 47px;
  font-size: 14px;
  letter-spacing: 2px;
  padding: 0;
  font-weight: 800;
`
