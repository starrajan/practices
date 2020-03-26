import styled from 'styled-components'
import { colors, screenSizes } from '../../shared/styles/theme'
import BannerImage from '../../assets/image/bg.png'
import { rgba } from 'polished'
import { Button } from '../../shared/components/button'

export const DocContainer = styled.div``

export const UploadButton = styled(Button)`
  position: absolute;
  right: 0;
  top: 0;
  margin-top: 20px;
`

export const LabelGroup = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`
export const LabelButton = styled.label`
  float: left;
  cursor: pointer;
  margin-right: 20px;
  font-family: Regular;
  svg {
    fill: ${colors.white};
    height: 16px;
  }
  display: flex;
  align-items: center;

  img {
    margin-right: 10px;
  }
`

export const FolderModal = styled.div`
  section,
  form {
    width: 80%;
  }
  h2 {
    margin-bottom: 30px;
  }
  button {
    float: right;
    margin: 20px 0 !important;
  }
`

export const Paragraph = styled.p`
  color: ${colors.white};
  text-align: left;
  font-size: 0.9em;
  border-bottom: ${colors.grey};
`

export const DocumentsOuterContainer = styled.div`
  position: relative;
  padding-bottom: 300px;
  hr {
    height: 1px;
    margin: 0 -30px;
  }
  label {
    color: ${colors.white};
  }
`

export const BtnCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const DocUploadComplete = styled(Button)`
  width: 328px;
  height: 52px;
  border-radius: 4px;
  font-weight: 800;
  font-size: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 14px 0;
  color: #ffffff;
  box-sizing: border-box;
`

export const Container = styled.div`
  width: 90%;
  max-width: 1264px;
  margin: 0 auto;
`

export const Heading = styled.div`
  padding-top: 80px;
`

export const HorizonntalLine = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
`

export const FolderContainer = styled.div`
  padding-top: 30px;
  color: rgba(255, 255, 255, 0.87);
`

export const FolderContainerText = styled.div`
  font-family: Regular;
`
export const TableContainer = styled.div`
  width: 100%;
  margin-top: 38px;
  overflow-x: auto;
`
export const FolderTable = styled.table`
  width: 1264px;
  table-layout: fixed;

  thead tr th {
    text-transform: uppercase;
    color: white;
    font-family: Bold;
    font-size: 15px;
    padding: 18px 22px;
  }

  thead tr {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  tbody tr td {
    padding: 18px 22px;
    font-family: Regular;
  }

  tbody:before {
    content: '-';
    display: block;
    line-height: 18px;
    color: transparent;
  }

  tbody tr:nth-child(odd) {
    background: rgba(255, 255, 255, 0.03);

    td:first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }

    td:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
`

export const FileName = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  img {
    margin-right: 24px;
  }
`

export const AddFolderForm = styled.form`
  width: 600px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  box-sizing: border-box;
  font-family: Regular;

  input {
    margin-top: 20px;
    border: 1px solid #1c1c1c;
    border-radius: 2px;
    width: 100%;
    font-size: 18px;
    color: #3e3e3e;
    padding: 15px 15px 12px 15px;
    background: #ffffff;
    border: 1px solid #898989;
    font-family: Regular;
  }

  @media (max-width: 650px) {
    width: 100%;
  }

  button {
    width: 150px;
    height: 55px;
    padding: 18px 36px;
    text-align: center;
    font-weight: 800;
    font-size: 14px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #ffffff;
    border-radius: 2px;
    border: 0;
    font-family: Regular;
  }
`

export const BtnContainer = styled.div`
  width: 350px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 40px;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding-top: 0;
    button {
      margin-top: 20px;
    }
  }
`

export const ConfirmBtn = styled.button`
  background: #33bb40;
`

export const CancelBtn = styled.button`
  background: #394e5b;
`

export const FolderNameTd = styled.td`
  cursor: pointer;
`

export const NoFilesContainer = styled.label`
  padding: 110px 0;
  display: flex;
  justify-content: center;
  background: rgba(2, 22, 15, 0.09);
  border: 2px dashed #5a6872;
  box-sizing: border-box;
  margin-top: 50px;
`

export const ModalHeader = styled.div`
  padding: 8px 0px 23px 0;
  font-size: 44px;
  text-align: center;
  font-weight: 300;
  color: #3e3e3e;
`

export const ModalFormDesc = styled.div`
  text-align: center;
  text-align: center;
  font-weight: 300;
  color: #3e3e3e;
  font-size: 16px;
  padding-bottom: 30px;
`

export const DocPath = styled.div`
  color: ${colors.white};
  text-align: start;
  font-size: 1.7em;
  font-family: Bold;
`
