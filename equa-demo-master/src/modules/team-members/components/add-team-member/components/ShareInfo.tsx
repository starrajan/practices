import * as React from 'react'
import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { colors, screenSizes } from '../../../../../shared/styles/theme'

import {
  Row,
  Column,
  err,
  InputLabel,
  Required,
  ButtonGroup,
  InviteButton,
  FormHeading,
  AddBlock,
  MathBlock,
  BlockWrap,
  RequiredLabel,
  HeaderLink,
  AddContainer,
  AddOptionsWrapper,
  AddOptions,
  LegendData,
  Choose,
} from '../style'
import { inputStyleModal, inputStyle, inputStylePayment } from '../../../../../shared/styles/theme'
import Dropdown from '../../../../../shared/components/Dropdown'
import history from '../../../../app/components/history'
import { Paths } from '../../../../app/components/routes/types'
import docUpload from '../../../../../assets/image/docupload.png'
import { Input, InputTextArea, MultiSelect, ProgressBar, ProgressBarWhite } from 'shared/components/form-component'

import { withRouter, RouteComponentProps } from 'react-router'
import { connect } from 'react-redux'
import profile from '../../../../assets/image/profile.png'

const ShareInfo = () => {
  const chooseData = [{ label: 'Choose', value: '' }]
  const option = [
    { label: 'Yes', value: 'Yes' },
    { label: 'No', value: 'No' },
  ]

  const Currency = [{ label: 'USD', value: '' }]

  const unitClass = [
    { label: 'A', value: 'A' },
    { label: 'B', value: 'B' },
    { label: 'C', value: 'C' },
    { label: 'N', value: 'N' },
    { label: 'W', value: 'W' },
    { label: 'O', value: 'O' },
  ]
  const arrow = {
    marginTop: '16px',
    marginRight: '10px',
    height: '15px',
    cursor: 'pointer',
  }

  const unitShare = Yup.object().shape({
    class: Yup.string(),
    noOfUnits: Yup.string(),
    currency: Yup.string(),
    cashPaid: Yup.string(),
    debtCancelled: Yup.string(),
    ip: Yup.string(),
    OtherConsideration: Yup.string(),
    sharePrice: Yup.string(),
    Notes: Yup.string(),
    Schedule: Yup.string(),
    Legend: Yup.string(),
    federalExemption: Yup.string(),
    StateExemption: Yup.string(),
    StateOfResidency: Yup.string(),
    RuleDate: Yup.string(),
  })

  const TransferShare = Yup.object().shape({
    number: Yup.string(),
    noOfUnits: Yup.string(),
    currency: Yup.string(),
    cashPaid: Yup.string(),
    debtCancelled: Yup.string(),
    ip: Yup.string(),
    OtherConsideration: Yup.string(),
    sharePrice: Yup.string(),
    TransferFrom: Yup.string(),
    Title: Yup.string(),
    AmountOfShares: Yup.string(),
  })
  const legendTextData =
    'THE SECURITIES REPRESENTED HEREBY HAVE NOT BEEN REGISTERED UNDER THE SECURITIES ACT OF 1993, AND HAVE BEEN ACQUIRED FOR INVESTMENT AND NOT WITH A VIEW TO, OR IN CONNECTION WITH, THE SALE OR DISTRIBUTION THEREOF. NO SUCH SALE OR DISTRIBUTION MAY BE EFFECTED WITHOUT AN EFFECTIVE REGISTRATION STATEMENT RELATED THERETO OR AN OPTION OF COUNSEL IN A FORM SATISFACTORY TO THE COMPANY THAT SUCH REGISTRATION IS NOT REQUIRED UNDER THE SECURITIES ACT OF 1993. THE SHARES REPRESENTED BY THIS CERTIFICATE MAY BE TRANSFERRED ONLY IN ACCORDANCE WITH THE TERMS OF AN AGREEMENT BETWEEN THE COMPANY AND THE STOCKHOLDER, A COPY OF WHICH IS ON FILE WITH AND MAY BE OBTAINED FROM THE SECRETARY OF THE COMPANY AT NO CHARGE.'

  const [selectedRole, setSelectedRole] = useState('')
  const roleSelectHandler = (event: any) => {
    const data = event.target.value
    setSelectedRole(data)
  }

  const [selectedCurrency, setSelectedCurrency] = useState('')
  const CurrencySelectHandler = (event: any) => {
    const date = event.target.value
    setSelectedCurrency(date)
  }

  const submitValues = async (values: any) => {
    console.log('TCL: submitValues -> values', values)
  }

  const backToTeamMember = () => {
    history.push(`${Paths.TeamMember}`)
  }
  const [activeTab, setActiveTab] = useState('unit')
  const selectTab = (val: any) => {
    setActiveTab(val)
  }

  const [selectedFederal, setSelectedFederal] = useState('')
  const FederalSelectHandler = (event: any) => {
    const data = event.target.value
    setSelectedFederal(data)
  }

  return (
    <div>
      <FormHeading>Share Information</FormHeading>
      <AddOptionsWrapper>
        <AddOptions
          onClick={() => selectTab('unit')}
          style={{
            border: activeTab === 'unit' ? '1px solid #57BB41' : 'none',
            color: activeTab === 'unit' ? colors.green : colors.white,
          }}
        >
          Draft Units
        </AddOptions>
        <AddOptions
          onClick={() => selectTab('shares')}
          style={{
            border: activeTab === 'shares' ? '1px solid #57BB41' : 'none',
            color: activeTab === 'shares' ? colors.green : colors.white,
          }}
        >
          Transfer Shares
        </AddOptions>
      </AddOptionsWrapper>
      <div>
        {activeTab === 'unit' ? (
          <div style={{ marginTop: '20px' }}>
            <Formik
              initialValues={{
                class: '',
                number: '',
                noOfUnits: '',
                currency: '',
                cashPaid: '',
                debtCancelled: '',
                ip: '',
                OtherConsideration: '',
                sharePrice: '',
                Notes: '',
                Schedule: '',
                Legend: '',
                federalExemption: '',
                StateExemption: '',
                StateOfResidency: '',
                RuleDate: '',
              }}
              validationSchema={unitShare}
              onSubmit={(values, { setSubmitting }) => {
                submitValues(values)
                setSubmitting(false)
              }}
            >
              {({ isSubmitting }) => (
                <Form noValidate>
                  <div>
                    <Row>
                      <Column>
                        <InputLabel>Unit Class</InputLabel>
                        <Dropdown
                          dropDownStyle={'basic'}
                          dropData={unitClass}
                          selectedValue={selectedRole}
                          onValueSelect={roleSelectHandler}
                        />
                        <ErrorMessage component={err} name="class" />
                      </Column>
                      <Column>
                        <InputLabel>Certification Number</InputLabel>
                        <Field style={inputStyleModal} type="text" name="number" />
                        <ErrorMessage component={err} name="number" />
                      </Column>
                    </Row>
                  </div>

                  <div>
                    <FormHeading>Transaction Value</FormHeading>
                    <Row>
                      <Column>
                        <InputLabel>Number of Units</InputLabel>
                        <Field style={inputStyleModal} type="text" name="noOfUnits" />
                        <ErrorMessage component={err} name="noOfUnits" />
                      </Column>

                      <Column>
                        <InputLabel>Currency</InputLabel>
                        <Dropdown
                          dropDownStyle={'basic'}
                          dropData={Currency}
                          selectedValue={selectedCurrency}
                          onValueSelect={CurrencySelectHandler}
                        />
                        <ErrorMessage component={err} name="currency" />
                      </Column>
                    </Row>
                    <Row>
                      <Column>
                        <InputLabel>Cash Paid</InputLabel>
                        <Field style={inputStyleModal} type="text" name="cashPaid" />
                        <ErrorMessage component={err} name="cashPaid" />
                      </Column>

                      <Column>
                        <InputLabel>Debt Cancelled</InputLabel>
                        <Field style={inputStyleModal} type="text" name="debtCancelled" />
                        <ErrorMessage component={err} name="debtCancelled" />
                      </Column>
                    </Row>
                    <Row>
                      <Column>
                        <InputLabel>Value of IP Transferred</InputLabel>
                        <Field style={inputStyleModal} type="text" name="ip" />
                        <ErrorMessage component={err} name="ip" />
                      </Column>

                      <Column>
                        <InputLabel>Other Consideration</InputLabel>
                        <Field style={inputStyleModal} type="text" name="OtherConsideration" />
                        <ErrorMessage component={err} name="OtherConsideration" />
                      </Column>
                    </Row>
                    <Row>
                      <Column>
                        <InputLabel>Individual Share Price</InputLabel>
                        <Field style={inputStyleModal} type="text" name="sharePrice" />
                        <ErrorMessage component={err} name="sharePrice" />
                      </Column>
                      <Column></Column>
                    </Row>
                  </div>

                  <FormHeading>Compliance</FormHeading>
                  <Row>
                    <Column>
                      <InputLabel>Federal Exemption</InputLabel>
                      <Dropdown
                        dropDownStyle={'basic'}
                        dropData={option}
                        selectedValue={selectedFederal}
                        onValueSelect={FederalSelectHandler}
                      />
                      <ErrorMessage component={err} name="federalExemption" />
                    </Column>

                    <Column>
                      <InputLabel>State Exemption</InputLabel>
                      <Dropdown
                        dropDownStyle={'basic'}
                        dropData={chooseData}
                        selectedValue={selectedRole}
                        onValueSelect={roleSelectHandler}
                      />
                      <ErrorMessage component={err} name="StateExemption" />
                    </Column>
                  </Row>

                  <Row>
                    <Column>
                      <InputLabel>State of Residency</InputLabel>
                      <Dropdown
                        dropDownStyle={'basic'}
                        dropData={chooseData}
                        selectedValue={selectedRole}
                        onValueSelect={roleSelectHandler}
                      />
                      <ErrorMessage component={err} name="StateOfResidency" />
                    </Column>

                    <Column>
                      <InputLabel>Date</InputLabel>
                      <Field style={inputStyleModal} type="text" name="RuleDate" />
                        <ErrorMessage component={err} name="RuleDate" />
                    </Column>
                  </Row>

                  <div>
                    <FormHeading>Legend</FormHeading>
                    <Row>
                      <Column>
                        <InputLabel>Choose Legend</InputLabel>
                        <Dropdown
                          dropDownStyle={'basic'}
                          dropData={chooseData}
                          selectedValue={selectedRole}
                          onValueSelect={roleSelectHandler}
                        />
                        <ErrorMessage component={err} name="Legend" />
                      </Column>

                      <Column></Column>
                    </Row>
                    <LegendData>
                      THE SECURITIES REPRESENTED HEREBY HAVE NOT BEEN REGISTERED UNDER THE SECURITIES ACT OF 1993, AND HAVE BEEN ACQUIRED
                      FOR INVESTMENT AND NOT WITH A VIEW TO, OR IN CONNECTION WITH, THE SALE OR DISTRIBUTION THEREOF. NO SUCH SALE OR
                      DISTRIBUTION MAY BE EFFECTED WITHOUT AN EFFECTIVE REGISTRATION STATEMENT RELATED THERETO OR AN OPTION OF COUNSEL IN A
                      FORM SATISFACTORY TO THE COMPANY THAT SUCH REGISTRATION IS NOT REQUIRED UNDER THE SECURITIES ACT OF 1993. THE SHARES
                      REPRESENTED BY THIS CERTIFICATE MAY BE TRANSFERRED ONLY IN ACCORDANCE WITHTHE TERMS OF AN AGREEMENT BETWEEN THE
                      COMPANY AND THE STOCKHOLDER, A COPY OF WHICH IS ON FILE WITH AND MAY BE OBTAINED FROM THE SECRETARY OF THE COMPANY AT
                      NO CHARGE.
                    </LegendData>
                    {/* <InputTextArea
                    name="notes"
                    placeholder=""
                    labelOpacity={0.5}
                    value={legendTextData}
                    height="350px"
                  /> */}
                  </div>

                  <div>
                    <FormHeading>Vesting Schedule</FormHeading>
                    <Row>
                      <Column>
                        <InputLabel>Schedule</InputLabel>
                        <Dropdown
                          dropDownStyle={'basic'}
                          dropData={chooseData}
                          selectedValue={selectedRole}
                          onValueSelect={roleSelectHandler}
                        />
                        <ErrorMessage component={err} name="Schedule" />
                      </Column>

                      <Column></Column>
                    </Row>
                  </div>

                  <div>
                    <FormHeading>Documents And Notes</FormHeading>
                    <div style={{ marginBottom: '15px', display: 'flex' }}>
                      <img src={docUpload} alt=""></img>
                      <Choose>Choose a document to upload</Choose>
                    </div>
                    <Row>
                      <Column>
                        <InputLabel>Notes</InputLabel>
                        {/* <Field style={inputStyleModal} type="text" name="issueDate" /> */}
                        <InputTextArea name="notes" placeholder="Type your notes here..." labelOpacity={0.5} value={''} height="130px" />
                        <ErrorMessage component={err} name="Notes" />
                      </Column>
                    </Row>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        ) : (
          <div>
            <Formik
              initialValues={{
                number: '',
                noOfUnits: '',
                currency: '',
                cashPaid: '',
                debtCancelled: '',
                ip: '',
                OtherConsideration: '',
                sharePrice: '',
                TransferFrom: '',
                Title: '',
                AmountOfShares: '',
              }}
              validationSchema={TransferShare}
              onSubmit={(values, { setSubmitting }) => {
                submitValues(values)
                setSubmitting(false)
              }}
            >
              {({ isSubmitting }) => (
                <Form noValidate>
                  <div style={{ marginTop: '20px' }}>
                    <Row>
                      <Column>
                        <InputLabel>Certification Number</InputLabel>
                        <Field style={inputStyleModal} type="text" name="number" />
                        <ErrorMessage component={err} name="number" />
                      </Column>
                    </Row>
                  </div>

                  <div>
                    <FormHeading>Transaction Value</FormHeading>
                    <Row>
                      <Column>
                        <InputLabel>Number of Units</InputLabel>
                        <Field style={inputStyleModal} type="text" name="noOfUnits" />
                        <ErrorMessage component={err} name="noOfUnits" />
                      </Column>

                      <Column>
                        <InputLabel>Currency</InputLabel>
                        <Dropdown
                          dropDownStyle={'basic'}
                          dropData={chooseData}
                          selectedValue={selectedRole}
                          onValueSelect={roleSelectHandler}
                        />
                        <ErrorMessage component={err} name="currency" />
                      </Column>
                    </Row>
                    <Row>
                      <Column>
                        <InputLabel>Cash Paid</InputLabel>
                        <Field style={inputStyleModal} type="text" name="cashPaid" />
                        <ErrorMessage component={err} name="cashPaid" />
                      </Column>

                      <Column>
                        <InputLabel>Debt Cancelled</InputLabel>
                        <Dropdown
                          dropDownStyle={'basic'}
                          dropData={chooseData}
                          selectedValue={selectedRole}
                          onValueSelect={roleSelectHandler}
                        />
                        <ErrorMessage component={err} name="debtCancelled" />
                      </Column>
                    </Row>
                    <Row>
                      <Column>
                        <InputLabel>Value of IP Transferred</InputLabel>
                        <Field style={inputStyleModal} type="text" name="ip" />
                        <ErrorMessage component={err} name="ip" />
                      </Column>

                      <Column>
                        <InputLabel>Other Consideration</InputLabel>
                        <Dropdown
                          dropDownStyle={'basic'}
                          dropData={chooseData}
                          selectedValue={selectedRole}
                          onValueSelect={roleSelectHandler}
                        />
                        <ErrorMessage component={err} name="OtherConsideration" />
                      </Column>
                    </Row>
                    <Row>
                      <Column>
                        <InputLabel>Individual Share Price</InputLabel>
                        <Dropdown
                          dropDownStyle={'basic'}
                          dropData={chooseData}
                          selectedValue={selectedRole}
                          onValueSelect={roleSelectHandler}
                        />
                        <ErrorMessage component={err} name="sharePrice" />
                      </Column>
                      <Column></Column>
                    </Row>
                  </div>

                  <div>
                    <FormHeading>Contributing</FormHeading>
                    <Row>
                      <Column>
                        <InputLabel>Transfer From</InputLabel>
                        <Field style={inputStyleModal} type="text" name="TransferFrom" />
                        <ErrorMessage component={err} name="TransferFrom" />
                      </Column>
                    </Row>
                    <Row>
                      <Column>
                        <InputLabel>Title</InputLabel>
                        <Field style={inputStyleModal} type="text" name="Title" />
                        <ErrorMessage component={err} name="Title" />
                      </Column>
                    </Row>
                    <Row>
                      <Column>
                        <InputLabel>Amount of Shares</InputLabel>
                        <Field style={inputStyleModal} type="text" name="AmountOfShares" />
                        <ErrorMessage component={err} name="AmountOfShares" />
                      </Column>
                    </Row>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        )}
      </div>
    </div>
  )
}

export default ShareInfo
