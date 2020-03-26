import * as React from 'react'
import { Formik, Form, FormikProps } from 'formik'
import { Container } from './style'
import OrganizationTab from './organization-tab'
import SectionOrganization from './section-organization'
import SectionStructure from './section-structure'
import SectionPeople from './section-people'
import OrganizationReview from './organization-review'

const ImportOrganization = (props: any) => {
  const { step, setStep } = props

  const initialValues = {
    name: '',
    businessAddress: {
      country: '',
      province: '',
    },
    mailingAddress: {
      country: '',
      province: '',
    },
    primaryActivity: 0,
    members: [],
    createBankAcc: '',
    companyType: 0,
    otherCompanyType: '',
  }

  const handleSubmit = (values: any) => {
    if (step <= 3) {
      setStep(step + 1)
    }
  }
  return (
    <Container>
      {step !== 5 && <OrganizationTab step={step} type={'import'} />}
      <div>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting }) => {
            handleSubmit(values)
          }}
        >
          {(props: FormikProps<any>) => (
            <Form noValidate>
              {step === 1 ? (
                <SectionOrganization handleSubmit={handleSubmit} {...props} />
              ) : step === 2 ? (
                <SectionStructure handleSubmit={handleSubmit} {...props} />
              ) : step === 3 ? (
                <SectionPeople handleSubmit={handleSubmit} {...props} />
              ) : (
                <OrganizationReview values={''} type="import" setStep={setStep} />
              )}
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  )
}

export default ImportOrganization
