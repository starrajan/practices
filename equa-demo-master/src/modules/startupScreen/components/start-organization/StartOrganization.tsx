import * as React from 'react'
import { Container, ButtonGroup, StartOrgBtn, OrgContent, HeadingText } from './style'
import CustomModal from '../../../../shared/custom-modal/CustomModal'
import CrossButtonHeader from '../../../../shared/custom-modal/components/crossBtnHeader'
import OrganizationIllustration from '../../../../assets/image/start-new-org-illustration.svg'
import history from '../../../app/components/history'
const StartOrganization = (props: any) => {
  const { showModal, setShowModal } = props

  const handleClick = (val: any) => {
    history.push(`/organization-${val}`)
  }
  return (
    <CustomModal show={showModal} toggleModal={setShowModal}>
      <Container>
        <CrossButtonHeader toggleModal={setShowModal} />
        <OrgContent>
          <HeadingText>Let us help you to create your new organization!</HeadingText>
          <img src={OrganizationIllustration} alt="" />
          <ButtonGroup>
            <StartOrgBtn
              onClick={() => {
                handleClick('create')
              }}
            >
              form new entity
            </StartOrgBtn>
            <StartOrgBtn
              onClick={() => {
                handleClick('import')
              }}
            >
              import/start existing organization
            </StartOrgBtn>
          </ButtonGroup>
        </OrgContent>
      </Container>
    </CustomModal>
  )
}

export default StartOrganization
