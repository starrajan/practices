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
import { companyType, equityStructure, ownershipTransferability } from '../../../../../../shared/helpers/constants'

export default function StructureReview(props: any) {
  const { type, taxedType, equity, transfer, otherCompanyType, setStep } = props
  const companyTypePlucked = companyType.find((company: any) => company.value === taxedType)
  const equityStructurePlucked = equityStructure.find((equityStructure: any) => equityStructure.value === equity)
  const ownershipTransferabilityPlucked = ownershipTransferability.find((ownerTransfer: any) => ownerTransfer.value === transfer)
  return (
    <>
      <ReviewForm>
        <ReviewFormHead>
          <ReviewFormTitle>Structure</ReviewFormTitle>
          <ReviewEditButton id="structure-edit" onClick={() => (type === 'create' ? setStep(3) : setStep(2))}>
            EDIT
          </ReviewEditButton>
        </ReviewFormHead>
        <ReviewFormBody>
          <div>
            <QuestionText>Are you taxed as an LLC or as an S-Corp/C-Corp?</QuestionText>
            {taxedType === 'other' ? (
              <AnswerText>Other : {otherCompanyType}</AnswerText>
            ) : (
              <AnswerText>{companyTypePlucked && companyTypePlucked.label}</AnswerText>
            )}
          </div>
          <LineDivider />
          <QuestionText>What is the equity structure of your organization?</QuestionText>
          <AnswerText>{equityStructurePlucked && equityStructurePlucked.label}</AnswerText>
          <LineDivider />
          <QuestionText>How will you transfer ownership interests?</QuestionText>
          <AnswerText>{ownershipTransferabilityPlucked && ownershipTransferabilityPlucked.label}</AnswerText>
        </ReviewFormBody>
      </ReviewForm>
    </>
  )
}
