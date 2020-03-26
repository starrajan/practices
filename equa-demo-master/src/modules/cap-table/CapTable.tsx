import * as React from 'react'
import { LineSeparator, CapTableContainer, CapTableContent } from './style'
import { CapTableHeader, CapTableSnapshot, TableView } from './components'

const CapTable = (props: any) => {
  return (
    <CapTableContainer>
      <CapTableContent>
        <CapTableHeader />
        <LineSeparator />
        <CapTableSnapshot />
        <TableView />
      </CapTableContent>
    </CapTableContainer>
  )
}

export default CapTable
