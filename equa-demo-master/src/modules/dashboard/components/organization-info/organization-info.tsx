import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router'
import RegisteredStateIcon from '../../../../assets/image/registered-state.png'
import RegisteredAgentIcon from '../../../../assets/image/registered-agent.png'
import MemberShareIconIcon from '../../../../assets/image/member-share.png'
import ManagerStructureIcon from '../../../../assets/image/managed.png'
import BankAccountIcon from '../../../../assets/image/bank-account.png'
import EinIcon from '../../../../assets/image/ein-icon.png'
import { Paths } from '../../../app/components/routes/types'

import {
  OrganizationInfoCont,
  OrganizationInfoDetails,
  OrgInfoTitle,
  FootText,
  FootLink,
  FootBadge,
  OrgInformation,
  RnAccount,
  OrganizationInfoBox,
  OrganizationInfoFoot,
} from './style'
interface Props extends RouteComponentProps<any> {
  registeredState: string
  agentName: string
  agentAddress: AgentAddress
  memberHeldShares: number
  structureType: string
  numberOfManagers: number
  bankName: string
  anNumber: string
  rnNumber: string
  einNumber: string
}

interface AgentAddress {
  street1: string
  city: string
  province: string
  country: string
}
const OrganizationInfo = (props: Props) => {
  const { registeredState, agentAddress, memberHeldShares, anNumber, rnNumber, einNumber } = props

  const bankName = 'South State Bank'
  const agentName = 'Trimm Registrars'
  const numberOfManagers = 1
  const structureType = 'Member Managed'
  const toCapTable = () => {
    props.history.push(`${Paths.capTable}`)
  }
  return (
    <OrganizationInfoCont>
      <OrganizationInfoDetails>
        <OrganizationInfoBox>
          <div>
            <OrgInfoTitle>Registered State</OrgInfoTitle>
            <OrgInformation>{registeredState || 'Delaware'}</OrgInformation>
          </div>
          <div>
            <img src={RegisteredStateIcon} />
          </div>
        </OrganizationInfoBox>
        <OrganizationInfoFoot>
          <div style={{ display: 'flex' }}>
            <FootText>View Details</FootText>
            <FootBadge>1</FootBadge>
          </div>
          <FootLink>Edit </FootLink>
        </OrganizationInfoFoot>
      </OrganizationInfoDetails>

      <OrganizationInfoDetails>
        <OrganizationInfoBox>
          <div>
            <OrgInfoTitle>Registered Agent</OrgInfoTitle>
            {!!agentName ? (
              <>
                <OrgInformation>Trimm Registrars</OrgInformation>
                <OrgInformation>
                  {agentAddress
                    ? `${agentAddress.street1}, ${agentAddress.city}, ${agentAddress.province},${agentAddress.country}`
                    : '42 Sunset Boulevard, Angola, New York'}
                </OrgInformation>
              </>
            ) : (
              <OrgInformation>Not Available</OrgInformation>
            )}
          </div>
          <div>
            <img src={RegisteredAgentIcon} />
          </div>
        </OrganizationInfoBox>

        <OrganizationInfoFoot>
          <div style={{ display: 'flex' }}>
            <FootText>View Details</FootText>
            <FootBadge>1</FootBadge>
          </div>
          <FootLink>Edit </FootLink>
        </OrganizationInfoFoot>
      </OrganizationInfoDetails>

      <OrganizationInfoDetails>
        <OrganizationInfoBox>
          <div>
            <OrgInfoTitle>Member-held Shares</OrgInfoTitle>
            <OrgInformation>{memberHeldShares || '100,000'}</OrgInformation>
          </div>
          <div>
            <img src={MemberShareIconIcon} />
          </div>
        </OrganizationInfoBox>
        <OrganizationInfoFoot>
          <div style={{ display: 'flex' }}>
            <FootText onClick={toCapTable}>View Cap Table</FootText>
            <FootBadge>1</FootBadge>
          </div>
        </OrganizationInfoFoot>
      </OrganizationInfoDetails>

      <OrganizationInfoDetails>
        <OrganizationInfoBox>
          <div>
            <OrgInfoTitle>Management Structure</OrgInfoTitle>
            {!!structureType ? (
              <>
                <OrgInformation>{structureType}</OrgInformation>
                <OrgInformation>
                  {numberOfManagers
                    ? numberOfManagers === 1
                      ? `${numberOfManagers} Manager`
                      : numberOfManagers > 1
                      ? `${numberOfManagers} Managers`
                      : 'no manager added'
                    : 'no manager added'}
                </OrgInformation>
              </>
            ) : (
              <OrgInformation>Not Available</OrgInformation>
            )}
          </div>
          <div>
            <img src={ManagerStructureIcon} />
          </div>
        </OrganizationInfoBox>

        <OrganizationInfoFoot>
          <div style={{ display: 'flex' }}>
            <FootText>View Details</FootText>
            <FootBadge>1</FootBadge>
          </div>
        </OrganizationInfoFoot>
      </OrganizationInfoDetails>

      <OrganizationInfoDetails>
        <OrganizationInfoBox>
          <div>
            <OrgInfoTitle>Bank Account</OrgInfoTitle>
            {bankName ? (
              <>
                <OrgInformation>South State Bank</OrgInformation>
                <div className="bank-accounts">
                  <OrgInformation>AN: ***********1234</OrgInformation>
                  <RnAccount>RN: **********5678</RnAccount>
                </div>
              </>
            ) : (
              <OrgInformation>Not Available</OrgInformation>
            )}
          </div>
          <div>
            <img src={BankAccountIcon} />
          </div>
        </OrganizationInfoBox>

        <OrganizationInfoFoot>
          <div style={{ display: 'flex' }}>
            <FootText onClick={toCapTable}>View Cap Table</FootText>
          </div>
        </OrganizationInfoFoot>
      </OrganizationInfoDetails>

      <OrganizationInfoDetails>
        <OrganizationInfoBox>
          <div>
            <OrgInfoTitle>Employer Identification Number (EIN)</OrgInfoTitle>
            <OrgInformation>{einNumber || '12-3456789'}</OrgInformation>
          </div>
          <div>
            <img src={EinIcon} />
          </div>
        </OrganizationInfoBox>
        <OrganizationInfoFoot>
          <div style={{ display: 'flex' }}>
            <FootText></FootText>
          </div>
        </OrganizationInfoFoot>
      </OrganizationInfoDetails>
    </OrganizationInfoCont>
  )
}

export default withRouter(OrganizationInfo)
