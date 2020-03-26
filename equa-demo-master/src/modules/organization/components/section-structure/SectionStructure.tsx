import * as React from 'react'
import { useEffect } from 'react'
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
import { Input, ToggleButtons } from 'shared/components/form-component'
import { companyType, equityStructure, ownershipTransferability } from 'shared/helpers/constants'

const SectionStructure = (props: any) => {
  const { values } = props
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const companyTypeCheck = () => {
    let compCheck = false
    if (values.companyType > 0 && values.companyType < 3) {
      compCheck = true
      values.otherCompanyType = ''
    }
    if (values.companyType === 3 && values.otherCompanyType) {
      compCheck = true
    }
    return compCheck
  }
  const stepStateCheck = (val: any) => {
    switch (val) {
      case 1:
        return companyTypeCheck()
      case 2:
        return companyTypeCheck() && values.equityStructure
      case 3:
        return companyTypeCheck() && values.equityStructure && values.ownershipTransferability
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
            <QuestionText>Are you taxed as an LLC or as an S-Corp/C-Corp?</QuestionText>
            <ToggleButtons items={companyType} name="companyType" vertical={false} />
            {values.companyType === 3 && (
              <Input name="otherCompanyType" label="Organization Type" placeholder="Enter organization type" {...props} />
            )}
          </DataBlock>
        </StyledStepField>
      </OrganizationBlock>

      <OrganizationBlock>
        <StyledCircle complete={stepStateCheck(1)} />
        <StyledStepField complete={stepStateCheck(2)}>
          <DataBlock complete={stepStateCheck(1)}>
            <QuestionText>What is the equity structure of your organization?</QuestionText>
            <ToggleButtons items={equityStructure} name="equityStructure" vertical={true} />
          </DataBlock>
        </StyledStepField>
      </OrganizationBlock>

      <OrganizationBlock>
        <StyledCircle complete={stepStateCheck(2)} />
        <StyledStepField complete={stepStateCheck(3)}>
          <DataBlock complete={stepStateCheck(2)}>
            <QuestionText>How will you transfer ownership interests?</QuestionText>
            <ToggleButtons items={ownershipTransferability} name="ownershipTransferability" vertical={true} />
          </DataBlock>
        </StyledStepField>
      </OrganizationBlock>

      <OrganizationBlock>
        <StyledCircle complete={stepStateCheck(3)} />
        <CheckBlock>
          <CheckText complete={stepStateCheck(3)}>
            <span>&#10003;</span>Done
          </CheckText>
        </CheckBlock>
      </OrganizationBlock>
      <SaveNextBtn type="submit" disabled={!stepStateCheck(3)} onClick={props.handleClick}>
        Save & Next
      </SaveNextBtn>
    </OrgSectionContainer>
  )
}

export default SectionStructure
