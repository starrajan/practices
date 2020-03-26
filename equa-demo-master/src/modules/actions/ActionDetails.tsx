import * as React from 'react'
import { useState, useEffect } from 'react'
import { withRouter, match } from 'react-router'

import {
  RequestContainer,
  ActionButtonWrapper,
  DetailsButton,
  HeaderSubLink,
  HeaderLink,
  Row,
  NoPadColumn,
  ActionDetailCard,
  ActionCardHeader,
  ActionDetailContent,
} from './style'
import { colors } from '../../shared/styles/theme'
import { inputStyleFilled } from '../../shared/styles/theme'
import history from '../app/components/history'
import { Paths } from '../app/components/routes/types'

const ActionDetails = (props: any) => {
  const [action, setAction] = useState('')

  useEffect(() => {
    setAction(props.match.params.action)
    console.log(action, 'action')
  }, [props.match.params.action])

  const img = {
    margin: 'auto',
  }

  const toTransfer = () => {
    history.push(`${Paths.sharesTransfer}`)
  }
  const toDraft = () => {
    history.push(`${Paths.draftUnits}`)
  }

  const toGoverningDocs= () => {
    history.push(`${Paths.OperatingAgreement}`)
  }
  const CreateOrganization= () => {
    history.push(`${Paths.orgCreate}`)
  }
  const createDataRoom= () => {
    history.push(`${Paths.createDataRoom}`)
  }
  const ImportOrganization= () => {
    history.push(`${Paths.orgImport}`)
  }

  
  

  return (
    <RequestContainer>
      {action === 'transfer' ? (
        <div>
          <div style={{ display: 'flex' }}>
            <div>
              <HeaderLink>Transfer</HeaderLink>
              <HeaderSubLink>Cognition, Inc</HeaderSubLink>
            </div>
          </div>
          <ActionDetailCard>
            <Row>
              <NoPadColumn>
                <ActionDetailContent>
                  Your shareholders may have the right to sell or transfer their shares. These transactions impact your cap table and should
                  be represented in real-time so that you can maintain accurate records of your company’s ownership. Use Equa’s transfer
                  tool to log this activity. Did you know? Equa Transfer is a SEC Registered Transfer Agency who can help facilitate
                  compliant transactions between your company and shareholders including issuing, transferring, or cancelling shares. Reach
                  out to learn more about how this can help your company.
                </ActionDetailContent>
              </NoPadColumn>

              <NoPadColumn>
                <ActionCardHeader>
                  <img style={img} src={require('assets/image/actions/transferDetail.png')} alt="" />
                </ActionCardHeader>
              </NoPadColumn>
            </Row>
            <ActionButtonWrapper>
              <DetailsButton onClick={toTransfer}>Transfer </DetailsButton>
              <DetailsButton>Talk to an expert </DetailsButton>
            </ActionButtonWrapper>
          </ActionDetailCard>
        </div>
      ) : null}

      {action === 'draft' ? (
        <div>
          <div style={{ display: 'flex' }}>
            <div>
              <HeaderLink>Draft</HeaderLink>
              <HeaderSubLink>Cognition, Inc</HeaderSubLink>
            </div>
          </div>
          <ActionDetailCard>
            <Row>
              <NoPadColumn>
                <ActionDetailContent>
                  Whether to a founder, employee, investor or advisor, keep your cap table up to date as shares are drafted and issued. When
                  shares are allocated, the shareholder will have access to their digitized stock certificates and other relevant
                  information in their personal dashboard. Furthermore, your company has a real-time view of its ownership records.
                </ActionDetailContent>
              </NoPadColumn>

              <NoPadColumn>
                <ActionCardHeader>
                  <img style={img} src={require('assets/image/actions/draftDetails.png')} alt="" />
                </ActionCardHeader>
              </NoPadColumn>
            </Row>
            <ActionButtonWrapper>
              <DetailsButton onClick={toDraft}>Draft </DetailsButton>
              <DetailsButton>Talk to an expert </DetailsButton>
            </ActionButtonWrapper>
          </ActionDetailCard>
        </div>
      ) : null}

      {action === 'capitalCall' ? (
        <div>
          <div style={{ display: 'flex' }}>
            <div>
              <HeaderLink>Capital Call</HeaderLink>
              <HeaderSubLink>Cognition, Inc</HeaderSubLink>
            </div>
          </div>
          <ActionDetailCard>
            <Row>
              <NoPadColumn>
                <ActionDetailContent>
                  A capital call is the act of collecting funds from individuals whenever the need arises. Time is usually of the essence.
                  Use Equa to facilitate the communication and execution of this key activity, Reducing the period between initiation and
                  close.
                </ActionDetailContent>
              </NoPadColumn>

              <NoPadColumn>
                <ActionCardHeader>
                  <img style={img} src={require('assets/image/actions/capitalDetails.png')} alt="" />
                </ActionCardHeader>
              </NoPadColumn>
            </Row>
            <ActionButtonWrapper>
              <DetailsButton>Capital Call </DetailsButton>
              <DetailsButton>Talk to an expert </DetailsButton>
            </ActionButtonWrapper>
          </ActionDetailCard>
        </div>
      ) : null}

      {action === 'boardMeeting' ? (
        <div>
          <div style={{ display: 'flex' }}>
            <div>
              <HeaderLink>Board Meeting</HeaderLink>
              <HeaderSubLink>Cognition, Inc</HeaderSubLink>
            </div>
          </div>
          <ActionDetailCard>
            <Row>
              <NoPadColumn>
                <ActionDetailContent>
                  A healthy organization maintains pristine records of all board meetings, votes, and other activities that are essential to
                  growing your company. Use Equa to communicate, store, and keep up to date all board related documents and actions.
                </ActionDetailContent>
              </NoPadColumn>

              <NoPadColumn>
                <ActionCardHeader>
                  <img style={img} src={require('assets/image/actions/boardDetails.png')} alt="" />
                </ActionCardHeader>
              </NoPadColumn>
            </Row>
            <ActionButtonWrapper>
              <DetailsButton>Board Meeting </DetailsButton>
              <DetailsButton>Talk to an expert </DetailsButton>
            </ActionButtonWrapper>
          </ActionDetailCard>
        </div>
      ) : null}

      {action === 'updateDocuments' ? (
        <div>
          <div style={{ display: 'flex' }}>
            <div>
              <HeaderLink>Update Governing Documents</HeaderLink>
              <HeaderSubLink>Cognition, Inc</HeaderSubLink>
            </div>
          </div>
          <ActionDetailCard>
            <Row>
              <NoPadColumn>
                <ActionDetailContent>
                  Your company's governing documents can be easily updated over time through board approved amendments. Whether updating
                  your Company Bylaws, your Operating Agreement, or any additional key information or operational articles, accelerate these
                  changes using Equa. Loop in all relevant parties to collect feedback and organize required voting processes.
                </ActionDetailContent>
              </NoPadColumn>

              <NoPadColumn>
                <ActionCardHeader>
                  <img style={img} src={require('assets/image/actions/governingDetails.png')} alt="" />
                </ActionCardHeader>
              </NoPadColumn>
            </Row>
            <ActionButtonWrapper>
              <DetailsButton onClick={toGoverningDocs}>Update Governing Documents </DetailsButton>
              <DetailsButton>Talk to an expert </DetailsButton>
            </ActionButtonWrapper>
          </ActionDetailCard>
        </div>
      ) : null}

      {action === 'signAgreement' ? (
        <div>
          <div style={{ display: 'flex' }}>
            <div>
              <HeaderLink>Sign an Agreement</HeaderLink>
              <HeaderSubLink>Cognition, Inc</HeaderSubLink>
            </div>
          </div>
          <ActionDetailCard>
            <Row>
              <NoPadColumn>
                <ActionDetailContent>
                  A company is a set of agreements: between founders, between the company and employees, or between partners, advisors,
                  investors, etc. Equa’s signing functionality allows you to collaborate on and execute documents effortlessly. Once a
                  document has been signed, select where to store it in your data room so that all relevant parties have access.
                </ActionDetailContent>
              </NoPadColumn>

              <NoPadColumn>
                <ActionCardHeader>
                  <img style={img} src={require('assets/image/actions/agreementDetails.png')} alt="" />
                </ActionCardHeader>
              </NoPadColumn>
            </Row>
            <ActionButtonWrapper>
              <DetailsButton onClick={toGoverningDocs}>Sign an Agreement </DetailsButton>
              <DetailsButton>Talk to an expert </DetailsButton>
            </ActionButtonWrapper>
          </ActionDetailCard>
        </div>
      ) : null}

      {action === 'Collaborate' ? (
        <div>
          <div style={{ display: 'flex' }}>
            <div>
              <HeaderLink>Collaborate</HeaderLink>
              <HeaderSubLink>Cognition, Inc</HeaderSubLink>
            </div>
          </div>
          <ActionDetailCard>
            <Row>
              <NoPadColumn>
                <ActionDetailContent>
                  Stakeholder communication and collaboration is key to any company’s success. Whether working on contract language,
                  providing updates to investors or shareholders, or soliciting advice from your legal or accounting representatives, Equa
                  streamlines the interaction to execution process.
                </ActionDetailContent>
              </NoPadColumn>

              <NoPadColumn>
                <ActionCardHeader>
                  <img style={img} src={require('assets/image/actions/collabDetails.png')} alt="" />
                </ActionCardHeader>
              </NoPadColumn>
            </Row>
            <ActionButtonWrapper>
              <DetailsButton>Collaborate </DetailsButton>
              <DetailsButton>Talk to an expert </DetailsButton>
            </ActionButtonWrapper>
          </ActionDetailCard>
        </div>
      ) : null}

      {action === 'dataRoom' ? (
        <div>
          <div style={{ display: 'flex' }}>
            <div>
              <HeaderLink>Create a New Data Room</HeaderLink>
              <HeaderSubLink>Cognition, Inc</HeaderSubLink>
            </div>
          </div>
          <ActionDetailCard>
            <Row>
              <NoPadColumn>
                <ActionDetailContent>
                  Facilitate the sharing of documentation and set appropriate permission levels to those stakeholders who need access.
                  Accelerate investor due diligence processes, provide secure access to relevant shareholder documents, or simply be
                  proactive in managing and centralizing key information so that it can be easily referenced as your company grows.
                </ActionDetailContent>
              </NoPadColumn>

              <NoPadColumn>
                <ActionCardHeader>
                  <img style={img} src={require('assets/image/actions/agreementDetails.png')} alt="" />
                </ActionCardHeader>
              </NoPadColumn>
            </Row>
            <ActionButtonWrapper>
              <DetailsButton onClick={createDataRoom}>Create a New Data Room </DetailsButton>
              <DetailsButton>Talk to an expert </DetailsButton>
            </ActionButtonWrapper>
          </ActionDetailCard>
        </div>
      ) : null}

      {action === 'createOrganization' ? (
        <div>
          <div style={{ display: 'flex' }}>
            <div>
              <HeaderLink>Create New Organization</HeaderLink>
              <HeaderSubLink>Cognition, Inc</HeaderSubLink>
            </div>
          </div>
          <ActionDetailCard>
            <Row>
              <NoPadColumn>
                <ActionDetailContent>
                  Facilitate the sharing of documentation and set appropriate permission levels to those stakeholders who need access.
                  Accelerate investor due diligence processes, provide secure access to relevant shareholder documents, or simply be
                  proactive in managing and centralizing key information so that it can be easily referenced as your company grows.
                </ActionDetailContent>
              </NoPadColumn>

              <NoPadColumn>
                <ActionCardHeader>
                  <img style={img} src={require('assets/image/actions/orgDetals.png')} alt="" />
                </ActionCardHeader>
              </NoPadColumn>
            </Row>
            <ActionButtonWrapper>
              <DetailsButton onClick={CreateOrganization}>Create New Organization </DetailsButton>
              <DetailsButton>Talk to an expert </DetailsButton>
            </ActionButtonWrapper>
          </ActionDetailCard>
        </div>
      ) : null}

      {action === 'importOrganization' ? (
        <div>
          <div style={{ display: 'flex' }}>
            <div>
              <HeaderLink>Import an Existing Organization</HeaderLink>
              <HeaderSubLink>Cognition, Inc</HeaderSubLink>
            </div>
          </div>
          <ActionDetailCard>
            <Row>
              <NoPadColumn>
                <ActionDetailContent>
                  Facilitate the sharing of documentation and set appropriate permission levels to those stakeholders who need access.
                  Accelerate investor due diligence processes, provide secure access to relevant shareholder documents, or simply be
                  proactive in managing and centralizing key information so that it can be easily referenced as your company grows.
                </ActionDetailContent>
              </NoPadColumn>

              <NoPadColumn>
                <ActionCardHeader>
                  <img style={img} src={require('assets/image/actions/agreementDetails.png')} alt="" />
                </ActionCardHeader>
              </NoPadColumn>
            </Row>
            <ActionButtonWrapper>
              <DetailsButton onClick={ImportOrganization}>Import an Existing Organization </DetailsButton>
              <DetailsButton>Talk to an expert </DetailsButton>
            </ActionButtonWrapper>
          </ActionDetailCard>
        </div>
      ) : null}
    </RequestContainer>
  )
}

export default withRouter(ActionDetails)
