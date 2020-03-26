import * as React from 'react'
import {
  ReviewForm,
  ReviewFormHead,
  ReviewFormBody,
  TeamMembers,
  MemberName,
  ReviewFormTitle,
  MemberDesignation,
  ReviewMemberList,
  ReviewEditButton,
} from '../../style'

interface TeamMembers {
  name: string
  designation: Array<string>
}
const PeopleReview = (props: any) => {
  const { type, members, setStep } = props

  const TeamMember = (props: TeamMembers) => {
    const { name, designation } = props
    return (
      <>
        <MemberName>{name}</MemberName>
        <ReviewMemberList>
          {designation.map((v, k) => {
            return <MemberDesignation key={k}>{v}</MemberDesignation>
          })}
        </ReviewMemberList>
      </>
    )
  }

  return (
    <>
      <ReviewForm>
        <ReviewFormHead>
          <ReviewFormTitle>People</ReviewFormTitle>
          <ReviewEditButton id="members-edit" onClick={() => (type === 'create' ? setStep(4) : setStep(3))}>
            EDIT
          </ReviewEditButton>
        </ReviewFormHead>
        <ReviewFormBody>
          <TeamMembers>Team Members</TeamMembers>
          {members.map((v: any, k: any) => {
            let roles = []
            for (let i = 0; i < v.roles.length; i++) {
              roles.push(v.roles[i].designation)
            }
            return <TeamMember key={k} name={v.fullName} designation={roles} />
          })}
        </ReviewFormBody>
      </ReviewForm>
    </>
  )
}

export default PeopleReview
