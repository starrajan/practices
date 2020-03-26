import * as React from 'react'
import { Formik, Form, FormikProps } from 'formik'
import { Container } from './style'
import OrganizationTab from './organization-tab'
import SectionOrganization from './section-organization'
import SectionSetUp from './section-setup'
import SectionStructure from './section-structure'
import SectionPeople from './section-people'
import OrganizationReview from './organization-review'

const CreateOrganization = (props: any) => {
  const { step, setStep } = props

  const initialValues = {
    name: '',
    businessAddress: {
      country: '',
      streetAddress: '',
      state: '',
      province: '',
      city: '',
      postalCode: '',
    },
    mailingAddress: {
      country: '',
      streetAddress: '',
      state: '',
      province: '',
      city: '',
      postalCode: '',
    },
    primaryActivity: 0,
    members: [],
    companyType: 0,
    otherCompanyType: '',
  }

  const handleSubmit = (values: any) => {
    console.log('values--->', values)
    if (step <= 4) {
      setStep(step + 1)
    }
  }
  return (
    <Container>
      {step !== 5 && <OrganizationTab step={step} type={'create'} />}
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
                <SectionSetUp handleSubmit={handleSubmit} {...props} />
              ) : step === 3 ? (
                <SectionStructure handleSubmit={handleSubmit} {...props} />
              ) : step === 4 ? (
                <SectionPeople handleSubmit={handleSubmit} {...props} />
              ) : (
                <OrganizationReview values={''} type="create" setStep={setStep} />
              )}
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  )
}

export default CreateOrganization
