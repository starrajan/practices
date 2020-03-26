import * as React from 'react'
import { StyledOrganizationTab, LiStep } from './style'

function OrganizationTab(props: any) {
  const { step, type } = props
  return type === 'create' ? (
    <StyledOrganizationTab>
      <LiStep completed={step > 1} currentStep={step === 1}>
        Organization
      </LiStep>
      <LiStep completed={step > 2} currentStep={step === 2}>
        Setup
      </LiStep>
      <LiStep completed={step > 3} currentStep={step === 3}>
        Structure
      </LiStep>
      <LiStep completed={step > 4} currentStep={step === 4}>
        People
      </LiStep>
    </StyledOrganizationTab>
  ) : (
    <StyledOrganizationTab tabName="import">
      <LiStep completed={step > 1} currentStep={step === 1}>
        Organization
      </LiStep>
      <LiStep completed={step > 2} currentStep={step === 2}>
        Structure
      </LiStep>
      <LiStep completed={step > 3} currentStep={step === 3}>
        People
      </LiStep>
    </StyledOrganizationTab>
  )
}

export default OrganizationTab
