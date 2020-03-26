import styled from 'styled-components'
import { colors } from '../../../../shared/styles/theme'

// import { CSVLink } from 'react-csv'

interface csvModalProps {
  showModal: boolean
}
export const CsvModal = styled.div<csvModalProps>`
  display: ${props => (props.showModal ? 'block' : 'none')};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.6);
`

export const CsvModalBody = styled.div`
  background-color: ${colors.white};
  margin: 0 auto;
  width: 778px;
  height: 540px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-y: auto;
`
export const CsvContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`
export const CsvUploadCancel = styled.div<any>`
  width: 100%;
  display: flex;
`
export const CsvCancelSymbol = styled.div`
  cursor: pointer;
  margin-left: auto;
  color: #1d1f20;
`
export const CsvHeadText = styled.div`
  font-size: 40px;
  line-height: 55px;
  text-align: center;
  color: #30424d;
  margin-top: 34px;
`
export const CsvUploadBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 76px;
`
export const CsvUploadImg = styled.img`
  width: 427px;
  height: 183px;
`
export const CsvUploadLabel = styled.label`
  cursor: pointer;
`
// export const DownLoadCsv = styled(CSVLink)`
//   background: transparent;
//   margin-top: 26px;
//   cursor: pointer;
//   color: #33bb40;
// `
export const DownLoadCsvText = styled.div`
  font-size: 16px;
  line-height:19px;
  text-decoration-line: underline;
  text-underline-position: under;
`
export const CsvFileBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 146px;
  max-width: 634px;
  max-height: 64px;
`
export const CsvCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 64px;
  min-height: 64px;
  background: #ffffff;
  border: 3px solid #33bb40;
  border-radius: 50%;
  color: #33bb40;
  font-size: 16px;
  font-weight: bold;
`
export const CsvFile = styled.div`
  margin-left: 18px;
  font-size: 16px;
  line-height: 22px;
  color: #30424d;
`
export const DeleteCsvFile = styled.div`
  cursor: pointer;
  margin-left: 50px;
`

export const ProgressBarContainer = styled.div`
  background: #979797;
  min-width: 481px;
  height: 10px;
  border-radius: 5px;
  margin-top: 3px;
`
interface progressInterface {
  color: string
  width: any
}
export const ProgressDiv = styled.div<progressInterface>`
  background: ${props => (props.color ? props.color : '#30424D')};
  width: ${props => props.width + '%'};
  height: 10px;
  border-radius: 5px;
`
export const UploadingPercentage = styled.div<any>`
  font-size: 16px;
  line-height: 22px;
  font-weight: bold;
  color: #979797;
  margin-top: 7px;
`
export const DropZoneDiv = styled.div`
  outline: 'none';
`
