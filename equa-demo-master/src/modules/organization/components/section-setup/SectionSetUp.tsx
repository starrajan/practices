import * as React from 'react'
import { useState, useEffect } from 'react'
import {
  OrgSectionContainer,
  OrganizationBlock,
  DataBlock,
  QuestionText,
  SmallQueText,
  StyledCircle,
  StyledStepField,
  SaveNextBtn,
  CheckBlock,
  CheckText,
} from '../style'
import { AgentInfo } from './style'
import { Input, Select, Address, MultiBox, ToggleButtons } from 'shared/components/form-component'

const agentSuffixList: any = [
  { label: 'suffix1', value: 'suffix1' },
  { label: 'suffix2', value: 'suffix2' },
  { label: 'suffix3', value: 'suffix3' },
]

const emptyAddress = {
  country: '',
  streetAddress: '',
  state: '',
  province: '',
  city: '',
  postalCode: '',
}

export const yesNoTypes = [
  { label: 'YES', value: 'yes' },
  { label: 'NO', value: 'no' },
]
export const entityTypes = [
  { label: 'INDIVIDUAL', value: 'individual' },
  { label: 'ENTITY', value: 'entity' },
]

const SectionSetUp = (props: any) => {
  const [agentConsented, setAgentConsented] = useState(false)
  const [isSameAsBusiness, setIsSameAsBusiness] = useState(false)
  const [isSameAsMailing, setIsSameAsMailing] = useState(false)
  const { values } = props
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleBankAddress = (e: any) => {
    const id: string = e.target.id
    if (id === 'businessAddId' && !isSameAsBusiness) {
      setIsSameAsBusiness(true)
      setIsSameAsMailing(false)
      values.bankAddress = values.businessAddress
    } else if (id === 'mailingAddId' && !isSameAsMailing) {
      setIsSameAsBusiness(false)
      setIsSameAsMailing(true)
      values.bankAddress = values.mailingAddress
    } else {
      setIsSameAsBusiness(false)
      setIsSameAsMailing(false)
      //@ts-ignore
      document.getElementById(id).checked = false
      values.bankAddress = {
        country: '',
        streetAddress: '',
        state: '',
        province: '',
        city: '',
        postalCode: '',
      }
    }
  }
  const handleAgentConsented = (e: any) => {
    const id = e.target.id
    if (agentConsented) {
      values.agentConsented = false
      setAgentConsented(false)
      //@ts-ignore
      document.getElementById(id).checked = false
    } else {
      values.agentConsented = true
      setAgentConsented(true)
    }
  }

  const checkAddress = (val: any) => {
    if (!val) {
      return false
    }
    const checkAddressStatus = val.country && val.streetAddress && (val.state || val.province) && val.city && val.postalCode
    return checkAddressStatus
  }
  const checkEquaRegisteredAgent = () => {
    let agentCheck = false
    if (values.isEquaRegisteredAgent === 'yes') {
      agentCheck = true
      values.registeredAgentType = ''
      values.agentName = ''
      values.agentSuffix = ''
      values.registeredAgentComp = ''
      values.agentAddress = emptyAddress
    }
    if (values.isEquaRegisteredAgent === 'no') {
      if (values.registeredAgentType === 'entity') {
        agentCheck = values.registeredAgentComp && checkAddress(values.agentAddress)
      }
      if (values.registeredAgentType === 'individual') {
        agentCheck = values.agentName && values.agentSuffix && checkAddress(values.agentAddress)
      }
    }
    return agentCheck
  }
  const checkEquaCreateBankAccount = () => {
    let equaCreatBankAccCheck = false
    if (values.isEquaCreateBankAcc === 'no') {
      equaCreatBankAccCheck = true
      values.bankAddress = emptyAddress
    }
    if (values.isEquaCreateBankAcc === 'yes') {
      equaCreatBankAccCheck = checkAddress(values.bankAddress)
    }
    return equaCreatBankAccCheck
  }

  const stepStateCheck = (val: any) => {
    switch (val) {
      case 1:
        return checkEquaRegisteredAgent()
      case 2:
        return checkEquaRegisteredAgent() && checkEquaCreateBankAccount()
      case 3:
        return checkEquaRegisteredAgent() && checkEquaCreateBankAccount() && values.viewBankAccInfoOnEqua
      case 4:
        return checkEquaRegisteredAgent() && checkEquaCreateBankAccount() && values.viewBankAccInfoOnEqua && values.viewEinOnEqua
      default:
        return false
    }
  }

  return (
    <OrgSectionContainer>
      <OrganizationBlock>
        <StyledCircle complete={true} />
        <StyledStepField complete={stepStateCheck(1)}>
          <DataBlock selected={true}>
            <QuestionText>Would you like Equa Transfer , LLC to act as your Registered Agent and create your organization?</QuestionText>
            <ToggleButtons items={yesNoTypes} name="isEquaRegisteredAgent" vertical={false} horizontal={true} />
            {values.isEquaRegisteredAgent === 'no' && (
              <div>
                <QuestionText marginTopValue="24px">
                  Please enter your Registered Agent details below if you have them at this moment.
                </QuestionText>
                <MultiBox
                  name="agentConsented"
                  text="The person appointed as registered agent has consented to being so appointed."
                  id="agentConsentedId"
                  handleClick={handleAgentConsented}
                  defaultChecked={values.agentConsented}
                  type="radio"
                />
                <AgentInfo>
                  <SmallQueText>Is the Registered Agent of your LLC an individual or an entity?</SmallQueText>
                  <ToggleButtons items={entityTypes} name="registeredAgentType" vertical={false} horizontal={true} />

                  {values.registeredAgentType === 'entity' && (
                    <div>
                      <Input name="registeredAgentComp" label="Company Name" placeholder="Enter company name" {...props} />
                      <Address name="agentAddress" />
                    </div>
                  )}
                  {values.registeredAgentType === 'individual' && (
                    <div>
                      <Input name="agentName" label="Full Name" placeholder="Enter full name" {...props} />
                      <Select name="agentSuffix" label="Suffix" defaultOption={'Choose'} options={agentSuffixList} />
                      <Address name="agentAddress" />
                    </div>
                  )}
                </AgentInfo>
              </div>
            )}
          </DataBlock>
        </StyledStepField>
      </OrganizationBlock>

      <OrganizationBlock>
        <StyledCircle complete={stepStateCheck(1)} />
        <StyledStepField complete={stepStateCheck(2)}>
          <DataBlock complete={stepStateCheck(1)}>
            <QuestionText>Would you like equaSTART to create a bank account for your organization?</QuestionText>
            <ToggleButtons items={yesNoTypes} name="isEquaCreateBankAcc" vertical={false} horizontal={true} />

            {values.isEquaCreateBankAcc === 'yes' && (
              <div>
                <QuestionText marginTopValue="24px">What is the billing address you would like to use for this account?</QuestionText>
                <MultiBox
                  id="businessAddId"
                  name="billingAddressSelect"
                  text="Same as Business Address"
                  type="radio"
                  handleClick={handleBankAddress}
                  defaultChecked={values.bankAddress === values.businessAddress}
                />
                <MultiBox
                  id="mailingAddId"
                  name="billingAddressSelect"
                  text="Same as Mailing Address"
                  type="radio"
                  handleClick={handleBankAddress}
                  defaultChecked={values.bankAddress === values.mailingAddress}
                />
                {isSameAsBusiness && <Address name="businessAddress" readOnly={isSameAsBusiness} />}
                {isSameAsMailing && <Address name="mailingAddress" readOnly={isSameAsMailing} />}
                {!isSameAsBusiness && !isSameAsMailing && <Address name="bankAddress" />}
              </div>
            )}
          </DataBlock>
        </StyledStepField>
      </OrganizationBlock>

      <OrganizationBlock>
        <StyledCircle complete={stepStateCheck(2)} />
        <StyledStepField complete={stepStateCheck(3)}>
          <DataBlock complete={stepStateCheck(2)}>
            <QuestionText>Would you like to view your bank account information on EQUA START when it is available?</QuestionText>
            <SmallQueText>We will send you a message with your account details either way.</SmallQueText>
            <ToggleButtons items={yesNoTypes} name="viewBankAccInfoOnEqua" vertical={false} horizontal={true} />
          </DataBlock>
        </StyledStepField>
      </OrganizationBlock>

      <OrganizationBlock>
        <StyledCircle complete={stepStateCheck(3)} />
        <StyledStepField complete={stepStateCheck(4)}>
          <DataBlock complete={stepStateCheck(3)}>
            <QuestionText>Would you like to view your EIN on EQUA START when it is available?</QuestionText>
            <ToggleButtons items={yesNoTypes} name="viewEinOnEqua" vertical={false} horizontal={true} />
          </DataBlock>
        </StyledStepField>
      </OrganizationBlock>

      <OrganizationBlock>
        <StyledCircle complete={stepStateCheck(4)} />
        <CheckBlock>
          <CheckText complete={stepStateCheck(4)}>
            <span>&#10003;</span>Done
          </CheckText>
        </CheckBlock>
      </OrganizationBlock>
      <SaveNextBtn type="submit" disabled={!stepStateCheck(4)} onClick={props.handleClick}>
        Save & Next
      </SaveNextBtn>
    </OrgSectionContainer>
  )
}

export default SectionSetUp
