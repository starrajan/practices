import * as React from 'react'
import { useState } from 'react'
import {
  Container,
  DraftUnitsHeader,
  DraftUnitsHeading,
  DraftUnitsProgress,
  ShareTransferFrom,
  FormTitle,
  FormInputGroup,
  FormInput,
  FinishButton,
  UpLegendButton,
  UploadLegendBlock,
  DraftDoc,
} from './style'
import UploadImg from 'assets/image/upload.svg'
import FileUploadImg from 'assets/image/fileUploadImg.svg'
import history from '../app/components/history'
import Arrow from 'assets/image/arrow.svg'
import { Formik, Form } from 'formik'
import { Input, InputTextArea, FormSelect, ProgressBar } from 'shared/components/form-component'

const unitClassList: any = [
  { label: 'Class A', value: 'Class A' },
  { label: 'Class B', value: 'Class B' },
  { label: 'Class C', value: 'Class C' },
  { label: 'Class D', value: 'Class D' },
]
const currencyList: any = [
  { label: 'USD', value: 'USD' },
  { label: 'INR', value: 'INR' },
  { label: 'EUR', value: 'EUR' },
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
const dateList: any = [
  { label: '2019/08/15', value: '2019/08/15' },
  { label: '2019/04/05', value: '2019/04/05' },
  { label: '2019/07/11', value: '2019/07/11' },
]

const federalExemption: any = [
  { label: 'Section 4(aX2)', value: 'Section 4(aX2)' },
  { label: 'Section 5(bX2)', value: 'Section 5(bX2)' },
  { label: 'Section 6(cX2)', value: 'Section 6(cX2)' },
]
const stateResidency: any = [
  { label: 'Delaware', value: 'Delaware' },
  { label: 'Hawaii', value: 'Hawaii' },
  { label: 'Idaho', value: 'Idaho' },
]
const legendList: any = [
  { label: 'Default', value: 'Default' },
  { label: 'EquaAdviser', value: 'EquaAdviser' },
  { label: 'EquaAdmin', value: 'EquaAdmin' },
]
const VestingScheduleList: any = [
  { label: 'No Vesting', value: 'No Vesting' },
  { label: 'Vesting', value: 'Vesting' },
]
const legendTextData =
  'THE SECURITIES REPRESENTED HEREBY HAVE NOT BEEN REGISTERED UNDER THE SECURITIES ACT OF 1993, AND HAVE BEEN ACQUIRED FOR INVESTMENT AND NOT WITH A VIEW TO, OR IN CONNECTION WITH, THE SALE OR DISTRIBUTION THEREOF. NO SUCH SALE OR DISTRIBUTION MAY BE EFFECTED WITHOUT AN EFFECTIVE REGISTRATION STATEMENT RELATED THERETO OR AN OPTION OF COUNSEL IN A FORM SATISFACTORY TO THE COMPANY THAT SUCH REGISTRATION IS NOT REQUIRED UNDER THE SECURITIES ACT OF 1993. THE SHARES REPRESENTED BY THIS CERTIFICATE MAY BE TRANSFERRED ONLY IN ACCORDANCE WITH THE TERMS OF AN AGREEMENT BETWEEN THE COMPANY AND THE STOCKHOLDER, A COPY OF WHICH IS ON FILE WITH AND MAY BE OBTAINED FROM THE SECRETARY OF THE COMPANY AT NO CHARGE.'

const DraftUnits = (props: any) => {
  const [completedPercent, setCompletedPercent] = useState(56)

  const goBack = () => {
    history.goBack()
  }
  const initialValues = {
    unitClass: '',
    certificateNumber: '',
    numberOfUnits: '',
    currencyType: '',
    cashPaid: '',
    debtCancelled: '',
    ipTransferValue: '',
    otherConsideration: '',
    individualSharePrice: '',
    issuedTo: '',
    boardApprovedDate: '',
    issueDate: '',
    federalExemption: '',
    stateExemption: '',
    residencyState: '',
    rule144Date: '',
    legend: '',
    legendText: '',
    vestingSchedule: '',
    notes: '',
  }
  const handleSubmit = (values: any) => {
    console.log('values-->', values)
  }

  return (
    <Container>
      <DraftUnitsHeader>
        <DraftUnitsHeading>
          <img src={Arrow} alt="" onClick={() => goBack()} />
          <h1>Draft Units</h1>
        </DraftUnitsHeading>
        <DraftUnitsProgress>
          <ProgressBar percent={completedPercent} />
          <p>{`${completedPercent}% Complete`}</p>
        </DraftUnitsProgress>
      </DraftUnitsHeader>

      <ShareTransferFrom>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting }) => {
            handleSubmit(values)
          }}
        >
          {(values: any) => (
            <Form>
              <div>
                <FormTitle>Certificate</FormTitle>
                <FormInputGroup>
                  <FormInput>
                    <FormSelect name="unitClass" label="Unit Class" options={unitClassList} labelOpacity={0.5} />
                  </FormInput>
                  <FormInput>
                    <Input
                      name="certificateNumber"
                      label="Certification Number"
                      placeholder="Enter certificate number"
                      {...props}
                      labelOpacity={0.5}
                    />
                  </FormInput>
                </FormInputGroup>
              </div>

              <div>
                <FormTitle>Transaction Value</FormTitle>
                <FormInputGroup>
                  <FormInput>
                    <Input name="numberOfUnits" label="Number of Units" placeholder="Enter number Of Units" {...props} labelOpacity={0.5} />
                  </FormInput>
                  <FormInput>
                    <FormSelect name="currencyType" label="Currency" options={currencyList} labelOpacity={0.5} />
                  </FormInput>
                </FormInputGroup>
                <FormInputGroup>
                  <FormInput>
                    <Input name="cashPaid" label="Cash Paid" placeholder="Enter cash paid" {...props} labelOpacity={0.5} />
                  </FormInput>
                  <FormInput>
                    <Input name="debtCancelled" label="Debt Cancelled" placeholder="Enter debt cancelled" {...props} labelOpacity={0.5} />
                  </FormInput>
                </FormInputGroup>
                <FormInputGroup>
                  <FormInput>
                    <Input
                      name="ipTransferValue"
                      label="Value of IP Transferred"
                      placeholder="Enter IP transferred "
                      {...props}
                      labelOpacity={0.5}
                    />
                  </FormInput>
                  <FormInput>
                    <Input
                      name="otherConsideration"
                      label="Other Consideration"
                      placeholder="Enter other consideration value"
                      {...props}
                      labelOpacity={0.5}
                    />
                  </FormInput>
                </FormInputGroup>
                <FormInput>
                  <Input
                    name="individualSharePrice"
                    label="Individual Share Price"
                    placeholder="Enter individual share price"
                    {...props}
                    labelOpacity={0.5}
                  />
                </FormInput>
              </div>
              <div>
                <FormTitle>Member</FormTitle>
                <FormSelect name="issuedTo" label="Issued To:" options={memberName} labelOpacity={0.5} />
                <FormInputGroup>
                  <FormInput>
                    <FormSelect name="boardApprovedDate" label="Board Approval Date" options={dateList} labelOpacity={0.5} />
                  </FormInput>
                  <FormInput>
                    <FormSelect name="issueDate" label="Issue Date" options={dateList} labelOpacity={0.5} />
                  </FormInput>
                </FormInputGroup>
              </div>
              <div>
                <FormTitle>Compliance</FormTitle>
                <FormInputGroup>
                  <FormInput>
                    <FormSelect name="federalExemption" label="Federal Exemption" options={federalExemption} labelOpacity={0.5} />
                  </FormInput>
                  <FormInput>
                    <FormSelect name="stateExemption" label="State Exemption" options={dateList} labelOpacity={0.5} />
                  </FormInput>
                </FormInputGroup>
                <FormInputGroup>
                  <FormInput>
                    <FormSelect name="residencyState" label="State of Residency" options={stateResidency} labelOpacity={0.5} />
                  </FormInput>
                  <FormInput>
                    <FormSelect name="rule144Date" label="Rule 144 Date" options={dateList} labelOpacity={0.5} />
                  </FormInput>
                </FormInputGroup>
              </div>
              <div>
                <FormTitle>Legend</FormTitle>
                <FormInputGroup>
                  <FormInput>
                    <FormSelect name="legend" label="Choose Legend" options={legendList} labelOpacity={0.5} />
                  </FormInput>
                  <FormInput>
                    <UploadLegendBlock>
                      <p>OR</p>
                      <UpLegendButton type="button">
                        <img src={UploadImg} alt="" />
                        <span>upload legend</span>
                      </UpLegendButton>
                    </UploadLegendBlock>
                  </FormInput>
                </FormInputGroup>
                <div className="legend-text-area">
                  <InputTextArea
                    name="legendText"
                    placeholder="Enter cash paid"
                    {...props}
                    labelOpacity={0.5}
                    value={legendTextData}
                    height="350px"
                  />
                </div>
              </div>
              <div>
                <FormTitle>Vesting Schedule</FormTitle>
                <FormInput>
                  <FormSelect name="vestingSchedule" label="Schedule" options={VestingScheduleList} labelOpacity={0.5} />
                </FormInput>
              </div>
              <div>
                <FormTitle>Documents And Notes</FormTitle>
                <DraftDoc className="doc-notes">
                  <img src={FileUploadImg} alt="" />
                  <p>Choose a document to upload</p>
                </DraftDoc>
                <InputTextArea name="notes" label="Notes" placeholder="Type your notes here..." {...props} height="110px" />
              </div>

              <FinishButton type="submit">Finish</FinishButton>
            </Form>
          )}
        </Formik>
      </ShareTransferFrom>
    </Container>
  )
}

export default DraftUnits
