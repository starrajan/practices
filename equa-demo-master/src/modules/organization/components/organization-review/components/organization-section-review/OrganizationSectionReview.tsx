import * as React from 'react'
import {
  AnswerText,
  LineDivider,
  QuestionText,
  ReviewEditButton,
  ReviewForm,
  ReviewFormBody,
  ReviewFormHead,
  ReviewFormTitle,
} from '../../style'
import AddressReview from '../address-review/AddressReview'
import { primaryActivities, PrimaryActivity } from '../../../../../../shared/helpers/constants'

const OrganizationSectionReview = (props: any) => {
  const { name, businessAddress, mailingAddress, primaryActivity, setStep } = props
  const primaryActivityParsed = primaryActivities.find((activity: any) => activity.value === parseInt(primaryActivity))
  return (
    <>
      <ReviewForm>
        <ReviewFormHead>
          <ReviewFormTitle>Organization</ReviewFormTitle>
          <ReviewEditButton id="organization-edit" onClick={() => setStep(1)}>
            EDIT
          </ReviewEditButton>
        </ReviewFormHead>
        <ReviewFormBody>
          <QuestionText>Name</QuestionText>
          <AnswerText>{name}</AnswerText>
          <LineDivider />
          <AddressReview
            addressName="Business Address"
            country={businessAddress.country}
            streetAddress={businessAddress.street1}
            state={businessAddress.state}
            province={businessAddress.province}
            city={businessAddress.city}
            postalCode={businessAddress.postalCode}
          />
          <LineDivider />
          <AddressReview
            addressName="Mailing Address"
            country={mailingAddress.country}
            streetAddress={mailingAddress.street1}
            state={mailingAddress.state}
            province={mailingAddress.province}
            city={mailingAddress.city}
            postalCode={mailingAddress.postalCode}
          />
          <LineDivider />
          <QuestionText>Primary activity of your organization</QuestionText>
          <AnswerText>{primaryActivityParsed && primaryActivityParsed.label}</AnswerText>
        </ReviewFormBody>
      </ReviewForm>
    </>
  )
}

export default OrganizationSectionReview
