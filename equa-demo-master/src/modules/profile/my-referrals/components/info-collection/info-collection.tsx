import * as React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
// import { Container } from '@styles/styled'
// import { Form } from 'react-final-form'
import InfoCollectionInput from './info-collection-input/info-collection-input'
import InfoCollectionSelect from './info-collection-select/info-collection-select'
// import { required, isNumeric, isEmail } from '@helpers/field-validators'

import Dropdown from '../../../../../shared/components/Dropdown'
import { inputStyleFilled, inputStyle, inputStylePayment } from '../../../../../shared/styles/theme'

import {
  InfoCollectionWrapper,
  InfoDescription,
  InformationBlock,
  InforMationForm,
  InformationInputGroup,
  InformationButton,
  InformationButtonGroup,
  InformationSubmitDetails,
  InfoDetails,
  InfoDetailsTab,
  InfoTitleName,
  InfoValue,
  InfoEdit,
  Row,
  Column,
  err,
  InputLabel,
} from './style'

interface Props {
  // submitInfoResponse: any
  user: any
}

interface State {
  values: any
  orgType: string[]
  schedule: string[]
  enterDesc: string
  submittedDesc: string
  showInfoBlock: boolean
  showInfoBlockView: boolean
}

const orgType = {}
class InfoCollection extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      orgType: ['Private Company', 'Public Company', 'Investor'],
      schedule: ['Zoom', 'Skype', 'Google Meet'],
      enterDesc: 'Give us some information to earn an extra scratch ticket!',
      submittedDesc: 'Thank you for submitting your information. You have earned one extra scratch ticket!',
      showInfoBlock: false,
      showInfoBlockView: false,
      values: {
        companyEmail: '',
        companyName: '',
        phoneNumber: '',
        organizationType: '',
        numberOfSecurityHolders: '',
        scheduleTool: '',
      },
    }
  }
  componentDidMount = async () => {
    // if (this.props.user) {
    //   await this.props.getReferralData(this.props.user.id)
    //   if (this.props.referralData.companyInfo) {
    //     const {
    //       referralData: {
    //         companyInfo: { email, name, phoneNumber, organizationType, numberSecurityHolder, scheduleTool },
    //       },
    //     } = this.props
    //     this.setState({
    //       showInfoBlockView: true,
    //       values: {
    //         companyEmail: email,
    //         companyName: name,
    //         phoneNumber,
    //         organizationType: organizationType === 1 ? 'Private Company' : organizationType === 2 ? 'Public Company' : 'Investor',
    //         numberOfSecurityHolders: numberSecurityHolder,
    //         scheduleTool: scheduleTool === 1 ? 'Zoom' : scheduleTool === 2 ? 'Skype' : 'Google Meet',
    //       },
    //     })
    //   }
    // }
  }
  handleInformationBlock = () => {
    const { showInfoBlock } = this.state
    this.setState({ showInfoBlock: !showInfoBlock })
  }
  handleEditInfo = () => {
    // const { showInfoBlockView } = this.state
    // this.setState({ showInfoBlockView: !showInfoBlockView })
  }

  handleDriftCall = () => {
    //@ts-ignore
    window.drift.api.startInteraction({ interactionId: 103371, goToConversation: true })
  }

  schedule = () => {
    console.log('schedule')
  }
  submit = () => {
    this.setState({
            showInfoBlockView: true,
            values: {
              companyEmail: 'contact@greenenergy.io',
              companyName: 'Green Energy',
              phoneNumber:'+1 (234) 567-8910',
              organizationType: 'Private Company',
              numberOfSecurityHolders: 4,
              scheduleTool: 'Zoom',
            },
          })
  }
  
  submitValues = async (values: any) => {
    console.log('TCL: submitValues -> values', values)
    this.setState({ showInfoBlockView: true, values })
    // this.setState({
    //         showInfoBlockView: true,
    //         values: {
    //           companyEmail: email,
    //           companyName: name,
    //           phoneNumber,
    //           organizationType: organizationType === 1 ? 'Private Company' : organizationType === 2 ? 'Public Company' : 'Investor',
    //           numberOfSecurityHolders: numberSecurityHolder,
    //           scheduleTool: scheduleTool === 1 ? 'Zoom' : scheduleTool === 2 ? 'Skype' : 'Google Meet',
    //         },
    //       })
  }
  selectOrganization = (event: any) => {
    const state = event.target.value
    console.log('InfoCollection -> selectOrganization -> event.target.value', event.target.value)
    this.setState({
      values: {
        organizationType: event.target.value,
      },
    })
  }
  selectTool = (event: any) => {
    const state = event.target.value
    console.log('InfoCollection -> selectTool -> event.target.value', event.target.value)
    this.setState({
      values: {
        scheduleTool: event.target.value,
      },
    })
  }

  render() {
    const infoScheme = Yup.object().shape({
      email: Yup.string()
        .email('Please enter a valid email')
        .required('Please enter an email'),
      name: Yup.string().required('firstName is required'),
      holders: Yup.string().required('Holder is required'),
      phone: Yup.string().required('Phone Number is required'),
      organization: Yup.string(),
      tool: Yup.string(),
    })
    const organizationData = [
      { label: 'Private Company', value: 'Private' },
      { label: 'Public Company', value: 'Public' },
      { label: 'Investor', value: 'Investor' },
    ]

    const ToolData = [
      { label: 'Zoom', value: 'Zoom' },
      { label: 'Skype', value: 'Skype' },
      { label: 'Google Meet', value: 'Google Meet' },
    ]
    const { showInfoBlock, enterDesc, showInfoBlockView, submittedDesc, values } = this.state
    return (
      <div>
        <InfoCollectionWrapper>
          <InfoDescription>
            <div className="desc">{showInfoBlockView ? submittedDesc : enterDesc}</div>
            <div className="expand-btn" onClick={this.handleInformationBlock}>
              {showInfoBlock ? '-' : '+'}
            </div>
          </InfoDescription>
          <InformationBlock showInfoBlock={this.state.showInfoBlock}>
            <InforMationForm showForm={showInfoBlockView}>
              <Formik
                initialValues={{
                  email: '',
                  name: '',
                  phone: '',
                  holder: '',
                  organization: '',
                  tool: '',
                }}
                validationSchema={infoScheme}
                onSubmit={(values, { setSubmitting }) => {
                  // this.submitValues(values)
                  console.log("InfoCollection -> render -> values", values)
                  setSubmitting(false)
                }}
              >
                {({ isSubmitting }) => (
                  <Form noValidate>
                    <Row>
                      <Column>
                        <InputLabel>Company Email</InputLabel>
                        <Field style={inputStyleFilled} type="text" name="email" />
                        <ErrorMessage component={err} name="email" />
                      </Column>

                      <Column>
                        <InputLabel>Company Name</InputLabel>
                        <Field style={inputStyleFilled} type="text" name="name" />
                        <ErrorMessage component={err} name="name" />
                      </Column>
                    </Row>

                    <Row>
                      <Column>
                        <InputLabel>Phone Number</InputLabel>
                        <Field style={inputStyleFilled} type="text" name="phone" />
                        <ErrorMessage component={err} name="phone" />
                      </Column>

                      <Column>
                        <InputLabel>Organization Type</InputLabel>
                        <Dropdown
                          dropData={organizationData}
                          selectedValue={this.state.values.organizationType}
                          onValueSelect={this.selectOrganization}
                        />
                        <ErrorMessage component={err} name="organization" />
                      </Column>
                    </Row>

                    <Row>
                      <Column>
                        <InputLabel>Number of Security Holders</InputLabel>
                        <Field style={inputStyleFilled} type="text" name="holder" />
                        <ErrorMessage component={err} name="holder" />
                      </Column>

                      <Column>
                        <InputLabel>Schedule Tool</InputLabel>
                        <Dropdown dropData={ToolData} selectedValue={this.state.values.scheduleTool} onValueSelect={this.selectTool} />
                        <ErrorMessage component={err} name="tool" />
                      </Column>
                    </Row>
                    <InformationButtonGroup>
                      <InformationButton type="button" onClick={this.submit} >Send Information</InformationButton>
                      <InformationButton type="button" background="#30424D" className="drift-open-chat" onClick={this.schedule}>
                        Schedule A Call with an Equanaut
                      </InformationButton>
                    </InformationButtonGroup>
                  </Form>
                )}
              </Formik>
            </InforMationForm>

            <InformationSubmitDetails showInfoDetails={showInfoBlockView}>
              <InfoDetailsTab>
                <InfoDetails>
                  <InfoTitleName>Company Email</InfoTitleName>
                  <InfoValue>{values.companyEmail}</InfoValue>
                </InfoDetails>
                <InfoDetails>
                  <InfoTitleName>Company Name</InfoTitleName>
                  <InfoValue>{values.companyName}</InfoValue>
                </InfoDetails>
              </InfoDetailsTab>
              <InfoDetailsTab>
                <InfoDetails>
                  <InfoTitleName>Phone Number</InfoTitleName>
                  <InfoValue>{values.phoneNumber}</InfoValue>
                </InfoDetails>
                <InfoDetails>
                  <InfoTitleName>Organization Type</InfoTitleName>
                  <InfoValue>{values.organizationType}</InfoValue>
                </InfoDetails>
              </InfoDetailsTab>
              <InfoDetailsTab>
                <InfoDetails>
                  <InfoTitleName>Number of Security Holders</InfoTitleName>
                  <InfoValue>{values.numberOfSecurityHolders}</InfoValue>
                </InfoDetails>
                <InfoDetails>
                  <InfoTitleName>Schedule Tool</InfoTitleName>
                  <InfoValue>{values.scheduleTool}</InfoValue>
                </InfoDetails>
              </InfoDetailsTab>
              <InfoEdit onClick={this.handleEditInfo}>Edit Information</InfoEdit>
            </InformationSubmitDetails>
          </InformationBlock>
        </InfoCollectionWrapper>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  user: state.user,
  // referralData: state.myReferral.referralData,
  // submitInfoResponse: state.myReferral.submitInfoResponse,
})
export default connect(mapStateToProps)(InfoCollection)
