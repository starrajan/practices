import styled from 'styled-components'
import { Button } from '../../../../shared/components/button'

export const MemberLineSeparator = styled.div`
  margin: 18px -22px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`
export const NoMemberText = styled.div`
  font-family: Regular;
  color: #ffffff;
  font-size: 18px;
  opacity: 0.5;
  margin-top: 18px;
`

export const AddMemberButton = styled(Button)`
  font-size: 14px;
  display: flex;
  align-items: center;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #ffffff;
  height: 48px;
  padding-left: 0px;
  background: transparent;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
  outline: none !important;
`
export const MemberContainer = styled.div`
  margin-top: 22px;
  display: flex;
  flex-direction: column;
`
export const MemberNameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  .edit-img {
    margin-right: 1rem;
  }
  img {
    cursor: pointer;
  }
`

export const MemberName = styled.div`
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
  font-family: Regular;
`
export const RolesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
`
export const RolesText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  text-transform: capitalize;
  font-weight: 300;
  font-size: 14px;
  color: #ffffff;
  margin: 0 10px 10px 0;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  img {
    margin-left: 10px;
    width: 10px;
    height: 10px;
    cursor: pointer;
  }
`
