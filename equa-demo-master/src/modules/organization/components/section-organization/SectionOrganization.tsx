import * as React from 'react'
import { useEffect, useState } from 'react'
import {
  OrgSectionContainer,
  OrganizationBlock,
  DataBlock,
  QuestionText,
  StyledCircle,
  StyledStepField,
  SaveNextBtn,
  CheckBlock,
  CheckText,
} from '../style'
import { Input, Address, Select, MultiBox } from 'shared/components/form-component'
import { primaryActivities } from 'shared/helpers/primary-activity'

const SectionOrganization = (props: any) => {
  const [mailingSameAsBusiness, setMailingSameAsBusiness] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { values } = props
  const checkAddress = (val: any) => {
    if (!val) {
      return false
    }
    const checkAddressStatus = val.country && val.streetAddress && (val.state || val.province) && val.city && val.postalCode
    return checkAddressStatus
  }
  const stepStateCheck = (val: any) => {
    switch (val) {
      case 1:
        return values.name
      case 2:
        return values.name && checkAddress(values.businessAddress)
      case 3:
        return values.name && checkAddress(values.businessAddress) && checkAddress(values.mailingAddress)
      case 4:
        return values.name && checkAddress(values.businessAddress) && checkAddress(values.mailingAddress) && values.primaryActivity
      default:
        return false
    }
  }
  const checkMailingAddress = (e: any) => {
    const id = e.target.id
    if (mailingSameAsBusiness) {
      values.mailingAddress = {
        country: '',
        streetAddress: '',
        state: '',
        province: '',
        city: '',
        postalCode: '',
      }
      setMailingSameAsBusiness(false)
      //@ts-ignore
      document.getElementById(id).checked = false
    } else {
      values.mailingAddress = values.businessAddress
      setMailingSameAsBusiness(true)
    }
  }
  return (
    <OrgSectionContainer>
      <OrganizationBlock>
        <StyledCircle complete={true} />
        <StyledStepField complete={stepStateCheck(1)}>
          <DataBlock selected={true}>
            <QuestionText>What is the name of your organization?</QuestionText>
            <Input name="name" label="Enter your organization name" placeholder="Type your business name" {...props} />
          </DataBlock>
        </StyledStepField>
      </OrganizationBlock>
      <OrganizationBlock>
        <StyledCircle complete={stepStateCheck(1)} />
        <StyledStepField complete={stepStateCheck(2)}>
          <DataBlock selected={stepStateCheck(1)}>
            <QuestionText>What is the business address for your organization?</QuestionText>
            <Address name="businessAddress" />
          </DataBlock>
        </StyledStepField>
      </OrganizationBlock>
      <OrganizationBlock>
        <StyledCircle complete={stepStateCheck(2)} />
        <StyledStepField complete={stepStateCheck(3)}>
          <DataBlock selected={stepStateCheck(2)}>
            <QuestionText>What is the mailing address for your Organization?</QuestionText>
            <MultiBox
              name="mailingSameAsBusiness"
              id="mailingSameAsBusinessId"
              handleClick={checkMailingAddress}
              defaultChecked={values.mailingSameAsBusiness}
              text="Same as Business Address"
              type="radio"
            />
            {mailingSameAsBusiness && <Address name="mailingAddress" readOnly={mailingSameAsBusiness} />}
            {!mailingSameAsBusiness && <Address name="mailingAddress" />}
          </DataBlock>
        </StyledStepField>
      </OrganizationBlock>

      <OrganizationBlock>
        <StyledCircle complete={stepStateCheck(3)} />
        <StyledStepField complete={stepStateCheck(4)}>
          <DataBlock selected={stepStateCheck(3)}>
            <QuestionText>What is the primary activity of your organization?</QuestionText>
            <Select
              name="primaryActivity"
              label="Choose activity (optional)"
              defaultOption={'Choose a primary activity'}
              options={primaryActivities}
            />
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

export default SectionOrganization
