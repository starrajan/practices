import * as React from 'react'
import uploadCsvImg from '@image/uploadCsvImg.png'
import { useState } from 'react'
// import Dropzone from 'react-dropzone'
// import cancelButton from '@image/cancel-button.png'
// import DeleteCsvSym from '@image/light-cancel-button.png'
import { connect } from 'react-redux'
// import { uploadTeamMemberCsv, UploadTeamMemberCsvDispatch, getTeamMemberList, GetTeamMemberListDispatch } from '@logic'
import {
  CsvModal,
  CsvModalBody,
  CsvContent,
  CsvHeadText,
  CsvUploadImg,
  CsvUploadLabel,
  // DownLoadCsv,
  DownLoadCsvText,
  CsvUploadCancel,
  CsvCancelSymbol,
  CsvUploadBox,
  CsvFileBox,
  CsvCircle,
  CsvFile,
  DeleteCsvFile,
  ProgressBarContainer,
  ProgressDiv,
  UploadingPercentage,
  DropZoneDiv,
} from './style'

interface Props {
  showModal: boolean
  setShowModal: any
  orgId: any
}
interface StateProps {
  uploadCsvResponse: any
  // getTeamMemberList: GetTeamMemberListDispatch
  // uploadTeamMemberCsv: UploadTeamMemberCsvDispatch
}

function UploadCsv(props: Props & StateProps) {
  const { showModal, setShowModal } = props
  const [file, setFile] = useState()
  const [fileRejected, setFileRejected] = useState(false)
  const [fileAccepted, setFileAccepted] = useState(false)
  const [fileUploading, setFileUpLoading] = useState(false)
  const [progressPercentage, setProgressPercentage] = useState(0)

  const handlePercentage = (progress: number) => {
    const interval = setInterval(() => {
      progress = progress + 1
      setProgressPercentage(progress)
    }, 10)
    setTimeout(() => {
      progress = 0
      clearInterval(interval)
    }, 1000)
  }
  const handleDeleteCsvFile = () => {
    // setFile(null)
    setFileRejected(false)
    setFileAccepted(false)
    setFileUpLoading(false)
    setProgressPercentage(0)
  }
  const handleOnDrop = (acceptedFiles: any) => {
    setFile(acceptedFiles[0])
    setFileUpLoading(true)
  }
  const handleOnRejected = (acceptedFiles: any) => {
    setFile(acceptedFiles[0])
    setFileUpLoading(false)
    setFileRejected(true)
    setProgressPercentage(100)
  }
  const handleAcceptedFile = async (acceptedFiles: any) => {
    setFile(acceptedFiles[0])
    setFileUpLoading(false)
    setFileRejected(false)
    setFileAccepted(true)
    handlePercentage(progressPercentage)

    let data = new FormData()
    data.append('file', acceptedFiles[0])
    let csvData: any = { organization: props.orgId, file: acceptedFiles[0] }
    // await props.uploadTeamMemberCsv(csvData)
    // props.getTeamMemberList(props.orgId)
    // setFile(null)
    setShowModal(false)
  }
  const csvHeaders = [
    { label: 'Full_Name', key: 'fullname' },
    { label: 'Email', key: 'email' },
    { label: 'Title', key: 'title' },
    { label: 'Date_of_Birth', key: 'dob' },
    { label: 'Country', key: 'country' },
    { label: 'Province', key: 'province' },
    { label: 'Street', key: 'street1' },
    { label: 'City', key: 'city' },
    { label: 'Postal_Code', key: 'postalCode' },
  ]
  const csvData = [
    {
      fullname: 'Aalia Romero',
      email: 'aalia.romero@gmail.com',
      title: 'CEO',
      dob: '10/10/2019',
      country: 'USA',
      province: 'ID',
      street1: '123 3rd St',
      city: 'Post Falls',
      postalCode: '83854',
    },
  ]
  return (
    <>
      <CsvModal showModal={showModal}>
        <CsvModalBody>
          <CsvContent>
            <CsvUploadCancel>
              <CsvCancelSymbol onClick={() => setShowModal()}>
                {/* <img src={cancelButton} /> */}
              </CsvCancelSymbol>
            </CsvUploadCancel>
            <CsvHeadText>Upload Team Member CSV</CsvHeadText>
            {/* {!file ? (
              <CsvUploadBox>
                <div>
                  <Dropzone
                    onDrop={handleOnDrop}
                    accept=".csv"
                    onDropRejected={handleOnRejected}
                    onDropAccepted={handleAcceptedFile}
                    preventDropOnDocument={true}
                  >
                    {({ getRootProps, getInputProps }) => (
                      <DropZoneDiv {...getRootProps()} style={{ outline: 'none' }}>
                        <CsvUploadLabel htmlFor="csvUpload">
                          <CsvUploadImg src={uploadCsvImg} />
                        </CsvUploadLabel>
                        <input {...getInputProps()} />
                      </DropZoneDiv>
                    )}
                  </Dropzone>
                </div>
                <DownLoadCsv filename={'upload_team_members_example.csv'} data={csvData} headers={csvHeaders} target="_blank">
                  <DownLoadCsvText>Click here to download the team members CSV template</DownLoadCsvText>
                </DownLoadCsv>
              </CsvUploadBox>
            ) : (
              <CsvFileStatus
                file={file}
                progressPercentage={progressPercentage}
                fileRejected={fileRejected}
                fileUploading={fileUploading}
                fileAccepted={fileAccepted}
                handleDeleteCsvFile={handleDeleteCsvFile}
              />
            )} */}
          </CsvContent>
        </CsvModalBody>
      </CsvModal>
    </>
  )
}

const CsvFileStatus = (props: any) => {
  const { file, progressPercentage, fileRejected, handleDeleteCsvFile } = props
  return (
    <CsvFileBox>
      <CsvCircle>CSV</CsvCircle>
      <CsvFile>
        {file.name}
        <ProgressBarContainer>
          <ProgressDiv width={progressPercentage} color={fileRejected ? 'red' : '#33BB40'}></ProgressDiv>
        </ProgressBarContainer>
        <UploadingPercentage>
          {fileRejected ? 'error :- incorrect file format' : 'Uploading... / ' + progressPercentage + '%'}
        </UploadingPercentage>
      </CsvFile>
      <DeleteCsvFile onClick={() => handleDeleteCsvFile()}>
        {/* <img src={DeleteCsvSym} /> */}
      </DeleteCsvFile>
    </CsvFileBox>
  )
}

const mapStateToProps = (state: any) => ({
  uploadCsvResponse: state.teamMember.uploadCsvResponse,
})
export default connect(
  mapStateToProps,
  // { uploadTeamMemberCsv, getTeamMemberList }
)(UploadCsv)
