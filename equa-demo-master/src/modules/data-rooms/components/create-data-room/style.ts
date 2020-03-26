import styled from 'styled-components'
import { colors } from '../../../../shared/styles/theme'
import { Field, FieldArray } from 'formik'

export const FormContainer = styled.div`
  padding-top: 90px;
  padding-bottom: 200px;
  width: 600px;
  margin: 0 auto;
`

export const CeateDataRoom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 70px;
  

  @media (max-width: 700px){
    flex-direction: column;
    align-items: center;
  }
`



export const FormFieldContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const RelativeField = styled.div`
  position: relative;
`

export const UploadCsv = styled.div`
  font-family: Bold;
  color: ${colors.green};
  font-size: 16px;
  position: absolute;
  right: -190px;
  top: 50%;
  transform: translateX(-50%);
  cursor: pointer;
`

export const FormInputLabel = styled.label`
  font-size: 16px;
  font-family: Regular;
  color: rgba(255, 255, 255, 0.5);
  text-transform: capitalize;
`

export const FormTextInput = styled(Field)`
  background: ${colors.white};
  padding: 12px 0px 10px 16px;
  font-size: 18px;
  font-family: Regular;
  color: #3e3e3e;
`

export const NewMemberForm = styled.div`
  padding-top: 10px
`

export const AccessText = styled.div`
  padding: 52px 0 48px 0;
  font-size: 24px;
  font-family: Light;
  color: ${colors.white};
`

export const FormButton = styled.button<any>`
  padding: 18px 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props: any) => (props.btnColorType === 1 ? `${colors.green}` : `#2C3E50`)};
  border-radius: 2px;
  font-family: Bold;
  border: 0;
  font-size: 14px;
  letter-spacing: 2px;
  color: ${colors.white};
  text-transform: uppercase;
  cursor: pointer;
`

export const FormErrorMSg = styled.div`
  color: ${colors.red};
  font-size: 12px;
  font-family: Bold;
  padding-top: 15px;
`

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  margin: 24px 0px;
  background: rgba(255, 255, 255, 0.2);
`

export const NewMemText = styled.div`
  font-size: 24px;
  font-family: Light;
  color: ${colors.white};
  text-transform: capitalize;
`

export const TwoField = styled.div`
  display: flex;
  justify-content: space-between;
`

export const TwoFieldContent = styled.div`
  width: 45%;
`

export const BtnContainer = styled.div`
  display: flex;
  margin-top: 20px;

  button:nth-child(2) {
    margin-left: 15px;
  }
`

export const MemberList = styled(FieldArray)`
  display: flex;
  flex-direction: column;
`

export const AddAnotherMember = styled.div`
  font-size: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${colors.white};
  font-family: Regular;
  padding: 0px 30px;
  cursor: pointer;
`

export const UploadDocText = styled.div`
  padding: 60px 0px 48px 0px;
  font-size: 24px;
  color: ${colors.white};
  text-transform: capitalize;
  font-family: Light;
`

export const ClickToUpload = styled.div`
  display: flex;
  align-items: center;
  padding-top: 54px;
  cursor: pointer;

  span {
    margin-left: 15px;
    color: ${colors.white};
    font-size: 16px;
    font-family: Regular;
  }
`

export const MemberWrapper = styled.div`
  margin: 15px 0px 5px 0px;
`

export const MemberContainer = styled.div`
  margin-bottom: 15px;
`

export const MemberName = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${colors.white};
  font-size: 18px;
  font-family: Regular;
`

export const MemberEditBtns = styled.div`
  width: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    cursor: pointer;
  }
`

export const MemberRole = styled.div`
  padding: 7px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  color: ${colors.white};
  font-family: Light;
  border-radius: 2px;
  background: rgba(255, 255, 255, 0.2);
`

export const MemberRoles = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0px 10px 0;

  img {
    margin-left: 7px;
    cursor: pointer;
  }

  ${MemberRole}:not (:first-child) {
    margin-left: 10px;
  }
`
