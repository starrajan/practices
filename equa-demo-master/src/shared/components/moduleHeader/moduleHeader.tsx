import * as React from 'react'
import { FlexCol, FlexRow, StyledH1, StyledH2 } from '../../styles/styled'
import { colors } from '../../styles/theme'
import styled from 'styled-components'

interface Props {
  title: string
  buttons?: any[]
  noUnderline?: boolean
  centered?: boolean
  description?: any
}

const StyledHeader = styled.div<any>`
  margin-bottom: 20px;
  padding-bottom: 40px;
  > div:first-child {
    justify-content: ${(props: any) => (props.centered ? 'center' : 'space-between')};
  }
  h2 {
    margin-bottom: 0;
    padding-bottom: 0;
  }
  button + * {
    margin-left: 10px;
  }
`

const Description = styled.div`
  text-align: start;
  margin: 0;
  color: ${colors.white};
  font-size: 32px;
  line-height: 44px;
`

const ModuleHeader = (props: Props) => {
  const { buttons, noUnderline, centered, description } = props
  return (
    <StyledHeader centered={centered} noUnderline={noUnderline}>
      <FlexRow>
        <FlexCol>
          <StyledH2 color={colors.white}>{props.title}</StyledH2>
          <Description>{description && description}</Description>
        </FlexCol>
        <FlexRow>
          {buttons &&
            buttons.map(button => {
              return button
            })}
        </FlexRow>
      </FlexRow>
    </StyledHeader>
  )
}

export default ModuleHeader
