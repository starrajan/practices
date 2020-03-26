import * as React from 'react'
import { HeaderContainer, CapTableTitle, CapTableBtnGroup, CapTableBtn } from './style'
import history from '../../../app/components/history'
import { Paths } from '../../../app/components/routes/types'
const CapTableHeader = (props: any) => {
  const handleTransfer = () => {
    history.push(Paths.sharesTransfer)
  }
  const handleDraftUnits = () => {
    history.push(Paths.draftUnits)
  }
  const handleAddMember = () => {
    history.push(Paths.AddTeamMembers)
  }
  return (
    <HeaderContainer>
      <CapTableTitle>
        <h1>Cap Table</h1>
        <p>Cognition, Inc </p>
      </CapTableTitle>
      <CapTableBtnGroup>
        <CapTableBtn onClick={() => handleAddMember()}>add member</CapTableBtn>
        <CapTableBtn onClick={() => handleDraftUnits()}>DRAFT UNITS</CapTableBtn>
        <CapTableBtn onClick={() => handleTransfer()}>TRANSFER </CapTableBtn>
      </CapTableBtnGroup>
    </HeaderContainer>
  )
}

export default CapTableHeader
