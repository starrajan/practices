import * as React from 'react'
import { ReviewTitle, ReviewCont, ReviewFinish } from './style'
import OrganizationSectionReview from './components/organization-section-review'
import SetupReview from './components/setup-review'
import StructureReview from './components/structure-review'
import PeopleReview from './components/people-review'
import { MainContainer } from '../../../../shared/styles/styled'
import history from 'modules/app/components/history'

interface Props {
  values: any
  type: string
  setStep: (step: any) => void
}
const OrganizationReview = (props: Props) => {
  const { type, setStep } = props
  const values = {
    name: 'GJJ Express',
    businessAddress: {
      country: 'United States of America (USA)',
      street1: 'P.O. BOX 324534',
      state: 'Delaware',
      province: 'Delaware',
      city: 'Tonwanda',
      postalCode: '12345',
    },
    mailingAddress: {
      country: 'United States of America (USA)',
      street1: 'P.O. BOX 324534',
      state: 'Delaware',
      province: 'Delaware',
      city: 'Tonwanda',
      postalCode: '12345',
    },
    primaryActivity: 1,
    agent: {
      address: {
        country: 'United States of America (USA)',
        street1: 'P.O. BOX 324534',
        state: 'Delaware',
        province: 'Delaware',
        city: 'Tonwanda',
        postalCode: '12345',
      },
    },
    bankAddress: {
      country: 'United States of America (USA)',
      street1: 'P.O. BOX 324534',
      state: 'Delaware',
      province: 'Delaware',
      city: 'Tonwanda',
      postalCode: '12345',
    },
    createBankAcc: true,
    viewBankAccount: true,
    viewEin: true,
    type: 'create',
    companyType: 1,
    otherCompanyType: '',
    equityStructure: 1,
    ownershipTransferability: 1,
    members: [
      {
        fullName: 'Todd Wilson',
        roles: [
          { designation: 'Master' },
          { designation: 'Admin' },
          { designation: 'Manager' },
          { designation: 'Signatory' },
          { designation: 'Legal' },
          { designation: 'Director' },
        ],
      },
    ],
  }
  const goBack = () => {
    history.goBack()
  }
  const handleFinish = () => {
    history.push('/dashboard')
  }
  return (
    <div>
      <ReviewTitle>
        <span onClick={() => goBack()}>&#x2190;</span> Review Your New Organization
      </ReviewTitle>
      <MainContainer>
        <ReviewCont>
          <OrganizationSectionReview
            name={values.name}
            businessAddress={values.businessAddress}
            mailingAddress={values.mailingAddress}
            primaryActivity={values.primaryActivity}
            setStep={setStep}
          />
          {type === 'create' ? (
            <SetupReview
              agent={values.agent}
              createBankAcc={values.createBankAcc}
              viewBankAccount={values.viewBankAccount}
              viewEin={values.viewEin}
              bankAddress={values.bankAddress}
              setStep={setStep}
            />
          ) : null}
          <StructureReview
            type={type}
            taxedType={values.companyType}
            otherCompanyType={values.otherCompanyType}
            equity={values.equityStructure}
            transfer={values.ownershipTransferability}
            setStep={setStep}
          />
          <PeopleReview members={values.members} setStep={setStep} type={type} />
          <ReviewFinish
            onClick={() => {
              setStep(5)
              handleFinish()
            }}
            type="submit"
          >
            FINISH
          </ReviewFinish>
        </ReviewCont>
      </MainContainer>
    </div>
  )
}

export default OrganizationReview
