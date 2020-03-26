import * as React from 'react'
import { useState } from 'react'
import {
  StyledDashboard,
  StyledItem,
  BlockInfo,
  BlockIcon,
  CircleImage,
  Container,
  EquaStartHead,
  ButtonGroup,
  StartUpScreenBtn,
} from './style'
import UploadDocuments from '../../assets/image/upload-documents.svg'
import OrgLogo from '../../assets/image/OrgLogo.svg'
import BookCall from '../../assets/image/book-call.svg'
import InviteOrg from '../../assets/image/InviteOrg.svg'
import SetupOrg from '../../assets/image/setup-org.svg'
import LegalCon from '../../assets/image/legal-con.svg'
import ConfirmCap from '../../assets/image/confirm-cap.svg'
import FinishIcon from '../../assets/image/finish-icon.svg'
import CircleCheck from '../../assets/image/circle-check.svg'
import CircleGreen from '../../assets/image/CircleGreen.svg'
import StartOrganization from './components/start-organization'

import  History  from '../app/components/history'
import { Paths } from '../app/components/routes/types'

const StartUpScreen = (props: any) => {
  const [showModal, setShowModal] = useState(false)
  const [currentStep] = useState(1)



  const toDashboard = () => {
    History.push(Paths.Dashboard)
  }

  return (
    <Container>
      <EquaStartHead>Let’s Get Started with Equa!</EquaStartHead>
      <StyledDashboard>
        <StyledItem currentStep={currentStep} step={1} isCompleted={true}>
          <BlockIcon src={InviteOrg} alt="" />
          <BlockInfo isCompleted={true}>
            <div className="head-text">Invite your organization’s administrators:</div>
            <div className="desc-text">Send an invite to your officers, directors and signatories.</div>
          </BlockInfo>
          <CircleImage src={CircleGreen} alt="" isCompleted={true} />
        </StyledItem>
        <StyledItem
          pointed
          currentStep={currentStep}
          step={2}
          onClick={() => {
            setShowModal(true)
          }}
        >
          <BlockIcon src={SetupOrg} alt="" />
          <BlockInfo>
            <div className="head-text">Set up an organization.</div>
          </BlockInfo>
          <CircleImage src={CircleCheck} alt="" />
        </StyledItem>
        <StyledItem currentStep={currentStep} step={3}>
          <BlockIcon src={LegalCon} alt="" />
          <BlockInfo>
            <div className="head-text">Invite your legal representative:</div>
            <div className="desc-text">
              Send and invite to your internal counsel or external legal firm for your legal point of contact.
            </div>
          </BlockInfo>
          <CircleImage src={CircleCheck} alt="" />
        </StyledItem>
        <StyledItem currentStep={currentStep} step={4}>
          <BlockIcon src={ConfirmCap} alt="" />
          <BlockInfo>
            <div className="head-text">Confirm the cap table</div>
            <div className="desc-text">Send an invite to your shareholders and members.</div>
          </BlockInfo>
          <CircleImage src={CircleCheck} alt="" />
        </StyledItem>
        <StyledItem currentStep={currentStep} step={5}>
          <BlockIcon src={UploadDocuments} alt="" />
          <BlockInfo>
            <div className="head-text">Upload all current documents to the data room.</div>
          </BlockInfo>
          <CircleImage src={CircleCheck} alt="" />
        </StyledItem>
        <StyledItem currentStep={currentStep} step={6}>
          <BlockIcon src={OrgLogo} alt="" />
          <BlockInfo>
            <div className="upload-logo">
              <div className="head-text">Upload logo of your company.</div>
              <div className="skip-text">Skip for now</div>
            </div>
          </BlockInfo>
          <CircleImage src={CircleCheck} alt="" />
        </StyledItem>
        <StyledItem currentStep={currentStep} step={7}>
          <BlockIcon src={BookCall} alt="" />
          <BlockInfo>
            <div className="head-text">Book your first review call with your dedicated Equanaut to review next steps.</div>
          </BlockInfo>
          <CircleImage src={CircleCheck} alt="" />
        </StyledItem>
        <StyledItem currentStep={currentStep} step={8}>
          <BlockIcon src={FinishIcon} alt="" />
          <BlockInfo>
            <div className="head-text">Book Finishing up and Hand off call.</div>
          </BlockInfo>
          <CircleImage src={CircleCheck} alt="" />
        </StyledItem>
        <ButtonGroup>
          <StartUpScreenBtn onClick={toDashboard} >Go to dashboard</StartUpScreenBtn>
          <StartUpScreenBtn>book a call</StartUpScreenBtn>
        </ButtonGroup>
      </StyledDashboard>
      <StartOrganization showModal={showModal} setShowModal={setShowModal} />
    </Container>
  )
}

export default StartUpScreen
