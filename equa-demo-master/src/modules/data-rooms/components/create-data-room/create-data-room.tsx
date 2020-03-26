import * as React from 'react'
import { Container, DataRoomHeading, HeadingText } from '../../style'
import BackArrow from '../../../../assets/image/arrow.png'
import ClickToUploadIcon from '../../../../assets/image/click-to-upload.png'
import EditSign from '../../../../assets/image/edit-sign.png'
import DeleteSign from '../../../../assets/image/delete-sign.png'
import DeleteSign2 from '../../../../assets/image/delete-sign2.png'
import history from '../../../app/components/history'
import {
  FormContainer,
  FormInputLabel,
  FormTextInput,
  FormFieldContainer,
  AccessText,
  FormButton,
  FormErrorMSg,
  Divider,
  NewMemText,
  TwoField,
  TwoFieldContent,
  BtnContainer,
  MemberList,
  AddAnotherMember,
  UploadDocText,
  ClickToUpload,
  MemberContainer,
  MemberEditBtns,
  MemberName,
  MemberWrapper,
  MemberRoles,
  MemberRole,
  UploadCsv,
  RelativeField,
  NewMemberForm,
  CeateDataRoom
} from './style'
import Select from 'react-select'
import { Formik, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import CustomModal from '../../../../shared/custom-modal'
import UploadDocs from '../upload-docs'
const { useState } = React

const CreateDataRoom = () => {
  const [showForm, setShowForm] = useState(false)
  const [open, setOpen] = useState(false)

  const selectStyles = {
    control: (styles: any) => ({ ...styles, backgroundColor: 'white', padding: '8px 0px 6px 16px', borderRadius: 0 }),
  }

  const options = [
    { value: 'Linda Hart', label: 'Linda Hart' },
    { value: 'Dr. Froggy McPond II', label: 'Dr. Froggy McPond II' },
    { value: 'Andrea Stevens', label: 'Andrea Stevens' },
    { value: 'Mike Johnson', label: 'Mike Johnson' },
  ]

  const roles = [
    { label: 'Member A', value: 'memberA' },
    { label: 'Member B', value: 'memberB' },
    { label: 'Manager', value: 'manager' },
    { label: 'Legal', value: 'legal' },
    { label: 'Admin', value: 'admin' },
    { label: 'Advisor', value: 'advisor' },
    { label: 'Signatory', value: 'signatory' },
  ]

  const toggleModal = () => {
    setOpen(!open)
  }

  const handleArrowClick = () => {
    history.goBack()
  }

  const renderMemberRoles = (titles: any) => {
    if (titles.length) {
      return (
        <MemberRoles>
          {titles.map((v: any, k: any) => (
            <MemberRole key={k}>
              {v.label}
              <img src={DeleteSign2} alt="DeleteSign2" />
            </MemberRole>
          ))}
        </MemberRoles>
      )
    }

    return null
  }

  const renderMember = (members: any, arrayHelpers: any) => {
    console.log('members ', members)

    const membersToRender = members.slice(0, members.length - 1)
    console.log('membersToRender ', membersToRender)

    if (membersToRender.length) {
      return (
        <MemberWrapper>
          {membersToRender.map((v: any, k: any) => (
            <MemberContainer key={k}>
              <MemberName>
                <span>{`${v.firstName} ${v.lastName}`}</span>
                <MemberEditBtns>
                  <img src={EditSign} alt="EditSign" />
                  <img
                    src={DeleteSign}
                    alt="DeleteSign"
                    onClick={() => {
                      arrayHelpers.remove(k)
                    }}
                  />
                </MemberEditBtns>
              </MemberName>
              {renderMemberRoles(v.title)}
            </MemberContainer>
          ))}
        </MemberWrapper>
      )

    }

    return null
  }

  const renderAddNewMemberForm = (arrayHelpers: any, members: any, setFieldValue: any) => {
    const index = members.length - 1
    if (showForm) {
      return (
        <NewMemberForm>
          <TwoField>
            <TwoFieldContent>
              <FormFieldContainer>
                <FormInputLabel htmlFor={`members[${index}].firstName`}>first name</FormInputLabel>
                <FormTextInput name={`members[${index}].firstName`} type="text" />
                <FormErrorMSg>
                  <ErrorMessage name={`members[${index}].firstName`} />
                </FormErrorMSg>
              </FormFieldContainer>
            </TwoFieldContent>

            <TwoFieldContent>
              <FormFieldContainer>
                <FormInputLabel htmlFor={`members[${index}].lastName`}>last name</FormInputLabel>
                <FormTextInput name={`members[${index}].lastName`} type="text" />
                <FormErrorMSg>
                  <ErrorMessage name={`members[${index}].lastName`} />
                </FormErrorMSg>
              </FormFieldContainer>
            </TwoFieldContent>
          </TwoField>

          <FormFieldContainer>
            <FormInputLabel htmlFor={`members[${index}].title`}>title</FormInputLabel>
            <Select
              onChange={selected => setFieldValue(`members[${index}].title`, selected)}
              options={roles}
              placeholder={'Select Title'}
              isMulti
              styles={selectStyles}
            />
            <FormErrorMSg>
              <ErrorMessage name={`members[${index}].title`} />
            </FormErrorMSg>
          </FormFieldContainer>

          <FormFieldContainer>
            <FormInputLabel htmlFor={`members[${index}].email`}>email</FormInputLabel>
            <FormTextInput name={`members[${index}].email`} type="text" />
            <FormErrorMSg>
              <ErrorMessage name={`members[${index}].email`} />
            </FormErrorMSg>
          </FormFieldContainer>

          <BtnContainer>
            <FormButton
              type="button"
              btnColorType={1}
              onClick={() => {
                setShowForm(false)
                arrayHelpers.push({ firstName: '', lastName: '', title: '', email: '' })
              }}
            >
              Save
            </FormButton>

            <FormButton type="button" onClick={() => setShowForm(false)} btnColorType={2}>
              cancel
            </FormButton>
          </BtnContainer>
        </NewMemberForm>
      )
    }

    return null
  }

  return (
    <Container>
      <CeateDataRoom>
        <HeadingText>
          <div onClick={handleArrowClick}>
            <img src={BackArrow} alt="BackArrow" />
          </div>
          Create Data Room
        </HeadingText>
      </CeateDataRoom>
      <FormContainer>
        <Formik
          initialValues={{
            name: '',
            accessTo: [],
            members: [
              {
                firstName: '',
                lastName: '',
                title: '',
                email: '',
              },
            ],
          }}
          onSubmit={(values: any) => {
            console.log('values ', values)
          }}
          validationSchema={Yup.object({
            name: Yup.string().required('Enter Name'),
            accessTo: Yup.array().required('Enter Access To'),
            members: Yup.array().of(
              Yup.object({
                firstName: Yup.string(),
                lastName: Yup.string(),
                email: Yup.string(),
                title: Yup.string(),
              })
            ),
          })}
          render={({ values, setFieldValue }) => (
            <Form>
              <FormFieldContainer>
                <FormInputLabel htmlFor="name">name</FormInputLabel>
                <FormTextInput name="name" type="text" />
                <FormErrorMSg>
                  <ErrorMessage name="name" />
                </FormErrorMSg>
              </FormFieldContainer>
              <AccessText>Access</AccessText>
              <RelativeField>
                <FormFieldContainer>
                  <FormInputLabel htmlFor="accessTo">give access to</FormInputLabel>
                  <Select onChange={selected => setFieldValue('accessTo', selected)} options={options} isMulti styles={selectStyles} />
                  <FormErrorMSg>
                    <ErrorMessage name="accessTo" />
                  </FormErrorMSg>
                  <UploadCsv>Upload CSV</UploadCsv>
                </FormFieldContainer>
              </RelativeField>

              <Divider />

              <NewMemText>or add new member</NewMemText>

              <MemberList
                name="members"
                render={arrayHelpers => {
                  const { members } = values

                  return (
                    <>
                      {renderMember(members, arrayHelpers)}

                      <Divider />
                      <AddAnotherMember onClick={() => setShowForm(!showForm)}>+ add another member</AddAnotherMember>

                      {renderAddNewMemberForm(arrayHelpers, members, setFieldValue)}
                    </>
                  )
                }}
              />

              <UploadDocText>
                upload documents
                <ClickToUpload onClick={() => setOpen(true)}>
                  <img src={ClickToUploadIcon} alt="ClickToUpload" />
                  <span>Click to upload</span>
                </ClickToUpload>
              </UploadDocText>

              <FormButton type="submit" btnColorType={1}>
                Finish
              </FormButton>
            </Form>
          )}
        />
      </FormContainer>
      <CustomModal show={open} toggleModal={toggleModal}>
        <UploadDocs toggleModal={toggleModal} />
      </CustomModal>
    </Container>
  )
}

export default CreateDataRoom
