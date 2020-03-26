import * as React from 'react'
import { Field } from 'formik'
import { RadioContainer, CheckMark, InfoBox, InfoIcon, CheckBoxLabel } from './style'
import styled from 'styled-components'
import { ReactElement } from 'react'

interface BoxProps {
  name?: string
  id?: string
  text?: string | ReactElement
  type: string
  handleClick?: (e: any) => void
  defaultChecked?: boolean
  checked?: boolean
  info?: string
  onChange?: any
  input?: any
}

interface Props extends BoxProps {
  name: string
  type: string
}

const StyledMulti = styled.span`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: flex-end;
  margin: 10px 0;
  > div:first-child {
    font-size: 0.9em;
  }
`

export const MultiBox = (props: any) => {
  const { name, text, handleClick, type, defaultChecked, checked, id, info, input } = props
  return (
    <Field name={name}>
      {({ form, field }: any) => (
        <StyledMulti>
          <CheckBoxLabel>{text}</CheckBoxLabel> {!!info && <InfoIcon>&#9432;</InfoIcon>}
          <RadioContainer>
            <input
              id={id}
              type={type}
              name={name}
              onClick={handleClick}
              defaultChecked={defaultChecked}
              checked={checked}
              onChange={() => form.setFieldValue(field.name, !field.value)}
              {...input}
            />
            {info && (
              <InfoBox>
                <span>&#9432;</span>
                {info}
              </InfoBox>
            )}
            <CheckMark type={type} />
          </RadioContainer>
        </StyledMulti>
      )}
    </Field>
  )
}

export default MultiBox
