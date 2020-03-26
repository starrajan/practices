import * as React from 'react'
import { Field } from 'react-final-form'
import { StyledSelect } from './style'

interface Props {
  readOnly?: boolean
  name: string
  label?: string
  options?: string[]
  defaultOption?: string
  children?: any
}

const InfoCollectionSelect = (props: Props) => {
  const { readOnly, name, options, defaultOption, label } = props
  return (
    <StyledSelect>
      <div>{label}</div>
      <Field disabled={readOnly} name={name} component="select" required>
        {options ? (
          <>
            <option value="">{defaultOption}</option>
            {options.map((option: string, index: number) => {
              return (
                <option value={option} key={index}>
                  {option}
                </option>
              )
            })}
          </>
        ) : (
          <> {props.children} </>
        )}
      </Field>
    </StyledSelect>
  )
}

export default InfoCollectionSelect
