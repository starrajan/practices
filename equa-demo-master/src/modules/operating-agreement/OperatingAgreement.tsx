import * as React from 'react'
import { useState } from 'react'
import { withRouter, RouteComponentProps } from 'react-router'
import RegisteredStateIcon from '../../assets/image/registered-state.png'
import TeamIcon from '../../assets/image/team.png'
import Bond from '../../assets/image/bond.png'
import Registered from '../../assets/image/reg.png'
import Network from '../../assets/image/network.png'
import Manage from '../../assets/image/manag.png'
import Sign from '../../assets/image/sign.png'
import { colors, screenSizes, theme } from '../../shared/styles/theme'
import Dropdown from '../../shared/components/Dropdown'
import { Input, InputTextArea, MultiSelect, ProgressBar, ProgressBarWhite } from 'shared/components/form-component'
import history from '../app/components/history'
import { Paths } from '../app/components/routes/types'

import pdf from '../../assets/salesDemo.pdf'

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
  OperatingAgreementContainer,
  Signatures,
  SignaturesHead,
  SignaturesSubHead,
  HeaderLink,
  TabsContainer,
  TabPanelDisplay,
  OperatingAgreementHead,
  TabsContainerLink,
  HeaderText,
  SigProgress,
  PdfHead,
  AcceptButton,
  CancelButton,
  PdfButtonWrapper,
} from './style'

const OperatingAgreement = (props: any) => {
  const arrow = {
    marginTop: '16px',
    marginRight: '10px',
    height: '15px',
    cursor: 'pointer',
  }
  const tabsData = [
    { label: 'Summary', value: 'Summary' },
    { label: 'View Full Document', value: 'Document' },
  ]
  const data = [
    { label: 'Version 1', value: 'Version 1' },
    { label: 'Version 2', value: 'Version 2' },
  ]
  const [selectedVersion, setSelectedVersion] = useState('')
  const [completedPercent, setCompletedPercent] = useState(56)
  const [activeTab, setActiveTab] = useState('Summary')

  const VersionSelectHandler = (event: any) => {
    const version = event.target.value
    setSelectedVersion(version)
    history.push(Paths.EditOperatingAgreement)
  }

  const selectTab = (val: any) => {
    setActiveTab(val)
  }

  const editAgreement = () => {
    history.push(Paths.CreateOperatingAgreement)
  }

  const DropStyleSimple = {
    background: 'none',
    border: 'none',
    color: colors.white,
    height: '44px',
    borderRadius: '3px',
    fontFamily: 'Regular',
    outline: 'none',
    marginRight: '30px',
  }
  return (
    <OperatingAgreementContainer>
      <OperatingAgreementHead>
        <div style={{ display: 'flex' }}>
          {/* <img style={arrow} src={require('assets/image/arrow.png')} alt="" /> */}
          <HeaderLink style={{ margin: '0' }}>Operating Agreement</HeaderLink>
        </div>
        <div style={{ display: 'flex' }}>
          <select style={DropStyleSimple} onChange={VersionSelectHandler} value={selectedVersion}>
            {data.map((char: any, i: any) => (
              <option key={i} value={char.value}>
                {char.label}
              </option>
            ))}
          </select>

          <HeaderText>Last edit 5 mins ago</HeaderText>
        </div>
      </OperatingAgreementHead>

      <TabsContainer>
        {tabsData.map((item: any, i: any) => (
          <TabsContainerLink
            key={i}
            onClick={() => selectTab(item.value)}
            style={{
              borderBottom: activeTab === item.value ? '2px solid #ffffff' : 'none',
              color: activeTab === item.value ? colors.white : colors.grey,
            }}
          >
            {item.label}
          </TabsContainerLink>
        ))}
      </TabsContainer>

      <TabPanelDisplay
        style={{
          display: activeTab === 'Summary' ? 'block' : 'none',
        }}
      >
        <div>
          <Signatures>
            <SigProgress>
              <SignaturesHead>Signatures </SignaturesHead>
              <SignaturesSubHead>1 of 2 Signatures </SignaturesSubHead>
              <div style={{ marginTop: '30px' }}>
                <ProgressBarWhite percent={completedPercent} />
              </div>
              <SignaturesSubHead style={{ marginTop: '40px' }}>View Signatures </SignaturesSubHead>
            </SigProgress>
            <div>
              <img onClick={editAgreement} style={{ cursor: 'pointer' }} src={Sign} />
            </div>
          </Signatures>

          <OrganizationInfoCont>
            <OrganizationInfoDetails>
              <OrganizationInfoBox>
                <div>
                  <OrgInfoTitle>Registered State</OrgInfoTitle>
                  <OrgInformation>Delaware</OrgInformation>
                </div>
                <div>
                  <img src={RegisteredStateIcon} alt="" />
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
                  <OrgInformation>1000</OrgInformation>
                </div>
                <div>
                  <img src={Bond} alt="" />
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
                  <OrgInfoTitle>Total Members</OrgInfoTitle>
                  <OrgInformation>2 Members</OrgInformation>
                </div>
                <div>
                  <img src={TeamIcon} alt="" />
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
                  <OrgInfoTitle>3rd Party Registrar</OrgInfoTitle>
                  <OrgInformation>Trimm Registrars</OrgInformation>
                </div>
                <div>
                  <img src={Registered} alt="" />
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
                  <OrgInfoTitle>Management Structure</OrgInfoTitle>
                  <OrgInformation>Member Managed</OrgInformation>
                </div>
                <div>
                  <img src={Manage} alt="" />
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
                  <OrgInfoTitle>Total Managers</OrgInfoTitle>
                  <OrgInformation>2 Managers</OrgInformation>
                </div>
                <div>
                  <img src={Network} alt="" />
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
          </OrganizationInfoCont>
        </div>
      </TabPanelDisplay>

      <TabPanelDisplay
        style={{
          display: activeTab === 'Document' ? 'block' : 'none',
        }}
      >
        <PdfHead>
          <div style={{ display: 'flex' }}>
            <select style={DropStyleSimple} onChange={VersionSelectHandler} value={selectedVersion}>
              {data.map((char: any, i: any) => (
                <option key={i} value={char.value}>
                  {char.label}
                </option>
              ))}
            </select>

            <HeaderText>Last edit 5 mins ago</HeaderText>
          </div>
            <PdfButtonWrapper>
              <AcceptButton style={{width:'60%'}}>sign & agree</AcceptButton>
              <CancelButton style={{width:'60%'}}>disagree </CancelButton>
            </PdfButtonWrapper>
    
        </PdfHead>
        <iframe style={{ width: '100%', height: '100vh' }} src={pdf} />
      </TabPanelDisplay>
    </OperatingAgreementContainer>
  )
}

export default OperatingAgreement
