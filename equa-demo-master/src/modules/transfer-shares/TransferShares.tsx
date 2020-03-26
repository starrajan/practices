import * as React from 'react'
import {
  Container,
  ShareTransferHeading,
  ShareTransferFrom,
  FormTitle,
  FormInputGroup,
  FormInput,
  TransferPersonBlock,
  CertificationBtn,
} from './style'
import history from '../app/components/history'
import Arrow from 'assets/image/arrow.svg'
import { Formik, Form } from 'formik'
import { Input, FormSelect } from 'shared/components/form-component'

const shareClassOptions: any = [
  { label: 'Common Shares', value: 'Common Shares' },
  { label: 'Preferred Shares', value: 'Preferred Shares' },
  { label: 'Options Shares', value: 'Options Shares' },
]
const paymentMethodList: any = [
  { label: 'My Equa Cash Balance', value: 'My Equa Cash Balance' },
  { label: 'Dollar', value: 'Dollar' },
]
const memberName: any = [
  { label: 'Mike Johnson', value: 'Mike Johnson' },
  { label: 'Darcy Prince', value: 'Darcy Prince' },
  { label: 'Investment Holdings, LLC', value: 'Investment Holdings, LLC' },
  { label: 'Dario Shea', value: 'Dario Shea' },
  { label: 'Elsie Blankenship', value: 'Elsie Blankenship' },
  { label: 'Aalia Romero', value: 'Aalia Romero' },
  { label: 'Reef Sharp', value: 'Reef Sharp' },
]
const roles: any = [
  { label: 'Member A (Annual Vote)', value: 'memberA' },
  { label: 'Member B (Read Only)', value: 'memberB' },
  { label: 'Manager', value: 'manager' },
  { label: 'Legal', value: 'legal' },
  { label: 'Admin', value: 'admin' },
  { label: 'Advisor (Read Only)', value: 'advisor' },
  { label: 'Signatory', value: 'signatory' },
]
const TransferShares = (props: any) => {
  const goBack = () => {
    history.goBack()
  }
  const initialValues = {
    certificateNumber: '',
    amountOfShares: '',
    individualSharePrice: '',
    shareClass: '',
    paymentMethod: '',
    transferFrom: '',
    senderTitle: [],
    transferTo: '',
    receiverTitle: [],
  }
  const handleSubmit = (values: any) => {
    console.log('values-->', values)
  }

  return (
    <Container>
      <ShareTransferHeading>
        <img src={Arrow} alt="" onClick={() => goBack()} />
        <h1>Transfer Shares</h1>
      </ShareTransferHeading>
      <ShareTransferFrom>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting }) => {
            handleSubmit(values)
          }}
        >
          {(values: any) => (
            <Form>
              <FormTitle>Certificate</FormTitle>
              <FormInput>
                <Input
                  name="certificateNumber"
                  label="Certification Number"
                  placeholder="Enter certificate number"
                  {...props}
                  labelOpacity={0.5}
                />
              </FormInput>
              <div>
                <FormTitle>Transaction Value</FormTitle>
                <FormInputGroup>
                  <FormInput>
                    <Input name="amountOfShares" label="Amount of Shares" placeholder="Enter shares amount" {...props} labelOpacity={0.5} />
                  </FormInput>
                  <FormInput>
                    <Input
                      name="individualSharePrice"
                      label="Individual Share Price"
                      placeholder="Enter each share price"
                      {...props}
                      labelOpacity={0.5}
                    />
                  </FormInput>
                </FormInputGroup>
                <FormSelect name="shareClass" label="Class of Shares" options={shareClassOptions} labelOpacity={0.5} />
              </div>
              <div>
                <FormTitle>Payment</FormTitle>
                <FormSelect name="paymentMethod" label="Payment Method" options={paymentMethodList} labelOpacity={0.5} />
              </div>
              <TransferPersonBlock>
                <div>
                  <FormTitle>Contributing</FormTitle>
                  <FormSelect name="transferFrom" label="Transfer From" options={memberName} labelOpacity={0.5} />
                  <div className="title">
                    <FormSelect name="senderTitle" label="Title" isMulti={true} options={roles} placeholder="Select title" />
                  </div>
                </div>

                <div className="receiver-title">
                  <FormSelect name="transferTo" label="Transfer To" options={memberName} labelOpacity={0.5} />
                  <div className="title">
                    <FormSelect name="receiverTitle" label="Title" isMulti={true} options={roles} placeholder="Select title" />
                  </div>
                </div>
              </TransferPersonBlock>
              <CertificationBtn type="submit">see certification</CertificationBtn>
              {console.log('values==>', values)}
            </Form>
          )}
        </Formik>
      </ShareTransferFrom>
    </Container>
  )
}

export default TransferShares
