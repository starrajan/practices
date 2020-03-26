import * as React from 'react'
import styled from 'styled-components'

const StyledNotFound = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 10%;
`

export function NotFound() {
  return (
    <StyledNotFound>
      <div>Page Not Found</div>
    </StyledNotFound>
  )
}
