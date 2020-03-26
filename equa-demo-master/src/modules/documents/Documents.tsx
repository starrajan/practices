import * as React from 'react'
import Dropzone from 'react-dropzone'
import CustomModal from '../../shared/custom-modal'
import { useEffect, useState } from 'react'
import { CenterContainer, StyledH2 } from '../../shared/styles/styled'
import {
  DocumentsOuterContainer,
  FolderModal,
  LabelButton,
  LabelGroup,
  Paragraph,
  BtnCont,
  DocUploadComplete,
  Container,
  Heading,
  HorizonntalLine,
  FolderContainer,
  TableContainer,
  FolderTable,
  FileName,
  AddFolderForm,
  FolderNameTd,
  NoFilesContainer,
  ModalHeader,
  ModalFormDesc,
  BtnContainer,
  ConfirmBtn,
  CancelBtn,
  DocPath,
  FolderContainerText
} from './style'
import { connect } from 'react-redux'
// import {
//   CurrentOrganizationDispatch,
//   displayToast,
//   DisplayToastDispatch,
//   DocumentRecord,
//   GetDriveIdDispatch,
//   Organization,
//   OrganizationError,
//   OrganizationState,
//   Service,
//   User,
//   markTaskComplete,
//   MarkTaskCompleteDispatch,
// } from '@logic'
import { withRouter, RouteComponentProps } from 'react-router'
// import { ServiceContext } from '@modules/app/app'
import { Button } from '../../shared/components/button'
// import DocumentSection from './components/document-section'
// import Loading from 'react-loading'
import Close from '../../assets/image/close.svg'
// import { ModalCloseButton } from '@components/modal/style'
import { Form, Field } from 'react-final-form'
// import Input from '../../shared/components/'
// import Timeline from '@components/progressBar'
// import { required } from '@helpers/field-validators'
import FileUploadIcon from '../../assets/image/file-upload.svg'
import FolderUploadIcon from '../../assets/image/folder-upload.svg'
import { History } from 'history'
// import { Paths } from '@logic'
// import { BuiltInPermission } from '@helpers/constants'
import FolderIcon from '../../assets/image/folder-icon.png'
import PdfIcon from '../../assets/image/pdf-file-icon.png'
import WordIcon from '../../assets/image/word-file-icon.png'
import UploadIcon from '../../assets/image/upload-icon.png'
import NoFilesOrFolder from '../../assets/image/no-files.png'

interface Props extends RouteComponentProps<any> {
  //   getDriveId: GetDriveIdDispatch
  //   getCurrentOrganization: CurrentOrganizationDispatch
  //   markTaskComplete: MarkTaskCompleteDispatch
  //   displayToast: DisplayToastDispatch
  //   service: Service
  history: History
}

interface StateProps {
  //   user: User
  //   currentOrganization: Organization
  //   organizationError?: OrganizationError
  //   organization?: OrganizationState
  onBoarding: any
}

declare module 'react' {
  interface HTMLAttributes<T> {
    custom?: string
    directory?: string
    webkitdirectory?: string
  }
}

function Documents(props: Props & StateProps) {
  //   const { currentOrganization, service, user } = props
  //   const [documents, setDocuments] = useState<DocumentRecord[] | undefined>(undefined)
  const [folderModal, setFolderModal] = useState<boolean>(false)
  const [percentage, setPercentage] = useState<number | undefined>(undefined)
  const [loaded, setLoaded] = useState<boolean>(false)
  const [path, setPath] = useState<string[]>([])
  const [permissions, setPermissions] = useState<any[]>([])
  const [paths, setPaths] = useState(['Documents'])
  const [documents, setDocuments] = useState([
    {
      name: 'Governmental',
      docType: 1,
      dateUploaded: '2019/5/19',
      size: '234KB',
      updatedBy: 'Ann Jurek',
      path: ['Governmental'],
      files: [
        {
          name: 'Example Document.pdf',
          docType: 2,
          dateUploaded: '2014/5/20',
          size: '14KB',
          updatedBy: 'Ann Jurek',
        },
        {
          name: 'Example Word.docx',
          docType: 3,
          dateUploaded: '2018/1/21',
          size: '4KB',
          updatedBy: 'Ann Jurek',
        },
      ],
    },
    {
      name: 'Owners',
      docType: 1,
      dateUploaded: '2018/6/18',
      size: '34KB',
      updatedBy: 'Ann Jurek',
      path: ['Owners'],
      files: [],
    },
    {
      name: 'Vendors',
      docType: 1,
      dateUploaded: '2017/7/17',
      size: '134KB',
      updatedBy: 'Ann Jurek',
      path: ['Vendors'],
      files: [],
    },
    {
      name: 'Employees',
      docType: 1,
      dateUploaded: '2016/8/20',
      size: '334KB',
      updatedBy: 'Ann Jurek',
      path: ['Employees'],
      files: [],
    },
    {
      name: 'Customers',
      docType: 1,
      dateUploaded: '2015/4/21',
      size: '24KB',
      updatedBy: 'Ann Jurek',
      path: ['Customers'],
      files: [],
    },
    {
      name: 'Example Document.pdf',
      docType: 2,
      dateUploaded: '2014/5/20',
      size: '14KB',
      updatedBy: 'Ann Jurek',
    },
    {
      name: 'Example Word.docx',
      docType: 3,
      dateUploaded: '2018/1/21',
      size: '4KB',
      updatedBy: 'Ann Jurek',
    },
  ])

  const [renderDocs, setRenderDocs] = useState(documents)
  const initialDocs = documents

  const toggleModal = () => {
    setFolderModal(!folderModal)
  }

  const getDocuments = async () => {
    setLoaded(false)
    // if (currentOrganization) {
    //   return service.getOrganizationDocuments(currentOrganization.id, path.join('/'))
    // }
  }

  //   const setDocumentsAndLoaded = (documents: DocumentRecord[] | undefined) => {
  //     setDocuments(documents)
  //     setLoaded(true)
  //   }

  //   useEffect(() => {
  //     ;(async () => {
  //       setPath([])
  //       const result = (await service.getOrganizationPermission(currentOrganization.id, user.id)) as any
  //       setPermissions(result.permissions)
  //     })()
  //   }, [currentOrganization])

  useEffect(() => {
    let mounted = true
    ;(async () => {
      const documents = await getDocuments()
      if (mounted) {
        // setDocumentsAndLoaded(documents)
      }
    })()
    return () => {
      mounted = false
    }
  }, [path])

  const uploadDocuments = async (files: any) => {
    const onUploadProgress = (event: any) => {
      if (event.lengthComputable) {
        const percentages = +((event.loaded / event.total) * 100).toFixed(2)
        setPercentage(percentages)
      }
    }
    // await service.uploadOrganizationDocuments(files, currentOrganization.id, path.join('/'), onUploadProgress)
    setPercentage(undefined)
    const documents = await getDocuments()
    // setDocumentsAndLoaded(documents)
  }

  console.log('documents ', documents)

  const renderPath = () => {
    const all = ['Documents'].concat(path)
    const links = all.slice(0, -1) // Every token except the last
    const last = all[all.length - 1]
    return (
      <div>
        {links.map((t, i) => (
          <span key={i}>
            <a
              href={''}
              onClick={e => {
                e.preventDefault()
                if(t === 'Documents'){
                  console.log('found ', initialDocs)
                  setRenderDocs(initialDocs)
                }
                console.log('hello', t)
                setPath(path.slice(0, i))
              }}
            >
              {t}
            </a>
            <span> > </span>
          </span>
        ))}
        <span>{last}</span>
      </div>
    )
  }

  //   const markDocUploadComplete = async () => {
  //     await props.markTaskComplete({
  //       orgId: props.match.params.organizationId,
  //       type: props.onBoarding[1].type,
  //       id: props.onBoarding[1].id,
  //     })

  //     props.history.push(`${Paths.clientStartup}/${props.match.params.organizationId}`)
  //   }

  const renderDocumentUploadBtn = () => {
    if (loaded) {
      const { onBoarding } = props
      if (!!onBoarding && onBoarding[1] && onBoarding[1].status === 2) {
        return <DocUploadComplete>Document Upload Complete</DocUploadComplete>
      }
    }
    return null
  }

  const renderIcon = (docType: number) => {
    switch (docType) {
      case 1:
        return <img src={FolderIcon} alt="FolderIcon" />
      case 2:
        return <img src={PdfIcon} alt="PdfIcon" />
      case 3:
        return <img src={WordIcon} alt="WordIcon" />
      default:
        return null
    }
  }

  const openFolder = (document: any) => {
    const { files } = document
    if (files) {
      setRenderDocs(files)
      setPath([...path, document.path])
    }
  }

  const renderFolderAndFiles = () => {
    console.log('renderFolderAndFiles renderDocs ', renderDocs)
    if (renderDocs.length) {
      return (
        <FolderContainer>
          <FolderContainerText>
            Upload all your files in once place for everyone in your organization to see and share. No more digging around to find important
            files, EQUA Document Manager will keep your document sharing and organization simplified!
          </FolderContainerText>
          <TableContainer>
            <FolderTable>
              <thead>
                <tr>
                  <th>name</th>
                  <th>date uploaded</th>
                  <th>updated by</th>
                  <th>size</th>
                </tr>
              </thead>
              <tbody>
                {renderDocs.map((v, k) => (
                  <tr key={k}>
                    <FolderNameTd onClick={() => openFolder(v)}>
                      <FileName>
                        {renderIcon(v.docType)}
                        {v.name}
                      </FileName>
                    </FolderNameTd>
                    <td>{v.dateUploaded}</td>
                    <td>{v.updatedBy}</td>
                    <td>{v.size}</td>
                  </tr>
                ))}
              </tbody>
            </FolderTable>
          </TableContainer>
        </FolderContainer>
      )
    }

    return (
      <Dropzone
        onDrop={async (files: any) => {
          const file = files[0]
          setRenderDocs([
            ...renderDocs,
            {
              name: file.name,
              docType: 3,
              dateUploaded: '2018/1/21',
              size: '4KB',
              updatedBy: 'Ann Jurek',
            },
          ])
        }}
      >
        {({ getInputProps }) => (
          <>
            {/*  <LabelButton>
                  
                  <img src={UploadIcon} alt="UploadIcon" />
                  Upload
                </LabelButton> */}
            <NoFilesContainer>
              <input {...getInputProps()} type="file" />
              <img src={NoFilesOrFolder} alt="NoFilesOrFolder" />
            </NoFilesContainer>
          </>
        )}
      </Dropzone>
    )
  }

  return (
    <DocumentsOuterContainer>
      <Container>
        <Heading>
          <BtnCont>
            <DocPath>{renderPath()}</DocPath>
            {renderDocumentUploadBtn()}
          </BtnCont>
        </Heading>

        <LabelGroup>
          <LabelButton onClick={() => setFolderModal(true)}>+ New</LabelButton>
          <Dropzone
            onDrop={async (files: any) => {
              const file = files[0]
              setRenderDocs([
                ...renderDocs,
                {
                  name: file.name,
                  docType: 3,
                  dateUploaded: '2018/1/21',
                  size: '4KB',
                  updatedBy: 'Ann Jurek',
                },
              ])
            }}
          >
            {({ getInputProps }) => (
              <>
                <LabelButton>
                  <input {...getInputProps()} type="file" />
                  <img src={UploadIcon} alt="UploadIcon" />
                  Upload
                </LabelButton>
              </>
            )}
          </Dropzone>
        </LabelGroup>
      </Container>
      <HorizonntalLine />
      <Container>{renderFolderAndFiles()}</Container>

      <CustomModal show={folderModal} toggleModal={toggleModal}>
        <Form
          onSubmit={async values => {
            const { folderName } = values
            if (!!folderName) {
              setRenderDocs([
                ...renderDocs,
                {
                  name: folderName,
                  docType: 1,
                  dateUploaded: '2016/8/20',
                  size: '334KB',
                  updatedBy: 'Ann Jurek',
                  files: [],
                  path: [folderName],
                },
              ])
              toggleModal()
            }
          }}
          render={({ handleSubmit, invalid, form }) => (
            <AddFolderForm
              onSubmit={e => {
                e.preventDefault()
                handleSubmit()
                setTimeout(() => {
                  form.reset()
                })
              }}
            >
              <ModalHeader>Create A New Folder</ModalHeader>
              <ModalFormDesc>Please enter a name for the folder:</ModalFormDesc>
              <Field name="folderName" component="input" />
              <BtnContainer>
                <ConfirmBtn disabled={invalid} type="submit">
                  CONFIRM
                </ConfirmBtn>
                <CancelBtn
                  type="button"
                  onClick={() => {
                    form.reset()
                    toggleModal()
                  }}
                >
                  CANCEL
                </CancelBtn>
              </BtnContainer>
            </AddFolderForm>
          )}
        />
      </CustomModal>
    </DocumentsOuterContainer>
  )
}

// export const DocumentsWithService = (props: Props & StateProps) => (
//   <ServiceContext.Consumer>{service => <Documents {...props} service={service} />}</ServiceContext.Consumer>
// )

{
  /* <Timeline percentage={percentage} /> */
}

const mapStateToProps = (state: any) => {
  return {
    user: state.user,
    organizationError: state.organization!.organizationError,
    currentOrganization: state.organization!.currentOrganization,
    onBoarding: state.startupScreen.onBoarding,
  }
}

export default Documents
