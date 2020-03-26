import * as React from 'react'
import {
    ModalContainer,
    ModalHeading,
    Container,
    UploadDocContainer,
    SelectContainer,
    DocList,
    DocListItem,
    UploadLabel,
    DocIcon,
    DocInfoContainer,
    GreenBar,
    StatusText,
    DocName,
    BarContainer,
    BtnContainer,
    Buttons
} from './style'
import Dropzone from 'react-dropzone'
import UploadDocImg from '../../../../assets/image/upload-docs.png'
import Cross from '../../../../assets/image/cross-sign3.png'
const { useState } = React

interface Props{
    toggleModal: () => void
}

const UploadDocs = (props: Props) => {
    const [docs, setDocs] = useState([])

    const cancelUpload = () => {
        setDocs([])
        props.toggleModal()
    }

    const handleRemoveDoc = (name: string) =>{
        const newDocs = docs.filter((v: any) => {
            if(v.name !== name){
                return v
            }
        })

        setDocs(newDocs)
    }

    const renderDocs = () => {
        if(docs.length){
            return docs.map((v: any,k) => (
                <DocListItem key = {v.name}>
                    <div>
                        <DocIcon>
                            DOC
                        </DocIcon>
                    </div>
                    
                        <DocInfoContainer>
                            <DocName>{v.name}</DocName>
                            <BarContainer>
                                <GreenBar />   
                                <img src = {Cross} alt = 'Cross' onClick={() => handleRemoveDoc(v.name)}/> 
                            </BarContainer>
                            
                            <StatusText>Finished / 100% </StatusText>
                        </DocInfoContainer>
                    
                </DocListItem>
            ))
        }

        return null
    }
    return (
        <ModalContainer>
            <ModalHeading> Upload Document </ModalHeading>
            <Container>
                <UploadDocContainer>
                    <SelectContainer>
                        <select id="category" name="category">
                            <option value="Governmental">Governmental</option>
                            <option value="Owners">Owners</option>
                            <option value="Vendors">Vendors</option>
                            <option value="Employees">Employees</option>
                        </select>
                        <select id="dataRoom" name="dataRoom">
                            <option value="dataRoom1">Data Room 1</option>
                            <option value="dataRoom2">Data Room 2</option>
                            <option value="dataRoom3">Data Room 3</option>
                            <option value="dataRoom4">Data Room 4</option>
                        </select>
                    </SelectContainer>
                    <Dropzone
                        onDrop={async (files: any) => {
                            console.log('files, ', files)
                            setDocs(files)
                        }}
                    >
                        {({ getInputProps }) => (
                            <UploadLabel>
                                <input {...getInputProps()} type="file" />
                                <img src={UploadDocImg} alt='Upload doc' />
                            </UploadLabel>
                    
                        )}
                    </Dropzone>
                    
                </UploadDocContainer>
                <DocList>
                   {renderDocs()}
                </DocList>
                
            </Container>
            <BtnContainer>
                    <Buttons type={'1'}>UPLOAD</Buttons>
                    <Buttons type={'2'} onClick={cancelUpload}>CANCEL</Buttons>
                </BtnContainer>
        </ModalContainer>
    )
}

export default UploadDocs