import * as React from 'react'
import {
  ReviewForm,
  LineDivider,
  ReviewFormHead,
  ReviewFormBody,
  ReviewFormTitle,
  QuestionText,
  AnswerText,
  ReviewEditButton,
} from '../../style'
import AddressReview from '../address-review/AddressReview'

export default function SetupReview(props: any) {
  const { agent, viewBankAccount, viewEin, bankAddress, setStep } = props
  return (
    <>
      <ReviewForm>
        <ReviewFormHead>
          <ReviewFormTitle>Setup</ReviewFormTitle>
          <ReviewEditButton id="setup-edit" onClick={() => setStep(2)}>
            EDIT
          </ReviewEditButton>
        </ReviewFormHead>
        <ReviewFormBody>
          <QuestionText>Would you like equaSTART to act as your Registered Agent and create your organization?</QuestionText>
          <AnswerText>{!!agent ? 'NO' : 'YES'}</AnswerText>
          <LineDivider />
          {!!agent && agent.address ? (
            <AddressReview
              addressName="Registered Agent"
              country={agent.address.country}
              streetAddress={agent.address.street1}
              state={agent.address.state}
              province={agent.address.province}
              city={agent.address.city}
              postalCode={agent.address.postalCode}
            />
          ) : null}
          {!!agent && agent.address ? <LineDivider /> : null}
          <QuestionText>Would you like equaSTART to create a bank account for your organization?</QuestionText>
          <AnswerText>{!!bankAddress ? 'YES' : 'NO'}</AnswerText>
          <LineDivider />
          {bankAddress ? (
            <AddressReview
              addressName="Billing Address"
              country={bankAddress.country}
              streetAddress={bankAddress.street1}
              state={bankAddress.state}
              province={bankAddress.province}
              city={bankAddress.city}
              postalCode={bankAddress.postalCode}
            />
          ) : null}
          {bankAddress ? <LineDivider /> : null}
          <QuestionText>Would you like to view your bank account information on equaSTART when it is available?</QuestionText>
          <AnswerText>{!!viewBankAccount  ? 'YES' : 'NO'}</AnswerText>
          <LineDivider />
          <QuestionText>Would you like to view your EIN on equaSTART when it is available?</QuestionText>
          <AnswerText>{!!viewEin  ? 'YES' : 'NO'}</AnswerText>
        </ReviewFormBody>
      </ReviewForm>
    </>
  )
}
