import styled from 'styled-components'
import { colors } from '../../../../shared/styles/theme'
import { Button } from '../../../../shared/components/button'

export const ReviewTitle = styled.h1`
  font-size: 32px;
  color: ${colors.white};
  margin-bottom: 100px;
  font-family: Regular;
  margin-left: -45%;
  span {
    color: ${colors.white};
    font-size: 38px;
    width: 25px;
    margin-right: auto;
    font-family: Regular;
    cursor: pointer;
  }
`
export const ReviewCont = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.white};
  max-width: 600px;
  margin: 0 auto;
`
export const LineDivider = styled.div`
  border: 1px solid ${colors.checkMarkColor};
  margin: 2em -1em 2em -1.5em;
`

export const ReviewForm = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.greyBackground};
  padding: 1em;
  margin-bottom: 3em;
`
export const ReviewFormHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 52px;
`
export const ReviewFormTitle = styled.h1`
  font-size: 24px;
  font-family: Regular;
`
export const ReviewEditButton = styled.button`
  border: 0;
  font-size: 14px;
  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;
  border-radius: 2px;
  font-weight: bold;
  background: rgba(0, 0, 0, 0.1);
  color: ${colors.white};
  cursor: pointer;
  width: 115px;
  height: 37px;
  &:hover {
    background-color: ${colors.grey};
    opacity: 0.5;
    transition: 0.5s;
  }
  font-family: Regular;
`
export const ReviewFormBody = styled.div`
  padding-left: 0.5em;
`
export const ReviewAddress = styled.h1`
  font-size: 24px;
  font-family: Regular;
`
export const QuestionText = styled.p`
  font-size: 18px;
  line-height: 22px;
  opacity: 0.4;
  font-family: Regular;
`
export const AnswerText = styled.p`
  font-size: 18px;
  line-height: 22px;
  margin-top: 12px;
  font-family: Regular;
`
export const ReviewMemberList = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export const MemberName = styled.p`
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 1rem;
  font-family: Regular;
`
export const TeamMembers = styled.p`
  font-size: 18px;
  line-height: 22px;
  opacity: 0.4;
  font-family: Regular;
`
export const MemberDesignation = styled.p`
  margin-right: 12px;
  padding: 0.5em;
  font-size: 14px;
  line-height: 22px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  font-family: Regular;
`

export const AddressName = styled.p`
  font-size: 18px;
  opacity: 0.4;
  margin: 24px 0 0 0;
  font-family: Regular;
`
export const AddressLocation = styled.p`
  font-size: 18px;
  margin: 8px 0 0 0;
  font-family: Regular;
`
export const AddressGroup = styled.div`
  display: flex;
  > div {
    width: 300px;
  }
`
export const AddressDetails = styled.div``
export const ReviewFinish = styled(Button)`
  margin: 30px 0;
  width: 200px;
`
